import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home"; // Import Home component
import About from "./Pages/About"; // Import About component
import Profile from "./Pages/Profile"; // Import Profile component
import Header from "./Components/Header";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Pages/Footer";
import PrivateRoute from "./Components/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/footer" element={<Footer />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
