import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Eye,
  MousePointerClick,
  Users,
  Clock,
  Globe,
  ArrowUpRight,
  LogOut,
  BarChart3,
  Lock,
  Fingerprint,
} from "lucide-react";

function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const data = await res.json();
        onLogin(data.token);
      } else {
        setError("Invalid password");
      }
    } catch {
      setError("Connection error");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#04455E] flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center space-y-4 mb-8">
          <div className="h-16 w-16 rounded-2xl bg-[#04455E]/10 flex items-center justify-center mx-auto">
            <Lock className="h-8 w-8 text-[#04455E]" />
          </div>
          <h1 className="text-3xl font-bold text-[#04455E]">Admin Dashboard</h1>
          <p className="text-gray-500">Enter your password to access analytics</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#AD674C] text-base"
            data-testid="input-admin-password"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl text-base bg-[#AD674C] hover:bg-[#AD674C]/90"
            data-testid="button-admin-login"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
  sub,
}: {
  label: string;
  value: string | number;
  icon: React.ElementType;
  sub?: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <div className="h-10 w-10 rounded-xl bg-[#04455E]/10 flex items-center justify-center">
          <Icon className="h-5 w-5 text-[#04455E]" />
        </div>
      </div>
      <p className="text-3xl font-bold text-[#04455E]">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );
}

