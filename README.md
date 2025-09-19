# 🚀 React + Vite Template Project

A **production-ready** React template built with professional architecture and clean code standards. Features a beautiful design system, proper component structure, and comprehensive type safety.

[![Live Demo](https://img.shields.io/badge/demo-live-blue.svg)](https://react-vite-alikeldev.netlify.app/)
[![GitHub Stars](https://img.shields.io/github/stars/AliKelDev/ReactVite-Template-V2?style=social)](https://github.com/AliKelDev/ReactVite-Template-V2)
[![Twitter Follow](https://img.shields.io/twitter/follow/AliLeisR?style=social)](https://x.com/AliLeisR)

[View Demo](https://react-vite-alikeldev.netlify.app/) • [Get Started](#quick-start) • [Features](#features) • [Professional Services](https://webpixelle3.netlify.app/)

## ✨ Features

### Architecture & Code Quality
- 🏗️ **Clean Architecture**: Proper layout hierarchy with single source of truth
- 🔗 **True SPA Routing**: React Router implementation with proper navigation
- 📝 **Type Safety**: Complete PropTypes validation on all components
- 🎯 **Professional Standards**: Zero lint errors, consistent naming conventions

### Design System
- 🎨 **Semantic Color System**: Primary, secondary, and accent color palettes in Tailwind config
- 🌟 **Modern UI**: Glassmorphism effects with proper contrast and accessibility
- 📱 **Responsive Design**: Mobile-first approach with consistent breakpoints
- ⚡ **Optimized Performance**: Clean build output and efficient animations

### Component Structure
- 🧱 **Modular Components**: Reusable, well-documented components with clear interfaces
- 🖼️ **Project Showcase**: Professional portfolio components with live previews
- 🛠️ **Tech Stack Cards**: Configurable technology showcase components
- 🔒 **Secure Previews**: Safe iframe handling with proper fallbacks

### Developer Experience
- 🚀 **Ready to Extend**: Clean foundation that's easy to build upon
- 🔧 **Modern Tooling**: Vite, ESLint, and Tailwind CSS properly configured
- 📦 **Clean Dependencies**: No phantom packages, only what you actually need
- 📋 **Complete Documentation**: Clear setup and customization instructions

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/AliKelDev/ReactVite-Template-V2.git

# Navigate to project directory
cd ReactVite-Template-V2

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 3.4 with custom design system
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **Type Safety**: PropTypes validation
- **Code Quality**: ESLint 9 with React plugins
- **Build Tool**: Vite with optimized config
- **Language**: Modern JavaScript (ES2022+)

## 📦 Core Components

### PreviewEmbed
Securely embed external content with loading states and error handling:
```jsx
<PreviewEmbed
  siteUrl="https://your-url.com"
/>
```

### TechCard
Showcase technologies with animated cards:
```jsx
<TechCard
  title="React + Vite"
  desc="Modern build tooling"
  Icon={ReactIcon}
/>
```

### InstallGuide
Terminal-style installation instructions (no props required):
```jsx
<InstallGuide />
```

## 🎨 Design System

### Color Palette
The template includes a complete semantic color system in `tailwind.config.js`:

- **Primary**: Indigo-based (primary-50 to primary-950)
- **Secondary**: Purple-based (secondary-50 to secondary-950)
- **Accent**: Slate-based (accent-50 to accent-950)

```jsx
// Usage examples
<div className="bg-primary-500 text-white">Primary Button</div>
<div className="text-secondary-300">Secondary Text</div>
<div className="border-accent-600">Accent Border</div>
```

### Background Gradients
```jsx
// Pre-configured gradient backgrounds
<div className="bg-page-gradient from-primary-900 via-primary-950 to-black">
<div className="bg-gradient-to-r from-primary-500 to-secondary-500">
```

## 📱 Responsive Design

Built-in Tailwind breakpoints for consistent responsive behavior:
- 📱 Mobile: `sm:` (640px+)
- 📱 Tablet: `md:` (768px+)
- 💻 Desktop: `lg:` (1024px+)
- 🖥️ Large: `xl:` (1280px+)

## 🔧 Customization

### 1. Extend the Design System
Modify `tailwind.config.js` to add your own colors:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Add custom primary colors
        500: '#your-color',
      },
      brand: {
        // Add completely new color palette
        500: '#your-brand-color',
      }
    }
  }
}
```

### 2. Add New Pages
Create in `src/pages/` following the established pattern:
```jsx
// src/pages/YourPage.jsx
import PropTypes from 'prop-types';

const YourPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Your content */}
    </div>
  );
};

export default YourPage;
```

### 3. Update Navigation
Modify the navigation array in `src/components/Navigation/Navbar.jsx`:
```jsx
{['Example 1', 'Example 2', 'Your Page'].map((item, index) => (
  // Navigation items
))}
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add YourFeature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## 📫 Get in Touch

- Follow me on [Twitter](https://x.com/AliLeisR) for updates
- Check out my [professional services](https://webpixelle3.netlify.app/)
- Star the [GitHub repo](https://github.com/AliKelDev/ReactVite-Template-V2)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Support

If this template helps you build something awesome, consider:
- ⭐ Starring the repository
- 🐦 Following me on [Twitter](https://x.com/AliLeisR)
- 🔗 Sharing it with others

---
Made with ❤️ by [Alice Leiser](https://x.com/AliLeisR)