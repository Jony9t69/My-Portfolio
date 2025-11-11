# Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS for **Md Mahamudul Hasan Jony** - Front-end Developer.

## Features

- 🎨 Modern and beautiful UI design
- 📱 Fully responsive (mobile, tablet, desktop)
- 🌙 Dark mode support
- ⚡ Smooth animations and transitions
- 🎯 Single-page application with smooth scrolling
- 💼 Project showcase section
- 📧 Contact form
- 🛠️ Skills and technologies display

## Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your system.

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### Build for Production

To create a production build:

```bash
npm run build
```

This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## Project Structure

```
My-Profile/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Update Personal Information

1. **Name and Title**: Update in `src/components/Hero.js`
2. **About Section**: Edit `src/components/About.js`
3. **Skills**: Modify the skills array in `src/components/Skills.js`
4. **Projects**: Update the projects array in `src/components/Projects.js`
5. **Contact Information**: Change contact details in `src/components/Contact.js` and `src/components/Footer.js`

### Update Social Links

Update the social media links in:
- `src/components/Hero.js` (social icons)
- `src/components/Contact.js` (contact information)
- `src/components/Footer.js` (footer links)

### Change Colors

Modify the color scheme in `tailwind.config.js` under the `colors.primary` section.

## Features Breakdown

### Navigation
- Fixed navigation bar with smooth scroll
- Mobile-responsive hamburger menu
- Dark mode toggle

### Hero Section
- Eye-catching introduction
- Call-to-action buttons
- Social media links

### About Section
- Personal introduction
- Services/What I do section

### Skills Section
- Skill progress bars
- Technology tags
- Categorized skills display

### Projects Section
- Project cards with descriptions
- Technology tags for each project
- Links to GitHub and live demos

### Contact Section
- Contact form
- Contact information display
- Social media links

### Footer
- Quick navigation links
- Social media icons
- Copyright information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

**Md Mahamudul Hasan Jony**
- Front-end Developer

---

Made with ❤️ using React.js and Tailwind CSS

