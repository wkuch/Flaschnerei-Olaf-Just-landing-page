# Flaschnerei Olaf Just Website 

A modern, responsive website for Flaschnerei Olaf Just, a traditional German metalworking business specializing in roofing and sheet metal services.

## About the Project

This is a professional business website showcasing the services and expertise of Flaschnerei Olaf Just, a family-run Meisterbetrieb (master craftsman business) with over 30 years of experience in the region.

### Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with copper accent colors reflecting the craft tradition
- **Service Showcase**: Detailed presentation of all metalworking services
- **Contact Integration**: Easy-to-use contact forms and business information
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: Built with modern web accessibility standards

### Services Highlighted

- Regenrinnen & Fallrohre (Gutters & Downspouts)
- Gauben & Dacharbeiten (Dormers & Roof Work)
- Mauerabdeckungen (Wall Cappings)
- Fenstersimse (Window Sills)
- Reparaturen & Wartung (Repairs & Maintenance)
- Sonderanfertigungen (Custom Work)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or bun package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd just-blech-meisterwerk

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Tech Stack

This project is built with modern web technologies:

- **Vite**: Fast build tool and development server
- **TypeScript**: Type-safe JavaScript development
- **React**: Modern component-based UI framework
- **React Router**: Client-side routing
- **shadcn/ui**: High-quality, accessible UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful, customizable icons

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Site header with navigation
│   ├── Hero.tsx        # Landing page hero section
│   ├── Services.tsx    # Services showcase
│   ├── About.tsx       # Company information
│   ├── Team.tsx        # Team presentation
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Main landing page
│   ├── Impressum.tsx   # Legal imprint (German requirement)
│   └── Datenschutz.tsx # Privacy policy (GDPR compliance)
├── lib/                # Utility functions
└── hooks/              # Custom React hooks
```

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push to gh-pages branch
- **Firebase Hosting**: `firebase deploy`

Build the project first:
```bash
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software for Flaschnerei Olaf Just.
