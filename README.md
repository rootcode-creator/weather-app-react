<p align="center">
	<img src="./public/weather.svg" alt="weather app logo" width="92" height="92" />
</p>

<h1 align="center">weather-app-react</h1>

<p align="center"><i>City-based weather dashboard powered by React, Vite, and OpenWeather API.</i></p>

<p align="center">
	<img src="https://img.shields.io/badge/VERSION-0.0.0-E11D48?style=for-the-badge&logo=semanticrelease&logoColor=white&labelColor=7F1D1D" alt="Version 0.0.0" />
	<img src="https://img.shields.io/badge/LICENSE-NOT%20SPECIFIED-84CC16?style=for-the-badge&logo=opensourceinitiative&logoColor=white&labelColor=14532D" alt="License not specified" />
	<img src="https://img.shields.io/badge/TYPE-WEATHER%20APP-8B5CF6?style=for-the-badge&labelColor=4C1D95" alt="Weather app" />
</p>

<p align="center">
	<img src="https://img.shields.io/badge/VITE-6-14B8A6?style=for-the-badge&logo=vite&logoColor=white&labelColor=0F766E" alt="Vite" />
	<img src="https://img.shields.io/badge/REACT-19-06B6D4?style=for-the-badge&logo=react&logoColor=white&labelColor=155E75" alt="React" />
	<img src="https://img.shields.io/badge/JAVASCRIPT-ESM-3B82F6?style=for-the-badge&logo=javascript&logoColor=white&labelColor=1E3A8A" alt="JavaScript" />
	<img src="https://img.shields.io/badge/MUI-7-6366F1?style=for-the-badge&logo=mui&logoColor=white&labelColor=4338CA" alt="MUI" />
	<img src="https://img.shields.io/badge/OPENWEATHER-API-0EA5E9?style=for-the-badge&logo=openweathermap&logoColor=white&labelColor=1E40AF" alt="OpenWeather API" />
	<img src="https://img.shields.io/badge/DEPLOY-VERCEL-7C3AED?style=for-the-badge&logo=vercel&logoColor=white&labelColor=5B21B6" alt="Vercel" />
</p>

<p align="center">
	<a href="#-project-intro"><img src="https://img.shields.io/badge/EXPLORE-PROJECT%20INTRO-6366F1?style=for-the-badge&logo=gitbook&logoColor=white&labelColor=4F46E5" alt="Project intro" /></a>
	<a href="#-install-methods"><img src="https://img.shields.io/badge/SETUP-INSTALL%20GUIDE-14B8A6?style=for-the-badge&logo=readme&logoColor=white&labelColor=0F766E" alt="Install guide" /></a>
	<a href="#-available-scripts"><img src="https://img.shields.io/badge/RUN-SCRIPTS-A855F7?style=for-the-badge&logo=files&logoColor=white&labelColor=7E22CE" alt="Scripts" /></a>
</p>

## weather-app-react — README

Lightweight weather application built with React + Vite that lets users search a city and view current temperature, min/max values, humidity, and feels-like conditions.

## Table of Contents

- [🚀 Project intro](#-project-intro)
- [📁 Project structure](#-project-structure)
- [⭐ Differentiators](#-differentiators)
- [🔧 Features](#-features)
- [🧰 Tech stack](#-tech-stack)
- [⚙️ Install methods](#-install-methods)
	- [📦 npm / Node](#-npm--node)
- [🔐 Environment variables](#-environment-variables)
- [📜 Available scripts](#-available-scripts)
- [🚀 Deployment notes](#-deployment-notes)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Project intro

`weather-app-react` provides:

- City-based weather search with live API calls
- Current temperature, min/max temperature, and humidity details
- Weather condition summary with feels-like value
- Weather-based visual state (hot/cold/rain imagery + icons)
- Basic invalid-location handling in the search form

This project is ideal as an MVP weather dashboard and frontend API integration reference.

## 📁 Project structure

```txt
weather-app-react/
├── public/
│   └── weather.svg
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
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

- Simple component split: search input + weather info card
- API config via Vite environment variables
- Friendly visuals mapped to weather conditions
- Ready for static deployment workflows (`vite build`)

## 🔧 Features

### Core features

| Feature | Status | Notes |
| --- | --- | --- |
| City weather search | ✅ Current | Fetch weather by city name |
| Temperature metrics | ✅ Current | Shows current/min/max in °C |
| Weather details | ✅ Current | Humidity, feels-like, condition text |
| Dynamic weather card | ✅ Current | Visual/image changes based on weather data |
| Error handling | ✅ Current | Displays message for invalid city input |

### Weather display behavior

- Rain/Thunder view appears when humidity is high and temperature is warm
- Sunny view appears for warm weather
- Cold view appears otherwise

## 🧰 Tech stack

- **Framework:** React 19 + Vite 6
- **Language:** JavaScript (ES Modules)
- **UI:** MUI (`@mui/material`, `@mui/icons-material`)
- **Styling:** CSS files per component
- **API:** OpenWeather current weather endpoint
- **Hosting:** Vercel-compatible static output

## ⚙️ Install methods

### 📦 npm / Node

Prerequisites:

- Node.js 18+
- npm 9+

```bash
git clone <your-repo-url> weather-app-react
cd weather-app-react
npm install
```

1) Create `.env` file in the project root (see [Environment variables](#-environment-variables)).

2) Start development server:

```bash
npm run dev
```

Open `http://localhost:5173`.

## 🔐 Environment variables

Create a `.env` file in the project root:

```env
VITE_API_URL="https://api.openweathermap.org/data/2.5/weather"
VITE_API_KEY="your_openweather_api_key"
```

Notes:

- `VITE_API_URL` should support `q`, `appid`, and `units=metric` query parameters.
- `VITE_API_KEY` is required for successful weather requests.

## 📜 Available scripts

```bash
npm run dev              # start Vite dev server
npm run build            # production build in dist/
npm run preview          # preview production build locally
npm run start            # serve dist/ with serve
npm run lint             # lint codebase
npm run heroku-postbuild # build step for Heroku-style deploy
```

## 🚀 Deployment notes

- Includes `vercel.json` for static build output and SPA fallback.
- Build command: `npm run build`
- Output directory: `dist`
- Configure `VITE_API_URL` and `VITE_API_KEY` in deployment environment variables.

## 🤝 Contributing

- Fork the repository and create a focused branch.
- Keep pull requests small and include verification steps.
- Never commit secrets or API keys.

## 📄 License

No license file is currently present in this repository.
Add a `LICENSE` file (for example, MIT) if you plan to distribute it publicly.
