# IEEE InnovateX 2026 — Official Event Website

[![GitHub Repository](https://img.shields.io/badge/GitHub-IEEE--IAS--x--RAS-blue?logo=github&style=flat-square)](https://github.com/26it1sa126-ai/IEEE-IAS-x-RAS)
[![Live Deployment](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-brightgreen?style=flat-square)](https://26it1sa126-ai.github.io/IEEE-IAS-x-RAS/)
[![IEEE Societies](https://img.shields.io/badge/Societies-IEEE%20%7C%20IAS%20%7C%20RAS-blue?style=flat-square)](https://ias.ieee.org)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)](#)

A modern, responsive, high-performance single-page website for **IEEE InnovateX 2026**, a flagship technical student conference organized with **IEEE Technical Societies (Industry Applications Society - IAS & Robotics and Automation Society - RAS)**.

---

## ⚡ Theme: *"INNOVATE. CONNECT. CREATE."*

IEEE InnovateX 2026 brings together students, aspiring engineers, researchers, and technology enthusiasts for a day of ideas, cutting-edge innovation, and emerging technology exploration.

---

## 🚀 Key Features

1. **Sticky Glassmorphic Navigation Bar**:
   - Fixed header with backdrop-filter blur and scroll-elevation.
   - Smooth-scrolling section links with real-time active scroll spy.
   - Fully responsive hamburger drawer navigation on tablet and mobile viewports.

2. **Futuristic Hero Section**:
   - Dynamic canvas constellation particle network with zero performance lag.
   - Event badge, typography hierarchy, and glowing gradient orbs.
   - Real-time countdown timer to October 24, 2026.
   - Dual Call-to-Action buttons ("Register Now" and "View Schedule").
   - Quick stats metric ribbon highlighting key event benchmarks.

3. **IEEE / IAS / RAS Society Showcase**:
   - Dedicated branding section featuring original IEEE, IAS, and RAS logos.
   - Proportional presentation respecting official branding standards.
   - Interactive society cards highlighting core research and application domains.

4. **About the Event & 3 Feature Pillars**:
   - Core event vision statement.
   - Feature cards with customized SVG icons and hover elevations:
     - **Innovation**: Real-world prototypes & emerging tech systems.
     - **Networking**: Mentorship channels and peer connections.
     - **Learning**: Visionary keynotes and technical problem solving.

5. **Event Schedule**:
   - Modern timeline layout with glowing timeline nodes and status badges.
   - Complete agenda covering Registration, Opening Ceremony, Keynote Addresses, and the Innovation & Networking Session.

6. **Keynote Speakers**:
   - **Dr. Aarav Sharma** — *Technology Researcher*
     *“Exploring the Future of AI & Emerging Technologies”*
   - **Ms. Ananya Mehta** — *Innovation & Product Strategist*
     *“From Ideas to Real-World Innovation”*
   - High-fidelity portraits, topic callouts, domain tags, and demonstration disclaimer.

7. **Why Attend Section**:
   - 4 Value-driven benefit cards (*Learn from Experts*, *Explore Emerging Technology*, *Network with Innovators*, *Showcase Your Ideas*).

8. **Interactive Registration Portal & Badge Generator**:
   - Immediate client-side validation for delegate registration.
   - Interactive badge pass receipt generation (`#IX26-XXXX`).
   - LocalStorage persistence for delegate badges.

9. **Integrated Footer**:
   - Features the official event banner with responsive framing.
   - Multi-column site links, focus domains, venue details, and copyright notices.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`), ARIA accessibility roles.
- **CSS3 (Vanilla)**:
  - Custom design tokens via CSS variables.
  - CSS Grid & Flexbox layout architecture.
  - Glassmorphic backdrops, radial gradient orbs, and micro-animations.
  - Responsive breakpoints tested across 320px, 375px, 768px, 1024px, and 1440px+.
- **JavaScript (ES6+)**:
  - Constellation particle simulation on HTML5 Canvas.
  - Live countdown ticker.
  - Dynamic scroll spy and back-to-top handler.
  - Mobile drawer state machine.
  - Form validation and delegate ticket pass generation.
- **Zero Heavy Dependencies**: Pure web standards for near-instant load times (< 100ms) and 100% Lighthouse audit friendliness.

---

## 📂 Project Structure

```
IEEE-InnovateX-2026/
├── assets/
│   ├── ieee-logo.jpg        # Official IEEE logo asset
│   ├── ias-logo.png         # IEEE IAS official branding
│   ├── ras-logo.jpg         # IEEE RAS official branding
│   ├── footer-banner.jpg    # Event footer image banner
│   ├── speaker-aarav.jpg    # Keynote speaker 1 portrait
│   └── speaker-ananya.jpg   # Keynote speaker 2 portrait
├── index.html               # Main single-page HTML5 markup
├── style.css                # Production CSS design system
├── script.js                # Interactive ES6+ application logic
├── .gitignore               # Git ignore rules
└── README.md                # Comprehensive documentation
```

---

## 💻 How to Run Locally

### Option 1: Python Built-in HTTP Server (Recommended)
Clone or navigate to the directory and run:
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in any web browser.

### Option 2: Live Server or Any Static Host
Open `index.html` directly in your browser or run with VS Code Live Server extension.

---

## 🌐 Deployment

The site is ready for static deployment on:
- **GitHub Pages**: Simply push to a repository and enable GitHub Pages in Settings -> Pages -> Deploy from branch (main).
- **Vercel**: Run `vercel` or link GitHub repository for continuous deployment.
- **Netlify / Cloudflare Pages**: Zero-configuration drag-and-drop or Git integration.

---

## 📜 License & Copyright

Organized by IEEE Student Branch in technical association with IEEE Industry Applications Society (IAS) and IEEE Robotics & Automation Society (RAS).

Copyright &copy; 2026 IEEE InnovateX. All rights reserved.
