import React from "react";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Route, Routes } from "react-router-dom";
import { HomePage, NotePage, SubjectPage, TopicPage } from "./pages";
import { demoNote } from "./assets";
import { demoStandards } from "./store";
function App() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/subjects/:subjectParam" element={<SubjectPage />} />
          <Route
            path="/subjects/:subjectParam/topics/:topicParam"
            element={<TopicPage />}
          />
          <Route
            path="/subjects/:subjectParam/topics/:topicParam/notes/:noteParam"
            element={<NotePage />}
          />

          <Route path="/notes" element={<NotePage />} />
        </Routes>
      </div>
      <button onClick={addStandard} className="border-1">
        Add Standard
      </button>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}
const addStandard = () => {
  demoStandards.push({
    title: "standard-9",
    availableSubjects: [],
  });
};
export default App;
