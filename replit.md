# Order & Operations Consulting Website

## Overview
A modern, single-page website for Order & Operations Consulting — an HR consulting firm. The site showcases core consulting services and three software products (TextMyApp, PayrollProof, PerformancePath), with a built-in analytics dashboard for tracking visitor behavior.

## Architecture
- **Frontend**: React + TypeScript with Tailwind CSS v4, using wouter for routing
- **Backend**: Express.js server with PostgreSQL database via Drizzle ORM
- **Analytics**: Custom visitor tracking system with admin dashboard

## Pages
- `/` — Main marketing homepage
- `/admin` — Password-protected analytics dashboard

## Key Features
- Visitor analytics tracking (page views, clicks, duration, IP/geo, referrers)
- Admin dashboard with real-time data (auto-refreshes every 30 seconds)
- Embedded Calendly scheduling in the contact section
- Links to external products: textmyapp.replit.app, certifiedpayroll.replit.app, performancepath.replit.app

## Database Schema
- `users` — Admin users (id, username, password)
- `page_views` — Visitor page view tracking (session, page, referrer, IP, geo, duration, timestamp)
- `click_events` — Click tracking (session, page, element, href, timestamp)

## Branding
- **Primary color**: #AD674C (terracotta)
- **Secondary color**: #04455E (deep teal)
- **Fonts**: Cormorant Garamond (headings), Poppins (body)
- **Logo**: attached_assets/image_1772658839853.png

## Environment Variables
- `DATABASE_URL` — PostgreSQL connection string
- `ADMIN_PASSWORD` — Password for the /admin analytics dashboard

## External Links
- Calendly: calendly.com/darcie-orderandoperations
- LinkedIn: linkedin.com/company/orderandoperations
- Email: hello@orderandoperations.com
