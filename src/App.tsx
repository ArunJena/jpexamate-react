import React from "react";
import "./App.css";
import { Footer, Home, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
