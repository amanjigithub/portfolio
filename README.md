# 3D Portfolio Website

A modern, interactive 3D portfolio website built with React and Three.js that showcases professional skills, projects, and experience through immersive 3D animations and smooth user interactions.

## 🌟 Live Demo

Experience the live portfolio: [View Live Demo](https://your-portfolio-url.com)

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [3D Models & Assets](#3d-models--assets)
- [Customization](#customization)
- [Performance Optimization](#performance-optimization)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## 🎯 Overview

This 3D portfolio website represents a modern approach to showcasing professional skills and experience. Built for Aman Badhautiya, a BTech CSE student specializing in full-stack development, cloud computing, AI/ML, and DevOps, the portfolio combines cutting-edge web technologies with interactive 3D elements to create an engaging user experience.

The portfolio serves as a comprehensive showcase of technical skills, professional experience, and creative projects, while demonstrating proficiency in modern web development technologies and 3D graphics programming.

## ✨ Features

### 🎨 Interactive 3D Elements
- **3D Computer Model**: Interactive desktop PC model that responds to mouse movements
- **Animated Earth**: Rotating 3D Earth model for global perspective
- **Floating Tech Spheres**: 3D balls displaying technology stack with hover effects
- **Particle Stars Background**: Dynamic star field animation for immersive experience

### 📱 Responsive Design
- Mobile-first responsive layout
- Optimized 3D performance across devices
- Touch-friendly navigation and interactions
- Adaptive 3D model complexity based on device capabilities

### 🎭 Professional Sections
- **Hero Section**: Eye-catching introduction with 3D computer model
- **About**: Personal introduction and professional summary
- **Experience**: Timeline of professional achievements and roles
- **Skills**: Interactive display of technical competencies
- **Tech Stack**: Visual representation of technologies using 3D elements
- **Projects**: Showcase of key projects with descriptions and links
- **Contact**: Functional contact form with EmailJS integration

### ⚡ Modern Features
- Smooth scroll animations with Framer Motion
- Loading states and optimized 3D model loading
- SEO-optimized structure and meta tags
- Performance monitoring and optimization
- Cross-browser compatibility

## 🛠 Technologies Used

### Frontend Framework
- **React 18.2.0** - Modern UI library with hooks and concurrent features
- **Vite 4.5.9** - Fast build tool and development server

### 3D Graphics & Animation
- **Three.js 0.155.0** - Core 3D graphics library
- **@react-three/fiber 8.13.6** - React renderer for Three.js
- **@react-three/drei 9.80.0** - Useful helpers and abstractions
- **Framer Motion 10.15.0** - Production-ready motion library

### Styling & UI
- **Tailwind CSS 3.3.3** - Utility-first CSS framework
- **PostCSS 8.4.27** - CSS processing tool
- **Autoprefixer 10.4.14** - CSS vendor prefixing

### Additional Libraries
- **EmailJS 3.11.0** - Email service integration
- **React Router DOM 6.14.2** - Client-side routing
- **React Icons 5.5.0** - Popular icon library
- **React Tilt 1.0.2** - Tilt effect component
- **React Vertical Timeline 3.6.0** - Timeline component
- **Maath 0.7.0** - Math utilities for 3D graphics

### Development Tools
- **ESLint 8.45.0** - Code linting and quality
- **TypeScript definitions** - Enhanced development experience

## 🚀 Getting Started

### Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (version 7.0 or higher) or **yarn**
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/amanjigithub/3d_portfolio.git
   cd 3d_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional)
   Create a `.env` file in the root directory for environment variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

### Running the Application

1. **Development Server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```

4. **Lint Code**
   ```bash
   npm run lint
   ```

## 📁 Project Structure

```
3d_portfolio/
├── public/                     # Static assets
│   ├── desktop_pc/            # 3D computer model files
│   ├── planet/                # 3D earth model files
│   └── logo.svg               # Site logo
├── src/                       # Source code
│   ├── assets/                # Images and static assets
│   ├── components/            # React components
│   │   ├── canvas/            # 3D canvas components
│   │   │   ├── Ball.jsx       # Tech sphere component
│   │   │   ├── Computers.jsx  # 3D computer model
│   │   │   ├── Earth.jsx      # 3D earth model
│   │   │   ├── Stars.jsx      # Particle system
│   │   │   └── index.js       # Canvas exports
│   │   ├── ui/                # UI components
│   │   ├── About.jsx          # About section
│   │   ├── Contact.jsx        # Contact form
│   │   ├── Experience.jsx     # Experience timeline
│   │   ├── Hero.jsx           # Hero section
│   │   ├── HireMe.jsx         # Call-to-action component
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Skills.jsx         # Skills showcase
│   │   ├── Tech.jsx           # Technology stack
│   │   ├── Works.jsx          # Projects section
│   │   └── index.js           # Component exports
│   ├── constants/             # App constants and data
│   │   └── index.js           # Portfolio data and config
│   ├── hoc/                   # Higher-order components
│   ├── utils/                 # Utility functions
│   ├── App.jsx                # Main app component
│   ├── index.css              # Global styles
│   ├── main.jsx               # App entry point
│   └── styles.js              # Style constants
├── .eslintrc.cjs              # ESLint configuration
├── .gitignore                 # Git ignore rules
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

## ⚙️ Configuration

### Customizing Portfolio Content

Edit the `src/constants/index.js` file to customize portfolio content:

```javascript
// Personal Information
const personalInfo = {
  name: "Your Name",
  fullName: "Your Full Name",
  email: "your.email@example.com",
  role: "Your Professional Title",
  about: "Your professional summary...",
  // ... other personal details
};

// Projects Data
const projects = [
  {
    name: "Project Name",
    description: "Project description...",
    tags: [/* technology tags */],
    image: /* project image */,
    hosted_link: "project-url",
  },
  // ... more projects
];

// Experience Data
const experiences = [
  {
    title: "Job Title",
    company_name: "Company Name",
    date: "Date Range",
    points: [/* achievement points */],
  },
  // ... more experiences
];
```

### EmailJS Configuration

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update environment variables or directly in the Contact component
4. Configure the contact form in `src/components/Contact.jsx`

### 3D Model Configuration

Modify 3D models and their properties in the respective canvas components:
- `src/components/canvas/Computers.jsx` - Desktop computer model
- `src/components/canvas/Earth.jsx` - Earth model
- `src/components/canvas/Ball.jsx` - Technology spheres
- `src/components/canvas/Stars.jsx` - Particle background

## 🎨 3D Models & Assets

### Model Requirements
- **Format**: GLTF/GLB for optimal performance
- **Optimization**: Use tools like gltf-pipeline for compression
- **Textures**: Compressed textures (JPEG/WebP) for faster loading
- **Polycount**: Optimized for web performance

### Asset Organization
- Place 3D models in the `public/` directory
- Store images and textures in `src/assets/`
- Use appropriate naming conventions for easy reference

### Performance Considerations
- Implement LOD (Level of Detail) for complex models
- Use instancing for repeated objects
- Optimize texture sizes for different screen resolutions
- Implement progressive loading for large assets

## 🎯 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`
4. Add corresponding data to `src/constants/index.js`

### Styling Customization

The project uses Tailwind CSS for styling. Customize the design by:
- Modifying `tailwind.config.js` for theme customization
- Adding custom CSS in `src/index.css`
- Using Tailwind utility classes in components

### 3D Scene Customization

Customize 3D elements by modifying:
- Camera positions and controls
- Lighting setups and shadows
- Material properties and textures
- Animation parameters and timing

## ⚡ Performance Optimization

### 3D Performance
- **Lazy Loading**: 3D models load progressively
- **Level of Detail**: Simplified models for mobile devices
- **Frustum Culling**: Only render visible objects
- **Texture Optimization**: Compressed textures for faster loading

### React Performance
- **Code Splitting**: Lazy load components when needed
- **Memoization**: Prevent unnecessary re-renders
- **Bundle Optimization**: Tree shaking and minification
- **Progressive Enhancement**: Graceful degradation for older devices

### Loading Optimization
- **Preloading**: Critical 3D assets preload during initial load
- **Suspense**: React Suspense for smooth loading states
- **Error Boundaries**: Graceful error handling for 3D content

## 🌐 Browser Support

### Supported Browsers
- **Chrome** 60+ (recommended)
- **Firefox** 55+
- **Safari** 12+
- **Edge** 79+

### WebGL Requirements
- WebGL 1.0 support required
- WebGL 2.0 recommended for enhanced features
- Hardware acceleration enabled for optimal performance

### Mobile Support
- iOS Safari 12+
- Chrome for Android 60+
- Samsung Internet 8+

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Project**
2. **Create Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to Branch** (`git push origin feature/AmazingFeature`)
5. **Open Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Test 3D functionality across different devices
- Ensure responsive design compatibility
- Update documentation for new features
- Include appropriate comments for complex 3D logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Aman Badhautiya**
- **Email**: aman93977@gmail.com
- **Phone**: +91 7579795861
- **LinkedIn**: [amanbadhautiya-3468a7193](https://www.linkedin.com/in/amanbadhautiya-3468a7193)
- **GitHub**: [amanjigithub](https://github.com/amanjigithub)

**Project Repository**: [https://github.com/amanjigithub/3d_portfolio](https://github.com/amanjigithub/3d_portfolio)

## 🙏 Acknowledgments

### Technologies & Libraries
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber) - React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vite](https://vitejs.dev/) - Build tool and development server

### Inspiration & Resources
- [Three.js Journey](https://threejs-journey.xyz/) - Comprehensive Three.js course
- [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) - Educational content
- [React Three Fiber Documentation](https://docs.pmnd.rs/react-three-fiber) - Official documentation
- [Bruno Simon's Portfolio](https://bruno-simon.com/) - Creative 3D portfolio inspiration

### 3D Models & Assets
- Desktop computer model - [Source/Attribution if applicable]
- Earth model textures - [NASA Visible Earth](https://visibleearth.nasa.gov/)
- Technology icons - [React Icons](https://react-icons.github.io/react-icons/)

---

**Built with ❤️ by Aman Badhautiya**

*This portfolio represents a showcase of modern web development technologies and 3D graphics programming. Feel free to use this as inspiration for your own projects!*