# Zerodha Project Clone

A full-stack clone of the Zerodha trading platform. This repository contains the landing page, dashboard (Kite clone), and a backend server to support authentication, holdings, orders, and positions.

## 🚀 Repository Structure

The project is split into three main components:

1. **[`frontend`](file:///c:/Users/Manish/Desktop/Zerodha_Project_clone/frontend)**: The main public-facing landing page of Zerodha. Built with React 19, it includes pages like Home, About, Products, Pricing, and Support.
2. **[`dashboard`](file:///c:/Users/Manish/Desktop/Zerodha_Project_clone/dashboard)**: The Kite dashboard clone. Built with React 18 and Material-UI (MUI), featuring real-time visual charts (using Chart.js), holding summaries, buy/sell action windows, funds, and portfolio tracking.
3. **[`backend`](file:///c:/Users/Manish/Desktop/Zerodha_Project_clone/backend)**: The Node.js / Express API. Stores user data, models for holdings, orders, positions, and watchlists. Secured using JWT and bcryptjs.

---

## 🛠️ Tech Stack

### Frontend & Dashboard
- **React** (v19 for frontend, v18 for dashboard)
- **React Router** (routing/navigation)
- **Material-UI (MUI)** & **Vanilla CSS**
- **Chart.js** & **react-chartjs-2** (interactive visual graphics)
- **Axios** (API requests)

### Backend
- **Node.js** & **Express**
- **MongoDB** & **Mongoose**
- **JSON Web Tokens (JWT)** & **bcryptjs** (authentication & security)
- **dotenv** (environment variables config)

---

## 💻 Getting Started

### Prerequisites
Make sure you have Node.js and MongoDB installed on your system.

### 1. Run the Backend
Navigate to the `backend` folder, install dependencies, configure environment variables, and start the server:
```bash
cd backend
npm install
# Create a .env file and add your PORT and MONGO_URI
npm run dev # Runs with nodemon
# OR
npm start
```

### 2. Run the Frontend (Landing Page)
Navigate to the `frontend` folder, install dependencies, and start the development server:
```bash
cd frontend
npm install
npm start
```

### 3. Run the Dashboard (Kite Clone)
Navigate to the `dashboard` folder, install dependencies, and start the development server:
```bash
cd dashboard
npm install
npm start
```

---

## 📜 License
This project is licensed under the ISC License.
