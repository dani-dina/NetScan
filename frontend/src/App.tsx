import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login";
import Navigation from "./Components/Navigation";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Profile from "./Components/Profile";
import NetscanDashboard from "./Pages/Index";

const App = () => {
  return (
    <div className="text-amber-300">
      <Navigation />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<NetscanDashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
