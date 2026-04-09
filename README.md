# Weather Information App — README

A React + Vite weather application that lets users search any city and view current weather details including temperature, humidity, min/max temperature, and “feels like” values.

## Table of Contents

- 🚀 Project intro
- 📁 Project structure
- ⭐ Differentiators
- 🔧 Features
- 🧰 Tech stack
- ⚙️ Install methods
- 🔐 Environment variables
- 📜 Available scripts
- 🚀 Deployment notes
- 🤝 Contributing
- 📄 License

## 🚀 Project intro

`weather-app-react` is a lightweight weather dashboard built for fast city-based weather lookup.

It includes:

- City search with live API request
- Clean weather summary card UI
- Dynamic weather icon and background image logic
- Helpful error message for invalid city input

## 📁 Project structure

```bash
weather-app-react/
├── public/
│   └── weather.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── InfoBox.css
│   ├── InfoBox.jsx
│   ├── main.jsx
│   ├── SearchBox.css
│   ├── SearchBox.jsx
│   ├── WeatherApp.css
│   └── WeatherApp.jsx
├── eslint.config.js
├── index.html
├── package.json
├── Procfile
├── README.md
├── vercel.json
└── vite.config.js
```

## ⭐ Differentiators

- Built with MUI components for quick, polished UI
- Uses Vite environment variables for API configuration
- Dynamic visual feedback based on weather conditions
- Ready for static deployment on Vercel with `vite build`

## 🔧 Features

### Core features

| Feature | Status | Details |
| --- | --- | --- |
| City weather search | ✅ Current | Fetches weather by city name |
| Temperature metrics | ✅ Current | Shows current, min, and max values in °C |
| Weather details | ✅ Current | Shows humidity, feels-like, and condition text |
| Visual weather card | ✅ Current | Changes image and icon based on weather data |
| Input validation | ✅ Current | Displays error when city is invalid/not found |

### Weather display behavior

- If humidity is high and temperature is warm, rain/thunder visual is used.
- If temperature is above the warm threshold, sunny visual is used.
- Otherwise, cold visual is used.

## 🧰 Tech stack

- Framework: React 19 + Vite 6
- UI Library: MUI (`@mui/material`, `@mui/icons-material`)
- Styling: CSS modules/files per component
- Hosting: Vercel (static deployment)
- Package manager: npm

## ⚙️ Install methods

### 📦 npm / Node

Prerequisites:

- Node.js 18+ (recommended: 20+)
- npm 9+

```bash
git clone <your-repo-url>
cd weather-app-react
npm install
```

1. Create a `.env` file in the project root (see Environment variables).
2. Start development server:

```bash
npm run dev
```

Open `http://localhost:5173`.

## 🔐 Environment variables

Create a `.env` file in the project root:

```bash
VITE_API_URL="https://api.openweathermap.org/data/2.5/weather"
VITE_API_KEY="your_openweather_api_key"
```

Notes:

- `VITE_API_URL` should point to a weather endpoint that accepts `q`, `appid`, and `units` query params.
- Without a valid `VITE_API_KEY`, API requests will fail.

## 📜 Available scripts

```bash
npm run dev             # Start Vite dev server
npm run build           # Create production build in dist/
npm run preview         # Preview production build locally
npm run start           # Serve dist/ using serve
npm run lint            # Run ESLint
npm run heroku-postbuild # Build step for Heroku-style deploys
```

## 🚀 Deployment notes

### Deploy on Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Set environment variables in Vercel Project Settings → Environment Variables:
	- `VITE_API_URL`
	- `VITE_API_KEY`
4. Deploy.

This repo includes `vercel.json` with:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`
- SPA rewrite fallback to `index.html`

Notes:

- Vercel automatically serves the Vite build output from `dist/`.
- If environment variables are missing, API calls will fail at runtime.

## 🤝 Contributing

- Fork the repository and create a focused feature branch.
- Keep pull requests small and include clear test/verification steps.
- Never commit API keys or sensitive environment values.

## 📄 License

No license file is currently present in this repository.
Add a `LICENSE` file (for example, MIT) if you want to open-source it formally.
