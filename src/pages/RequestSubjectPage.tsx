import React from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../animations/framerVariants';
import { Heart, Upload, Sparkles, BookOpen, ArrowRight, Star, FileText, PenLine } from 'lucide-react';

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-6, 6, -6],
    transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' as const },
  },
};

const steps = [
  {
    icon: Upload,
    title: 'Upload your PDF',
    desc: 'Share your MCQ bank, notes, or question papers. Any format works.',
    color: 'bg-accent-peach',
  },
  {
    icon: PenLine,
    title: 'We review & clean',
    desc: 'Our team carefully formats and organizes your questions.',
    color: 'bg-accent-butter',
  },
  {
    icon: BookOpen,
    title: 'Subject gets added',
    desc: 'Your contribution becomes a new notebook in PrepMate.',
    color: 'bg-accent-sage',
  },
  {
    icon: Sparkles,
    title: 'Everyone can study it',
    desc: 'Students worldwide can practice and learn together.',
    color: 'bg-accent-lavender',
  },
];

const floatingStickers = [
  { emoji: '📚', x: '10%', y: '15%', delay: 0, size: 'text-2xl' },
  { emoji: '✏️', x: '85%', y: '10%', delay: 0.5, size: 'text-xl' },
  { emoji: '📝', x: '8%', y: '60%', delay: 1, size: 'text-2xl' },
  { emoji: '🎯', x: '90%', y: '70%', delay: 1.5, size: 'text-xl' },
  { emoji: '💡', x: '15%', y: '80%', delay: 0.8, size: 'text-lg' },
  { emoji: '⭐', x: '80%', y: '30%', delay: 1.2, size: 'text-xl' },
];

function TallyEmbed({ formUrl }: { formUrl: string }) {
  const embedUrl = formUrl.replace('/r/', '/embed/');

  return (
    <div className="w-full overflow-hidden p-10 bg-[#1a1917]">
      <iframe
        src={embedUrl}
        width="100%"
        height="1250"
        frameBorder="0"
        marginHeight={0}
        marginWidth={0}
        title="Request a Subject"
        className="w-full"
        style={{ minHeight: '1250px' }}
        scrolling="no"
      >
        <p className="text-ink-muted p-6 text-center font-body">
          Loading form...{' '}
          <a href={formUrl} target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">
            Open in Tally
          </a>
        </p>
      </iframe>
    </div>
  );
}

