import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeIntensity = 'low' | 'medium' | 'high';

interface Settings {
  themeIntensity: ThemeIntensity;
  reducedMotion: boolean;
  audioEnabled: boolean;
  immediateFeedback: boolean;
  randomizeQuestions: boolean;
  darkMode: boolean;
}

interface SettingsContextType {
  settings: Settings;
  updateSettings: (newSettings: Partial<Settings>) => void;
}

const defaultSettings: Settings = {
  themeIntensity: 'medium',
  reducedMotion: false,
  audioEnabled: true,
  immediateFeedback: true,
  randomizeQuestions: true,
  darkMode: true,
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(() => {
    const saved = localStorage.getItem('prepmate:v1:settings');
    return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings;
  });

  useEffect(() => {
    localStorage.setItem('prepmate:v1:settings', JSON.stringify(settings));
    
    // Apply dark mode to HTML tag
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  const updateSettings = (newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) throw new Error('useSettings must be used within SettingsProvider');
  return context;
};
