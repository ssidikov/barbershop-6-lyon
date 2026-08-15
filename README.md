# 💈 Lyon Barbershop 6ème — Website

A modern, high-end web experience for **Lyon Barbershop 6ème** (6TH Barbershop), an upscale men's grooming salon located on Cours Lafayette in Lyon, France.

Built with **Next.js 16 (App Router)**, **React 19**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Features

- **Luxury Dark Aesthetics**: Custom luxury theme with gold accents, refined typography (Oswald & Inter), and subtle micro-animations.
- **Hero & Intro**: Engaging hero section with smooth entrance animations and quick call-to-actions.
- **Service Menu & Pricing**: Comprehensive list of services (haircuts, beard styling, Brazilian smoothing, coloration, facial care) with transparent pricing.
- **Direct Planity Integration**: Direct booking CTA links connected to the salon's Planity booking page.
- **Interactive Portfolio / Gallery**: Showcase of salon ambiance and haircuts with graceful fallback handling.
- **Customer Reviews**: Testimonial showcase highlighting 5/5 Google Maps ratings.
- **Contact & Google Maps**: Embedded interactive map, salon address, opening hours, and phone contact.
- **Animated Preloader**: Polished opening transition loader with brand identity.
- **Fully Responsive**: Optimized for all viewports from mobile smartphones to ultra-wide desktop displays.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Google Fonts](https://fonts.google.com/) (`Oswald` for headings, `Inter` for body)

---

## 📁 Project Structure

```text
barbershop-6-lyon/
├── public/
│   └── gallery/            # Salon photos and asset images
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind v4 theme configuration
│   │   ├── layout.tsx      # Root layout, Google fonts, and SEO metadata
│   │   └── page.tsx        # Main landing page
│   └── components/
│       ├── About.tsx       # Salon story & philosophy
│       ├── Contact.tsx     # Location, opening hours & Google Maps embed
│       ├── Footer.tsx      # Footer navigation & social links
│       ├── Gallery.tsx     # Portfolio photo grid
│       ├── Hero.tsx        # Hero banner with primary CTA
│       ├── Loader.tsx      # Animated initial loading screen
│       ├── Navbar.tsx      # Sticky responsive navigation with mobile drawer
│       ├── Services.tsx    # Services catalog & pricing
│       └── Testimonials.tsx# Google customer testimonials
├── next.config.ts          # Next.js configuration
├── package.json            # Dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18.18 or higher recommended) and **npm** installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ssidikov/barbershop-6-lyon.git
   cd barbershop-6-lyon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Run the development server with:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Production Build

To create an optimized production build:

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 📍 Salon Information

- **Name**: Lyon Barbershop 6ème / 6TH Barbershop
- **Address**: 316 Cours Lafayette, 69003 Lyon, France
- **Hours**:
  - Monday – Saturday: 09:00 – 20:00
  - Sunday: 10:00 – 16:00
- **Booking**: [Planity Profile](https://www.planity.com/6th-barbershop-cours-lafayette-69003-lyon)

---

## 📄 License

Private repository. All rights reserved.
