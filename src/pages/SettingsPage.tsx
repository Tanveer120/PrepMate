import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PaperCard } from '../components/PaperCard';
import { Button } from '../components/Button';
import { pageTransition } from '../animations/framerVariants';
import { useSettings } from '../contexts/SettingsContext';
import { useStorage } from '../contexts/StorageContext';
import { ChevronLeft } from 'lucide-react';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { settings, updateSettings } = useSettings();
  const { clearData } = useStorage();

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear all data? This cannot be undone.")) {
      clearData();
      alert("Data cleared.");
    }
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto"
    >
      <div className="flex items-center gap-4 mb-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-h1 text-ink-main font-display">Settings</h1>
      </div>

      <PaperCard className="flex flex-col gap-6">
        <div>
          <h3 className="text-h3 font-display mb-4 text-primary-500">Appearance</h3>
          <div className="flex items-center justify-between py-2 border-b border-ink-pencil/20">
            <span className="text-ink-main">Theme Intensity</span>
            <select 
              value={settings.themeIntensity}
              onChange={(e) => updateSettings({ themeIntensity: e.target.value as any })}
              className="bg-transparent border border-ink-pencil rounded px-2 py-1 text-ink-muted focus:outline-none focus:border-primary-500"
            >
              <option value="low">Light (White)</option>
              <option value="medium">Medium (Warm)</option>
              <option value="high">High (Cozy Darker)</option>
            </select>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-ink-pencil/20">
            <span className="text-ink-main">Dark Mode</span>
            <input 
              type="checkbox" 
              checked={settings.darkMode}
              onChange={(e) => updateSettings({ darkMode: e.target.checked })}
              className="accent-primary-500 w-4 h-4"
            />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-ink-pencil/20">
            <span className="text-ink-main">Reduced Motion</span>
            <input 
              type="checkbox" 
              checked={settings.reducedMotion}
              onChange={(e) => updateSettings({ reducedMotion: e.target.checked })}
              className="accent-primary-500 w-4 h-4"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h3 font-display mb-4 text-primary-500">Quiz Preferences</h3>
          <div className="flex items-center justify-between py-2 border-b border-ink-pencil/20">
            <span className="text-ink-main">Immediate Feedback</span>
            <input 
              type="checkbox" 
              checked={settings.immediateFeedback}
              onChange={(e) => updateSettings({ immediateFeedback: e.target.checked })}
              className="accent-primary-500 w-4 h-4"
            />
          </div>
          <div className="flex items-center justify-between py-2 border-b border-ink-pencil/20">
            <span className="text-ink-main">Randomize Question Order</span>
            <input 
              type="checkbox" 
              checked={settings.randomizeQuestions}
              onChange={(e) => updateSettings({ randomizeQuestions: e.target.checked })}
              className="accent-primary-500 w-4 h-4"
            />
          </div>
        </div>

        <div>
          <h3 className="text-h3 font-display mb-4 text-accent-peach">Data & Privacy</h3>
          <p className="text-sm text-ink-muted mb-4">All your data is stored locally in your browser. We respect your privacy.</p>
          <Button variant="secondary" onClick={handleClear} className="w-full text-accent-peach border-accent-peach hover:bg-accent-peach/10">
            Clear All Local Data
          </Button>
        </div>
      </PaperCard>
    </motion.div>
  );
};
