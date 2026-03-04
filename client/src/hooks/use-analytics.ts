import { useEffect, useRef } from "react";

function getSessionId(): string {
  let id = sessionStorage.getItem("oo_session_id");
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem("oo_session_id", id);
  }
  return id;
}

export function useAnalytics() {
  const startTime = useRef(Date.now());
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    const sessionId = getSessionId();
    const page = window.location.pathname;
    const referrer = document.referrer || null;

    fetch("/api/track/pageview", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId, page, referrer }),
    }).catch(() => {});

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      const button = target.closest("button");
      const el = anchor || button;

      if (!el) return;

      const elementText = el.textContent?.trim().slice(0, 100) || null;
      const href = anchor?.href || null;
      const elementId = el.getAttribute("data-testid") || el.id || null;

      fetch("/api/track/click", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, page, elementId, elementText, href }),
      }).catch(() => {});
    };

    document.addEventListener("click", handleClick);

    const handleUnload = () => {
      const duration = Math.round((Date.now() - startTime.current) / 1000);
      navigator.sendBeacon(
        "/api/track/duration",
        new Blob(
          [JSON.stringify({ sessionId, page, duration })],
          { type: "application/json" }
        )
      );
    };

    window.addEventListener("beforeunload", handleUnload);

    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, []);
}
