import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface Bookmark {
  questionId: string;
  subject: string;
  createdAt: number;
}

interface StorageContextType {
  bookmarks: Record<string, Bookmark>;
  toggleBookmark: (questionId: string, subject: string) => void;
  isBookmarked: (questionId: string) => boolean;
  clearData: () => void;
}

const StorageContext = createContext<StorageContextType | undefined>(undefined);

export const StorageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookmarks, setBookmarks] = useState<Record<string, Bookmark>>(() => {
    const saved = localStorage.getItem('prepmate:v1:bookmarks');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('prepmate:v1:bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = useCallback((questionId: string, subject: string) => {
    setBookmarks(prev => {
      const next = { ...prev };
      if (next[questionId]) {
        delete next[questionId];
      } else {
        next[questionId] = { questionId, subject, createdAt: Date.now() };
      }
      return next;
    });
  }, []);

  const isBookmarked = useCallback((questionId: string) => {
    return !!bookmarks[questionId];
  }, [bookmarks]);

  const clearData = useCallback(() => {
    setBookmarks({});
    localStorage.removeItem('prepmate:v1:bookmarks');
    localStorage.removeItem('prepmate:v1:settings');
    // Clear other keys as needed
  }, []);

  return (
    <StorageContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked, clearData }}>
      {children}
    </StorageContext.Provider>
  );
};

export const useStorage = () => {
  const context = useContext(StorageContext);
  if (!context) throw new Error('useStorage must be used within StorageProvider');
  return context;
};
