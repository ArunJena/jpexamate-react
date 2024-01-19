import React from "react";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { HomePage, NotePage, SubjectPage } from "./pages";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects/:_class" element={<SubjectPage />} />
          <Route path="/notes" element={<NotePage />} />
        </Routes>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default App;
