import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import page components (to be created)
import Home from './pages/Home';
import ExperiencePage from './pages/Experience.tsx';
import ProjectsPage from './pages/Projects.tsx';
import CertificationsPage from './pages/Certifications.tsx';
import AwardsPage from './pages/Awards.tsx';

const App = () => {
  return (
    <Router basename="/kenny_website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;