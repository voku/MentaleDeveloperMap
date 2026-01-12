# Mentale Developer Map

An interactive visualization tool for understanding complex codebases through mental models. This project represents a senior developer's mental map of navigating an ERP system, showing how experienced developers build intuitive understanding of code structure beyond the official documentation.

## 🚀 Live Demo

Visit the live application: [https://voku.github.io/MentaleDeveloperMap/](https://voku.github.io/MentaleDeveloperMap/)

## 📖 About

"Mentale Developer Map" (Mental Developer Map) is an interactive city-like visualization that represents different areas of a codebase as districts, landmarks, and danger zones. It demonstrates how senior developers navigate code not through strict logic but through intuition, experience, and mental models built over years of working with the system.

### Key Features

- **Interactive City Map**: Explore different areas of the codebase as locations in a city
- **Visual Navigation**: Click on locations to learn about different aspects of the system
- **Type-Based Design**: Different shapes represent different types of code areas (landmarks, danger zones, districts, utilities)
- **Guided Tour**: Step-by-step onboarding through the mental model

## 🛠️ Technology Stack

- **React** 19.2.3 - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📦 Installation & Local Development

**Prerequisites:** Node.js (v18 or higher recommended)

1. Clone the repository:
   ```bash
   git clone https://github.com/voku/MentaleDeveloperMap.git
   cd MentaleDeveloperMap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:3000`

## 🏗️ Building for Production

Build the application:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

The built files will be in the `dist` directory.

## 🚢 Deployment

This project is configured for GitHub Pages deployment. The deployment happens automatically via GitHub Actions when changes are pushed to the main branch.

### Manual Deployment

If you need to deploy manually:

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

## 📂 Project Structure

```
MentaleDeveloperMap/
├── components/
│   ├── CityMap.tsx       # Main map visualization component
│   └── InfoPanel.tsx     # Information panel for locations
├── App.tsx               # Main application component
├── constants.tsx         # City data and location definitions
├── types.ts              # TypeScript type definitions
├── index.tsx             # Application entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
└── package.json          # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Please visit [https://github.com/voku/MentaleDeveloperMap](https://github.com/voku/MentaleDeveloperMap) to:
- Report issues
- Submit pull requests
- Suggest improvements

## 📝 License

This project is open source and available under the MIT License.

## 🎯 Use Cases

This visualization can be adapted for:
- Onboarding new developers to complex codebases
- Documenting tribal knowledge about system architecture
- Creating interactive code documentation
- Teaching about mental models in software development

---

## 🔍 Key Files Detector - AI Helper Prompt

When working with this codebase, use this prompt to help identify the most relevant files for specific changes:

```
I need to understand the key files in the MentaleDeveloperMap project. 

For [SPECIFIC_TASK], which files should I focus on?

Context:
- components/CityMap.tsx: Renders the interactive city map with SVG, handles location shapes and connections
- components/InfoPanel.tsx: Displays location information panel with navigation controls
- constants.tsx: Contains all city location data (CITY_DATA) and icon mappings
- types.ts: TypeScript type definitions for MapLocation and LocationType
- App.tsx: Main application with state management for active location
- vite.config.ts: Build configuration including GitHub Pages base path

Common tasks:
- Adding new locations → Edit constants.tsx (CITY_DATA array)
- Changing map visualization → Edit components/CityMap.tsx
- Modifying info panel → Edit components/InfoPanel.tsx
- Adjusting types → Edit types.ts
- Build/deployment config → Edit vite.config.ts or .github/workflows/deploy.yml
```

Replace [SPECIFIC_TASK] with your actual task, such as:
- "Adding a new location to the map"
- "Changing the color scheme"
- "Adding a new location type"
- "Modifying the navigation behavior"
