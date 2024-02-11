import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home'; // Import Home component
import About from './Pages/About'; // Import About component
import Profile from './Pages/Profile'; // Import Profile component
import Header from "./Components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SignUp />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
