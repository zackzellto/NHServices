// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppNavbar from "./components/Navbar/AppNavbar";
import GalleryPage from "./pages/GalleryPage";
import LandingPage from "./pages/LandingPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="max-w-screen-xl mx-auto">
        <AppNavbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
