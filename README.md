# Subham's Portfolio Website

A modern, responsive portfolio website built with React, showcasing my experience as a Blockchain & Backend Engineer.

## Features

- 🎨 Modern, clean design with smooth animations
- 📱 Fully responsive layout
- ⚡ Fast and optimized
- 🚀 Ready for GitHub Pages deployment
- 🎯 Smooth scrolling navigation
- 💼 Showcases Experience, Education, Skills, Projects, and Achievements

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Subham2804/Subham2804.github.io.git
cd Subham2804.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The site will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deployment to GitHub Pages

1. Install gh-pages if not already installed:
```bash
npm install --save-dev gh-pages
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

This will:
- Build the production version
- Deploy it to the `gh-pages` branch
- Make your site available at `https://Subham2804.github.io`

## Customization

### Adding Your Photo

1. Place your image in `public/` folder (e.g., `public/profile.jpg`)
2. Update `src/components/About.js`:
   - Replace the image placeholder with:
   ```jsx
   <img src="/profile.jpg" alt="Subham" className="profile-image" />
   ```

### Updating Content

- **About Section**: Edit `src/components/About.js`
- **Experience**: Edit `src/components/Experience.js`
- **Education**: Edit `src/components/Education.js`
- **Skills**: Edit `src/components/Skills.js`
- **Projects**: Edit `src/components/Projects.js`
- **Contact**: Edit `src/components/Contact.js`

### Styling

All component styles are in their respective `.css` files in `src/components/`. The main theme colors can be customized by updating the CSS variables or directly modifying the color values.

## Project Structure

```
Subham2804.github.io/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Technologies Used

- React 18
- React Icons
- CSS3 (with modern features)
- GitHub Pages

## License

This project is open source and available under the MIT License.
