import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { BookOpen, Bookmark, Settings, Menu, X, Plus, Home } from 'lucide-react';

const links = [
  { to: '/subjects', label: 'Notebooks', icon: BookOpen },
  { to: '/bookmarks', label: 'Bookmarks', icon: Bookmark },
  { to: '/request-subject', label: 'Request Subject', icon: Plus },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center justify-between w-full mb-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-lg text-ink-main group-hover:text-primary-500 transition-colors duration-fast">
            PrepMate
          </span>
        </Link>
        <div className="flex items-center gap-1">
          {links.map(link => {
            const active = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={twMerge(
                  'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-body font-medium transition-all duration-fast',
                  active
                    ? 'bg-primary-50 text-primary-500'
                    : 'text-ink-muted hover:bg-ink-pencil/10 hover:text-ink-main'
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="md:hidden flex items-center justify-between w-full mb-4">
        <Link to="/" className="font-display text-lg text-ink-main">PrepMate</Link>
        <button onClick={() => setOpen(!open)} className="p-2 text-ink-muted hover:text-ink-main transition-colors">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden flex flex-col gap-1 mb-4 bg-paper-base rounded-2xl shadow-paper border border-ink-pencil/10 p-3"
          >
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-ink-muted hover:bg-ink-pencil/10 hover:text-ink-main transition-all">
              <Home className="w-4 h-4" /> Home
            </Link>
            {links.map(link => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={twMerge(
                    'flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all',
                    active ? 'bg-primary-50 text-primary-500' : 'text-ink-muted hover:bg-ink-pencil/10 hover:text-ink-main'
                  )}
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
