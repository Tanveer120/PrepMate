import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Bookmark, Plus, Settings } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto pt-8 pb-4">
      <div className="border-t border-ink-pencil/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-ink-faint font-body">
          PrepMate &mdash; a cozy study companion
        </p>
        <div className="flex items-center gap-4">
          <Link to="/subjects" className="text-xs text-ink-muted hover:text-ink-main transition-colors flex items-center gap-1">
            <BookOpen className="w-3 h-3" /> Notebooks
          </Link>
          <Link to="/bookmarks" className="text-xs text-ink-muted hover:text-ink-main transition-colors flex items-center gap-1">
            <Bookmark className="w-3 h-3" /> Bookmarks
          </Link>
          <Link to="/request-subject" className="text-xs text-ink-muted hover:text-ink-main transition-colors flex items-center gap-1">
            <Plus className="w-3 h-3" /> Request Subject
          </Link>
          <Link to="/settings" className="text-xs text-ink-muted hover:text-ink-main transition-colors flex items-center gap-1">
            <Settings className="w-3 h-3" /> Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};
