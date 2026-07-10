# Arada Moment Events Management L.L.C - Website

A premium, fully responsive, and high-fidelity static Single Page Application (SPA) built for **Arada Moment Events Management L.L.C**, a leading event planning company in Dubai, UAE.

The design utilizes a sophisticated dark-mode aesthetic built around the official corporate brand colors:
*   **Deep Navy Blue**: `#091432` (Primary)
*   **Accent Warm Gold**: `#F0AB5F` (Secondary / Accent)

---

## Key Features

1.  **SPA Hash Routing**: Implements custom routing listening to hash updates (`#/home`, `#/services`, etc.) for seamless, instant, desktop-like page transitions without browser refreshes.
2.  **Responsive Design**: Mobile-first framework engineered using custom CSS grids and flexbox, ensuring smooth displays on desktop monitors, tablets, and smartphones.
3.  **Detailed Services Catalog**: Displays the 7 main service categories detailed in the requirements proposal. Tapping a category displays detailed specifications, planning processes, faqs, and custom packages.
4.  **Interactive Booking Wizard**: Let clients specify service types, dates, guest counts, and special requirements. It supports dragging moodboard references and triggers custom popup notifications.
5.  **Live Pricing Estimator**: A dynamic algorithmic calculator widget that lets visitors slider guest size, hours, and decor complexity to compute live budget estimates before submitting forms.
6.  **Multimedia Filterable Gallery**: Grid section showing event photography, highlight video loops (embedded from stock video sources), and behind-the-scenes moments with popup lightboxes.
7.  **Dynamic CMS / Admin Console**: Accessible via `Portal` links or `#/admin`:
    *   **Login Credentials**:
        *   **Username**: `admin`
        *   **Password**: `arada2026`
    *   Allows live moderation of bookings, quote sheets, newsletter signups, adding portfolio items, and writing new blog articles. All operations read/write directly to the browser's `localStorage` mock database.
8.  **Direct WhatsApp Integration**: Floating message widget pre-filled with inquiry prompts linking directly to the company's WhatsApp Business phone number: `+971-50-9757200`.

---

## Project Structure

*   `index.html` - Main structural markup, SEO tags, footer coordinate details, and popup elements.
*   `styles.css` - Custom styling theme, Google Fonts import, animations, responsive media queries, and admin dashboard panels layout.
*   `app.js` - SPA router, initial databases seeds, calculations sliders, and client-side database management actions.
*   `README.md` - Setup and deployment documentation.

---

## Deployment & Hosting

Because this is a serverless client-side web application, it can be deployed instantly to any static hosting provider.

### Options:
1.  **Netlify / Vercel**: 
    *   Simply drag and drop the folder containing these files into the Netlify dashboard. It will deploy instantly.
2.  **GitHub Pages**:
    *   Push this directory to a GitHub repository, open settings, and enable GitHub Pages on the main branch.
3.  **Traditional Shared Hosting (cPanel)**:
    *   Upload `index.html`, `styles.css`, and `app.js` (along with any logo image files) into your server's `public_html` folder.