function Dashboard({ token, onLogout }: { token: string; onLogout: () => void }) {
  const [days, setDays] = useState(30);

  const { data, isLoading } = useQuery({
    queryKey: ["/api/admin/analytics", days],
    queryFn: async () => {
      const res = await fetch(`/api/admin/analytics?days=${days}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    refetchInterval: 30000,
  });

  if (isLoading || !data) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 border-2 border-[#04455E] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-gray-500">Loading analytics...</p>
        </div>
      </div>
    );
  }

  const formatDuration = (seconds: number) => {
    if (seconds < 60) return `${seconds}s`;
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s}s`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#04455E] text-white sticky top-0 z-50">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6" />
            <h1 className="text-lg font-semibold">O&O Analytics</h1>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              className="bg-white/10 text-white border border-white/20 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
              data-testid="select-days-range"
            >
              <option value={7} className="text-black">Last 7 days</option>
              <option value={30} className="text-black">Last 30 days</option>
              <option value={90} className="text-black">Last 90 days</option>
            </select>
            <Button
              variant="ghost"
              size="sm"
              onClick={onLogout}
              className="text-white hover:bg-white/10"
              data-testid="button-logout"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatCard
            label="Total Page Views"
            value={data.totalPageViews.toLocaleString()}
            icon={Eye}
            sub={`Last ${days} days`}
          />
          <StatCard
            label="Unique Sessions"
            value={data.uniqueVisitors.toLocaleString()}
            icon={Users}
            sub="Session-based visitors"
          />
          <StatCard
            label="Unique IP Visitors"
            value={data.uniqueIpVisitors.toLocaleString()}
            icon={Fingerprint}
            sub="IP-based unique visitors"
          />
          <StatCard
            label="Link Clicks"
            value={data.totalClicks.toLocaleString()}
            icon={MousePointerClick}
            sub={`Last ${days} days`}
          />
          <StatCard
            label="Avg. Time on Page"
            value={formatDuration(data.avgDuration)}
            icon={Clock}
            sub="Per session"
          />
        </div>

        {/* Per-Page Visitor Breakdown */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-[#04455E] mb-1 flex items-center gap-2">
            <Users className="h-5 w-5" /> Visitors by Page
          </h3>
          <p className="text-xs text-gray-400 mb-4">Unique IP = same person on same network counts once. Unique Sessions = each new browser session counts separately.</p>
          {!data.pageVisitorStats || data.pageVisitorStats.length === 0 ? (
            <p className="text-gray-400 text-sm">No data yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    <th className="text-left py-3 px-2 text-gray-500 font-medium">Page</th>
                    <th className="text-right py-3 px-2 text-gray-500 font-medium">Total Views</th>
                    <th className="text-right py-3 px-2 text-gray-500 font-medium">Unique IP Visitors</th>
                    <th className="text-right py-3 px-2 text-gray-500 font-medium">Unique Sessions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.pageVisitorStats.map((p: any, i: number) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="py-3 px-2 text-gray-700 font-mono text-xs">{p.page}</td>
                      <td className="py-3 px-2 text-right font-semibold text-[#04455E]">{p.totalViews.toLocaleString()}</td>
                      <td className="py-3 px-2 text-right">
                        <span className="inline-flex items-center gap-1 text-[#AD674C] font-semibold">
                          <Fingerprint className="h-3 w-3" />{p.uniqueIpVisitors.toLocaleString()}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <span className="inline-flex items-center gap-1 text-[#04455E] font-semibold">
                          <Users className="h-3 w-3" />{p.uniqueSessionVisitors.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#04455E] mb-4 flex items-center gap-2">
              <Eye className="h-5 w-5" /> Top Pages by Views
            </h3>
            {data.topPages.length === 0 ? (
              <p className="text-gray-400 text-sm">No data yet</p>
            ) : (
              <div className="space-y-3">
                {data.topPages.map((p: any, i: number) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 truncate max-w-[70%]">{p.page}</span>
                    <span className="text-sm font-semibold text-[#04455E]">
                      {p.views.toLocaleString()} views
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#04455E] mb-4 flex items-center gap-2">
              <ArrowUpRight className="h-5 w-5" /> Top Referrers
            </h3>
            {data.topReferrers.length === 0 ? (
              <p className="text-gray-400 text-sm">No referral data yet</p>
            ) : (
              <div className="space-y-3">
                {data.topReferrers.map((r: any, i: number) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 truncate max-w-[70%]">{r.referrer}</span>
                    <span className="text-sm font-semibold text-[#04455E]">
                      {r.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#04455E] mb-4 flex items-center gap-2">
              <Globe className="h-5 w-5" /> Visitor Locations
            </h3>
            {data.topLocations.length === 0 ? (
              <p className="text-gray-400 text-sm">No location data yet</p>
            ) : (
              <div className="space-y-3">
                {data.topLocations.map((l: any, i: number) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700 truncate max-w-[70%]">
                      {l.city}{l.region ? `, ${l.region}` : ""}, {l.country}
                    </span>
                    <span className="text-sm font-semibold text-[#04455E]">
                      {l.count.toLocaleString()} visits
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-[#04455E] mb-4 flex items-center gap-2">
              <MousePointerClick className="h-5 w-5" /> Most Clicked Links
            </h3>
            {data.clicksByElement.length === 0 ? (
              <p className="text-gray-400 text-sm">No click data yet</p>
            ) : (
              <div className="space-y-3">
                {data.clicksByElement.map((c: any, i: number) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="truncate max-w-[70%]">
                      <span className="text-sm text-gray-700">{c.elementText}</span>
                      {c.href && (
                        <p className="text-xs text-gray-400 truncate">{c.href}</p>
                      )}
                    </div>
                    <span className="text-sm font-semibold text-[#04455E]">
                      {c.count.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-[#04455E] mb-4">Recent Visitors</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Time</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Page</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">IP Address</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Location</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Referrer</th>
                  <th className="text-left py-3 px-2 text-gray-500 font-medium">Duration</th>
                </tr>
              </thead>
              <tbody>
                {data.recentVisitors.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-gray-400">
                      No visitors yet. Data will appear as people visit your site.
                    </td>
                  </tr>
                ) : (
                  data.recentVisitors.map((v: any, i: number) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="py-3 px-2 text-gray-600 whitespace-nowrap">
                        {new Date(v.timestamp).toLocaleString()}
                      </td>
                      <td className="py-3 px-2 text-gray-700">{v.page}</td>
                      <td className="py-3 px-2 text-gray-500 font-mono text-xs">{v.ipAddress || "—"}</td>
                      <td className="py-3 px-2 text-gray-600">
                        {v.city && v.country ? `${v.city}${v.region ? `, ${v.region}` : ""}, ${v.country}` : "—"}
                      </td>
                      <td className="py-3 px-2 text-gray-500 truncate max-w-[200px]">
                        {v.referrer || "Direct"}
                      </td>
                      <td className="py-3 px-2 text-gray-600">
                        {v.duration ? formatDuration(v.duration) : "—"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-[#04455E] mb-4">Daily Page Views</h3>
          {data.viewsByDay.length === 0 ? (
            <p className="text-gray-400 text-sm">No data yet. Views will appear as visitors come to your site.</p>
          ) : (
            <div className="h-48 flex items-end gap-1">
              {data.viewsByDay.map((d: any, i: number) => {
                const maxViews = Math.max(...data.viewsByDay.map((x: any) => x.views), 1);
                const height = (d.views / maxViews) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-500">{d.views}</span>
                    <div
                      className="w-full bg-[#04455E] rounded-t-md transition-all"
                      style={{ height: `${Math.max(height, 4)}%` }}
                    />
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {new Date(d.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Admin() {
  const [token, setToken] = useState<string | null>(
    sessionStorage.getItem("oo_admin_token")
  );

  const handleLogin = (t: string) => {
    sessionStorage.setItem("oo_admin_token", t);
    setToken(t);
  };

  const handleLogout = () => {
    sessionStorage.removeItem("oo_admin_token");
    setToken(null);
  };

  if (!token) {
    return <LoginForm onLogin={handleLogin} />;
  }

  return <Dashboard token={token} onLogout={handleLogout} />;
}
