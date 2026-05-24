/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'desk-light': 'rgb(var(--color-desk-light) / <alpha-value>)',
        'desk-dark': 'rgb(var(--color-desk-dark) / <alpha-value>)',
        'paper-base': 'rgb(var(--color-paper-base) / <alpha-value>)',
        'paper-highlight': 'rgb(var(--color-paper-base) / 0.7)',
        'ink-main': 'rgb(var(--color-ink-main) / <alpha-value>)',
        'ink-muted': 'rgb(var(--color-ink-muted) / <alpha-value>)',
        'ink-faint': 'rgb(var(--color-ink-faint) / <alpha-value>)',
        'ink-pencil': 'rgb(var(--color-ink-pencil) / <alpha-value>)',
        'primary-50': 'rgb(var(--color-primary-50) / <alpha-value>)',
        'primary-100': 'rgb(var(--color-primary-100) / <alpha-value>)',
        'primary-200': 'rgb(var(--color-primary-200) / <alpha-value>)',
        'primary-300': 'rgb(var(--color-primary-300) / <alpha-value>)',
        'primary-500': 'rgb(var(--color-primary-500) / <alpha-value>)',
        'accent-peach': 'rgb(var(--color-accent-peach) / <alpha-value>)',
        'accent-sage': 'rgb(var(--color-accent-sage) / <alpha-value>)',
        'accent-butter': 'rgb(var(--color-accent-butter) / <alpha-value>)',
        'accent-lavender': 'rgb(var(--color-accent-lavender) / <alpha-value>)',
        'mascot-body': 'rgb(var(--color-mascot-body) / <alpha-value>)',
        'mascot-ink': 'rgb(var(--color-mascot-ink) / <alpha-value>)',
        'mascot-border': 'rgb(var(--color-mascot-border) / <alpha-value>)',
        'mascot-cheek': 'rgb(var(--color-mascot-cheek) / <alpha-value>)',
      },
      fontFamily: {
        'display': ['"Patrick Hand"', '"Shadows Into Light"', '"Caveat"', 'cursive'],
        'body': ['"Nunito"', '"Quicksand"', '"Inter"', 'sans-serif'],
      },
      fontSize: {
        'h1': ['2.25rem', { lineHeight: '1.2' }],
        'h2': ['1.5rem', { lineHeight: '1.3' }],
        'h3': ['1.25rem', { lineHeight: '1.4' }],
        'hand': ['1.125rem', { lineHeight: '1.4', letterSpacing: '0.05em' }],
      },
      maxWidth: {
        'notebook': '800px',
        'reading': '65ch',
      },
      height: {
        'button-sm': '32px',
        'button-md': '44px',
        'button-lg': '56px',
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '80px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '12px',
        'lg': '18px',
        'blob': '40% 60% 70% 30%',
      },
      boxShadow: {
        'sticker': '0 2px 8px rgba(122,107,95,0.08)',
        'paper': '0 8px 24px rgba(122,107,95,0.06)',
        'hover': '0 12px 32px rgba(122,107,95,0.12)',
        'float': '0 20px 40px rgba(122,107,95,0.15)',
        'inner-soft': 'inset 0 2px 4px rgba(122,107,95,0.05)',
      },
      backgroundImage: {
        'grad-paper': 'linear-gradient(135deg, rgb(var(--color-paper-base)) 0%, rgb(var(--color-desk-light)) 100%)',
        'grad-wash-blue': 'radial-gradient(circle at top left, rgb(var(--color-primary-50)) 0%, transparent 70%)',
        'grad-wash-peach': 'radial-gradient(circle at bottom right, rgb(var(--color-accent-peach)) 0%, transparent 70%)',
        'grad-ruled-lines': 'repeating-linear-gradient(transparent, transparent 23px, rgb(var(--color-ink-pencil)) 23px, rgb(var(--color-ink-pencil)) 24px)',
        'texture-grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
        'texture-paper': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.04' result='noise' /%3E%3CfeDiffuseLighting in='noise' lighting-color='%23fff' surfaceScale='2'%3E%3CfeDistantLight azimuth='45' elevation='60' /%3E%3C/feDiffuseLighting%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)'/%3E%3C/svg%3E\")"
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '600ms',
        'ambient': '4000ms',
      },
      transitionTimingFunction: {
        'gentle': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'float': 'cubic-bezier(0.45, 0, 0.55, 1)',
      }
    },
  },
  plugins: [],
}
