# React + Vite

# Socio 🌿

**Socio** is a community-driven event management platform that empowers users to create, discover, and join impactful social events — from cleanups and donation drives to awareness campaigns.

## 🚀 Live Demo

https://socio-7ccb1.web.app/

> Replace the link above with your actual deployed URL (e.g., Vercel, Netlify, or Firebase Hosting).

---

## 📌 Key Features

- ✅ **User Authentication** using Firebase (email/password + Google Sign-In)
- 🗓️ **Event Management**: Create, update, and join events
- 🔍 **Event Filtering** by type or keyword
- 🖼️ **Lottie Animations** for enhanced user engagement
- 🗺️ **Dynamic Routing** with protected and private pages
- 📅 **Date Picker Integration** for event scheduling
- 🔐 **Password Visibility Toggle**
- 🔔 **Real-time Toast Notifications** for user feedback
- 📱 **Fully Responsive** layout with modern UI

---

## 🛠️ Tech Stack & Dependencies

### Frontend

- **React** – UI Library
- **React Router** – Client-side routing
- **Tailwind CSS** – Utility-first CSS framework
- **Framer Motion** – Smooth animation handling
- **Lottie React** – For engaging animations
- **React Toastify** – Notification system
- **React Datepicker** – User-friendly date selection
- **React Icons** – Icon library

### Backend (Optional)

- **Express.js + MongoDB** (Assumed for REST API)

### Authentication

- **Firebase Authentication** – Email/password and Google Sign-In

### HTTP Client

- **Axios** – Simplified API calls

---

## 📦 Installed NPM Packages

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.10",
  "axios": "^1.10.0",
  "firebase": "^11.9.1",
  "framer-motion": "^12.18.1",
  "lottie-react": "^2.4.1",
  "react": "^19.1.0",
  "react-datepicker": "^8.4.0",
  "react-icons": "^5.5.0",
  "react-router": "^7.6.2",
  "react-toastify": "^11.0.5"
}


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