export const RequestSubjectPage: React.FC = () => {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full"
    >
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-200/80 via-accent-lavender/60 to-accent-butter/60 dark:from-primary-50 dark:via-accent-lavender/30 dark:to-accent-butter/30 border border-primary-200/60 dark:border-primary-100/50 p-6 md:p-10 lg:p-14 mb-8">
        <div className="absolute inset-0 pointer-events-none texture-paper opacity-40"></div>

        {/* Floating stickers */}
        {floatingStickers.map((st, i) => (
          <motion.div
            key={i}
            className={`absolute pointer-events-none ${st.size}`}
            style={{ left: st.x, top: st.y }}
            variants={floatAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: st.delay }}
          >
            {st.emoji}
          </motion.div>
        ))}

        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-sm text-accent-peach mb-2"
            >
              ✨ Contribute to PrepMate
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-display text-h1 md:text-5xl text-ink-main leading-tight mb-4"
            >
              Missing your subject?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-h3 font-body text-ink-muted mb-2"
            >
              Send us your PDFs and help PrepMate grow ✨
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-ink-faint"
            >
              Upload MCQ PDFs, notes, or question banks you'd like to see added.
            </motion.p>
          </div>

          {/* Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 100, damping: 16 }}
            className="relative shrink-0"
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-28 h-28 md:w-36 md:h-36 bg-mascot-body rounded-blob shadow-float border-2 border-mascot-border flex flex-col items-center justify-center cursor-pointer hover:shadow-hover transition-shadow duration-slow"
            >
              <motion.span
                animate={{ scaleY: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="font-display text-mascot-ink text-2xl md:text-3xl font-bold"
              >
                • •
              </motion.span>
              <div className="absolute top-[30%] left-3 w-2.5 h-1.5 bg-mascot-cheek rounded-full opacity-60"></div>
              <div className="absolute top-[30%] right-3 w-2.5 h-1.5 bg-mascot-cheek rounded-full opacity-60"></div>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-1 right-0 text-xs"
              >
                📋
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 120, damping: 12 }}
              className="absolute -top-2 -right-2 bg-accent-butter rounded-full p-1.5 shadow-sticker"
            >
              <Sparkles className="w-4 h-4 text-ink-muted" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Tally Form Section ─── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="mb-8">
        <div className="bg-paper-base rounded-3xl shadow-paper border border-ink-pencil/10 overflow-hidden relative">
          <div className="absolute inset-0 pointer-events-none texture-paper opacity-30"></div>
          <div className="relative z-10 p-5 md:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary-50 p-2.5 rounded-full">
                <Upload className="w-5 h-5 text-primary-500" />
              </div>
              <div>
                <h2 className="font-display text-h2 text-ink-main">Submit your request</h2>
                <p className="text-sm text-ink-muted font-body">Fill in the details and attach your files</p>
              </div>
            </div>
            <div className="w-full rounded-2xl border border-ink-pencil/10 bg-desk-light/50 overflow-hidden relative">
              <div className="absolute inset-0 pointer-events-none texture-paper opacity-20"></div>
              <TallyEmbed formUrl="https://tally.so/r/44p1VA" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── How It Works Section ─── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="mb-8">
        <div className="text-center mb-6">
          <h2 className="font-display text-h2 text-ink-main">How it works</h2>
          <p className="text-ink-muted text-sm font-body mt-1">Four simple steps to grow PrepMate</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="bg-paper-base rounded-2xl shadow-sticker border border-ink-pencil/10 p-5 relative hover:shadow-hover transition-shadow duration-slow"
            >
              <div className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center mb-3`}>
                <step.icon className="w-5 h-5 text-ink-main" />
              </div>
              <h3 className="font-display text-base text-ink-main mb-1">{step.title}</h3>
              <p className="text-sm text-ink-muted font-body leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-ink-faint">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ─── Community Section ─── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="mb-8">
        <div className="bg-gradient-to-br from-accent-butter/60 via-accent-lavender/50 to-primary-200/50 dark:from-accent-butter/30 dark:via-accent-lavender/20 dark:to-primary-50/30 rounded-3xl border border-accent-butter/50 dark:border-accent-butter/30 p-6 md:p-10 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none texture-paper opacity-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <motion.div
              initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
              whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 100, damping: 14 }}
              className="shrink-0"
            >
              <div className="w-20 h-20 bg-accent-peach/30 rounded-blob flex items-center justify-center">
                <Heart className="w-9 h-9 text-accent-peach" />
              </div>
            </motion.div>
            <div className="text-center md:text-left">
              <h2 className="font-display text-h2 text-ink-main mb-2">PrepMate grows with you</h2>
              <p className="text-ink-muted font-body text-sm leading-relaxed max-w-xl">
                Every contribution makes studying warmer and more accessible for everyone.
                Whether it's a single question bank or a full semester of MCQs —
                <span className="text-ink-main font-medium"> your help matters</span>.
              </p>
              <div className="flex items-center gap-3 mt-4 justify-center md:justify-start">
                <Star className="w-4 h-4 text-accent-butter fill-current" />
                <span className="text-xs text-ink-faint font-body">Thank you for being part of this</span>
                <Star className="w-4 h-4 text-accent-butter fill-current" />
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ─── Footer CTA ─── */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        className="mb-4">
        <div className="text-center py-6">
          <p className="font-display text-ink-muted text-sm">
            Have questions? Reach out and we'll help you contribute 💌
          </p>
          <div className="flex items-center justify-center gap-2 mt-3 text-xs text-ink-faint">
            <FileText className="w-3 h-3" />
            <span>No backend &bull; No login &bull; Just community warmth</span>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};
