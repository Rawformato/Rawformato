# RAW Formato - AI-Powered Creative Marketing Agency

A modern, high-performance marketing agency website built with React, TypeScript, and Vite. Features stunning animations, responsive design, and ready-to-integrate email functionality.

Original design from [Figma](https://www.figma.com/design/2wONj7evBaJlyaSDB5Rtvw/Premium-Marketing-Agency-Website).

## 🚀 Features

- ✨ **Modern UI/UX** - Sleek design with smooth animations using Motion
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- 🎨 **Beautiful Components** - Reusable components with Tailwind CSS
- 📧 **Contact Form Ready** - Pre-configured for Resend email integration
- 🎯 **Industry-Specific Pages** - Automotive, Restaurants, Real Estate
- 🖼️ **Media Showcase** - Portfolio gallery with masonry layout
- 💬 **Testimonials** - Client success stories
- ❓ **FAQ Section** - Interactive accordion
- 📊 **Stats Display** - Impressive metrics and results
- 🎭 **Micro-interactions** - Engaging hover effects and transitions

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS 4
- **Animations**: Motion (Framer Motion)
- **Routing**: React Router 7
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## 📋 Prerequisites

- Node.js 18+ and npm/pnpm

## 🏃‍♂️ Getting Started

### Installation

```bash
# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server
npm run dev
# or
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
# Build the project
npm run build
# or
pnpm build
```

The build output will be in the `dist/` folder.

## 📧 Email Integration

The contact form is ready to integrate with Resend. See [RESEND_SETUP.md](./RESEND_SETUP.md) for detailed instructions.

### Quick Setup

1. Install Resend: `npm install resend`
2. Create an API route at `/api/contact`
3. Add your Resend API key to `.env.local`
4. Configure the email template

## 🎨 Customization

### Colors

The project uses an elegant monochromatic color scheme:

- **Primary Accent**: `#E5E5E5` (Light gray)
- **Background**: `#0B0B0E` (Deep black)
- **Text**: `#F2F2F2` (Off-white)

To change the accent color:

1. Search and replace `#E5E5E5` with your brand color
2. Update shadow: `rgba(229,229,229,0.4)` with your RGB values
3. See `COLOR_SCHEME_UPDATE.md` for detailed guide

### Content

- **Home Page**: `src/app/pages/Home.tsx`
- **Industry Pages**: `src/app/pages/AutomotiveSports.tsx`, `Restaurants.tsx`, `RealtorsBuilders.tsx`
- **Components**: `src/app/components/`

### Images

Replace placeholder images with your own:
- Update Unsplash URLs in components
- Or use local images in `/src/assets/`

## 📁 Project Structure

```
rawformato/
├── src/
│   ├── app/
│   │   ├── components/     # Reusable components
│   │   │   ├── Button.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── MediaShowcase.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── ...
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── AutomotiveSports.tsx
│   │   │   ├── Restaurants.tsx
│   │   │   └── RealtorsBuilders.tsx
│   │   └── routes.tsx      # Route configuration
│   ├── styles/             # Global styles
│   └── main.tsx           # App entry point
├── public/                 # Static assets
└── package.json
```

## 🧩 Key Components

### Reusable Components

- **Button** - Primary, secondary, and outline variants
- **ContactForm** - Full contact form with validation
- **Testimonials** - Customer testimonial carousel
- **FAQ** - Accordion-style FAQ section
- **Stats** - Animated statistics display
- **MediaShowcase** - Masonry gallery for images/videos
- **Features** - Feature highlights (grid/list variants)
- **CTA** - Call-to-action sections (3 variants)

### Page Components

- **Home** - Main landing page with all sections
- **AutomotiveSports** - Industry-specific page for automotive/sports brands
- **Restaurants** - Industry-specific page for restaurants
- **RealtorsBuilders** - Industry-specific page for real estate

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

Build the project and deploy the `dist/` folder to:
- Netlify
- AWS S3 + CloudFront
- GitHub Pages
- Any static hosting service

## 📞 Contact Information

Update the following placeholders in the code:

- **Phone**: Search for `+1 (786) 555-1234` and replace
- **Email**: Search for `hello@rawformato.com` and replace
- **Instagram**: Update `@rawformato` handle
- **Address**: Update location information in Footer

## 🎯 Performance Optimization

- Images are lazy-loaded via `ImageWithFallback` component
- Animations use Motion's optimized rendering
- Routes are code-split automatically
- Tailwind CSS is purged in production

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For support or questions, contact:
- Email: hello@rawformato.com
- Instagram: @rawformato

---

Built with ❤️ by RAW Formato