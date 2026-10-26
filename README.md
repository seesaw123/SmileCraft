# Smile Craft — bilingual frontend prototype

## What's included
- Next.js App Router + TypeScript + Tailwind CSS 4 plus custom theme/layout CSS
- `next-intl` for `/th` and `/en` pages, with **Thai default**
- Home, Treatments, Our Clinic, Contact, and Book an Appointment pages
- Three switchable brand-inspired color schemes which **also change page layout**: Sage (split), Sand (centered), Cream (asymmetric)
- Persistent theme choice using localStorage, language switcher preserving current page
- Motion page transitions and a color-layout selector in the footer
- Responsive styling and reduced-motion support

## Local setup
```bash
npm install
npm run dev
```
Visit http://localhost:3000 (redirects to `/th`).

## Before publication
- Replace illustrative hero graphics and photo placeholders with authorized real clinic photos.
- All color values are **approximate, brand-inspired**. Verify the exact shades against the official Smile Craft PDF's color panels.
- Contact information and hours are placeholders. Confirm real values with clinic.
- The appointment form **never transmits personal data** and only displays a demo alert. Integrate a secure backend, consent, validation, anti-spam, and staff confirmation before allowing real bookings.
- Have dental content professionally reviewed in Thai and English.
- Configure real domain, production deployment, SEO alternate URLs, sitemap, analytics consent as appropriate.
