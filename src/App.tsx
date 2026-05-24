import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import { SettingsProvider, useSettings } from './contexts/SettingsContext';
import { StorageProvider } from './contexts/StorageContext';

import { DeskCanvas } from './components/DeskCanvas';

import { LandingPage } from './pages/LandingPage';
import { SubjectListPage } from './pages/SubjectListPage';
import { QuizPage } from './pages/QuizPage';
import { ResultsPage } from './pages/ResultsPage';
import { BookmarksPage } from './pages/BookmarksPage';
import { SettingsPage } from './pages/SettingsPage';

const AnimatedRoutes = () => {
  const location = useLocation();
  const { settings } = useSettings();

  return (
    <MotionConfig reducedMotion={settings.reducedMotion ? 'always' : 'user'}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/subjects" element={<SubjectListPage />} />
          <Route path="/quiz/:slug" element={<QuizPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  );
};

const App: React.FC = () => {
  return (
    <SettingsProvider>
      <StorageProvider>
        <Router>
          <DeskCanvas>
            <AnimatedRoutes />
          </DeskCanvas>
        </Router>
      </StorageProvider>
    </SettingsProvider>
  );
};

export default App;
