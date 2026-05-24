# 🎨 PrepMate — Design Tokens

> *The foundational numerical and structural visual language for PrepMate. This document defines the exact variables required to build the UI in Tailwind CSS.*

---

## Table of Contents

1. [Color System](#1-color-system)
2. [Typography System](#2-typography-system)
3. [Spacing System](#3-spacing-system)
4. [Border Radius System](#4-border-radius-system)
5. [Shadow System](#5-shadow-system)
6. [Gradient System](#6-gradient-system)
7. [Texture System](#7-texture-system)
8. [Animation Tokens](#8-animation-tokens)
9. [Layout Tokens](#9-layout-tokens)

---

## 1. Color System

PrepMate's color system is designed to be soft, warm, and low-contrast. It avoids pure white and pure black entirely.

### 1.1 Base & Background Colors

| Token Name | Tailwind Class | HEX Value | RGBA | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `color-desk-light` | `bg-desk-light` | `#FDFBF7` | `rgba(253, 251, 247, 1)` | Outer background, light theme |
| `color-desk-dark` | `bg-desk-dark` | `#F2EFE9` | `rgba(242, 239, 233, 1)` | Outer background, slightly darker |
| `color-paper-base` | `bg-paper-base` | `#FFF9F6` | `rgba(255, 249, 246, 1)` | Primary card background (The Notebook) |
| `color-paper-highlight` | `bg-paper-highlight`| `#FFFFFF` | `rgba(255, 255, 255, 0.7)`| Semi-transparent highlights on paper |

### 1.2 Text & Ink Colors

| Token Name | Tailwind Class | HEX Value | RGBA | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `color-ink-main` | `text-ink-main` | `#4A4543` | `rgba(74, 69, 67, 1)` | Primary body text (Warm Charcoal) |
| `color-ink-muted` | `text-ink-muted` | `#7A6B5F` | `rgba(122, 107, 95, 1)` | Secondary text, subtitles (Muted Umber) |
| `color-ink-faint` | `text-ink-faint` | `#BFB6B0` | `rgba(191, 182, 176, 1)` | Disabled text, placeholders (Warm Gray) |
| `color-ink-pencil`| `border-ink-pencil`| `#D1CCC7` | `rgba(209, 204, 199, 1)` | Soft borders, ruled lines |

### 1.3 Primary Palette (Cozy Blue)

| Token Name | Tailwind Class | HEX Value | RGBA | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `color-primary-50` | `bg-primary-50` | `#E6F2FF` | `rgba(230, 242, 255, 1)` | Mist Blue: Soft washes, large areas |
| `color-primary-200`| `bg-primary-200`| `#B3D9FF` | `rgba(179, 217, 255, 1)` | Pale Blue: Secondary elements |
| `color-primary-500`| `bg-primary-500`| `#7FB6FF` | `rgba(127, 182, 255, 1)` | Cozy Blue: Primary CTAs, active states |

### 1.4 Accent Palette (Stickers & Highlights)

| Token Name | Tailwind Class | HEX Value | RGBA | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `color-accent-peach` | `bg-accent-peach` | `#FFD6D1` | `rgba(255, 214, 209, 1)` | Warnings, soft highlights, stickers |
| `color-accent-sage` | `bg-accent-sage` | `#C6EFD6` | `rgba(198, 239, 214, 1)` | Success, correct answers, growth |
| `color-accent-butter`| `bg-accent-butter`| `#FFF3D6` | `rgba(255, 243, 214, 1)` | Sticky notes, tips, hints |
| `color-accent-lavender`| `bg-accent-lavender`| `#E8DCF5` | `rgba(232, 220, 245, 1)` | Bookmarks, special items |

---

## 2. Typography System

### 2.1 Font Families

- **Font Family Display (`font-display`):** `"Patrick Hand", "Shadows Into Light", "Caveat", cursive`
  - *Usage:* Logo, large expressive headers, small margin annotations.
- **Font Family Body (`font-body`):** `"Nunito", "Quicksand", "Inter", sans-serif`
  - *Usage:* All functional UI text, question content, buttons.

### 2.2 Typographic Scale (Based on 16px Base)

| Token | CSS / Tailwind | Font Size | Line Height | Letter Spacing | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `text-h1` | `text-4xl` | `2.25rem` (36px) | `1.2` | `normal` | Major Page Titles (Display Font) |
| `text-h2` | `text-2xl` | `1.5rem` (24px) | `1.3` | `normal` | Section Headers (Display or Body) |
| `text-h3` | `text-xl` | `1.25rem` (20px) | `1.4` | `normal` | Card Titles (Body Font) |
| `text-base` | `text-base` | `1rem` (16px) | `1.6` | `normal` | Default body text, questions |
| `text-sm` | `text-sm` | `0.875rem` (14px)| `1.5` | `normal` | Secondary text, options |
| `text-xs` | `text-xs` | `0.75rem` (12px) | `1.5` | `0.02em` | Meta info, tiny labels |
| `text-hand` | `text-lg` | `1.125rem` (18px)| `1.4` | `0.05em` | Handwritten annotations (Display) |

### 2.3 Font Weights
- **Normal (`font-normal`):** `400` (Default for body)
- **Medium (`font-medium`):** `500` (Emphasis in body)
- **Bold (`font-bold`):** `700` (Use sparingly; prefer color/size for hierarchy)

---

## 3. Spacing System

Based on an 8px grid system. Tailwind defaults generally apply, but specific semantic tokens are defined below.

| Token | Rem | Px | Usage |
| :--- | :--- | :--- | :--- |
| `spacing-xs` | `0.25rem` | `4px` | Tiny gaps, icon padding |
| `spacing-sm` | `0.5rem` | `8px` | Small gaps, option list spacing |
| `spacing-md` | `1rem` | `16px` | Default padding, component margins |
| `spacing-lg` | `1.5rem` | `24px` | Card padding, section gaps |
| `spacing-xl` | `2rem` | `32px` | Large section spacing |
| `spacing-2xl`| `3rem` | `48px` | Major layout breaks |
| `spacing-3xl`| `5rem` | `80px` | Page top/bottom padding |

---

## 4. Border Radius System

Soft, organic shapes. No sharp corners.

| Token | Tailwind Class | Value | Usage |
| :--- | :--- | :--- | :--- |
| `radius-sm` | `rounded-md` | `6px` | Small UI elements, checkboxes |
| `radius-md` | `rounded-lg` | `12px` | Standard cards, sticker bases |
| `radius-lg` | `rounded-2xl` | `18px` | Large paper panels, main layout containers |
| `radius-pill`| `rounded-full` | `9999px` | Primary buttons, tags, chips |
| `radius-blob`| `rounded-[40%_60%_70%_30%]`| Custom | Organic watercolor shapes, mascot containers |

---

## 5. Shadow System

Shadows must be warm and diffuse, never harsh black. Base shadow color is `rgba(122, 107, 95, X)`.

| Token | Tailwind Class | CSS Value | Usage |
| :--- | :--- | :--- | :--- |
| `shadow-sticker` | `shadow-sticker` | `0 2px 8px rgba(122,107,95,0.08)` | Flat stickers |
| `shadow-paper` | `shadow-paper` | `0 8px 24px rgba(122,107,95,0.06)` | Main content cards resting on desk |
| `shadow-hover` | `shadow-hover` | `0 12px 32px rgba(122,107,95,0.12)` | Cards/buttons when hovered (lifted) |
| `shadow-float` | `shadow-float` | `0 20px 40px rgba(122,107,95,0.15)` | Actively dragged or floating items |
| `shadow-inner-soft`| `shadow-inner-soft`| `inset 0 2px 4px rgba(122,107,95,0.05)` | Pressed buttons, input fields |

---

## 6. Gradient System

Used exclusively for soft washes, never harsh transitions.

| Token | CSS Value | Usage |
| :--- | :--- | :--- |
| `grad-paper` | `linear-gradient(135deg, #FFF9F6 0%, #FDF7F3 100%)` | Subtle paper lighting |
| `grad-wash-blue` | `radial-gradient(circle at top left, #E6F2FF 0%, transparent 70%)` | Watercolor bloom effect |
| `grad-wash-peach`| `radial-gradient(circle at bottom right, #FFD6D1 0%, transparent 70%)`| Warm corner highlight |
| `grad-ruled-lines`| `repeating-linear-gradient(transparent, transparent 31px, #D1CCC7 31px, #D1CCC7 32px)`| Notebook background |

---

## 7. Texture System

Defined as CSS classes applying background images or SVG filters.

| Token / Class | Implementation Approach | Usage |
| :--- | :--- | :--- |
| `texture-grain` | `bg-[url('/assets/textures/noise.png')] opacity-5 mix-blend-multiply` | Global desk background |
| `texture-paper` | `bg-[url('/assets/textures/paper-coldpress.png')] opacity-10 mix-blend-multiply` | Main cards |
| `texture-watercolor`| SVG filter `<feTurbulence>` + `<feDisplacementMap>` applied to paths | Generative watercolor edges |

---

## 8. Animation Tokens

Used in Framer Motion configurations and CSS transitions.

### 8.1 Durations
| Token | Value | Usage |
| :--- | :--- | :--- |
| `duration-fast` | `150ms` | Hover states, button presses, micro-interactions |
| `duration-base` | `300ms` | Standard state changes, simple entrances |
| `duration-slow` | `600ms` | Page transitions, major layout changes |
| `duration-ambient`| `4000ms`| Looping idle animations (floating, breathing) |

### 8.2 Easing Curves
| Token | CSS `cubic-bezier` | Framer Motion Equivalent | Usage |
| :--- | :--- | :--- | :--- |
| `ease-gentle` | `cubic-bezier(0.22, 1, 0.36, 1)` | `[0.22, 1, 0.36, 1]` | Default for entrances (Ease Out) |
| `ease-float` | `cubic-bezier(0.45, 0, 0.55, 1)` | `[0.45, 0, 0.55, 1]` | Looping animations (Sine In Out) |
| `ease-spring-soft`| N/A | `{ type: "spring", stiffness: 100, damping: 20 }` | Sticker placements, soft pops |

---

## 9. Layout Tokens

### 9.1 Breakpoints
Standard Tailwind breakpoints applied.
- `sm`: `640px`
- `md`: `768px` (Tablet)
- `lg`: `1024px`
- `xl`: `1280px` (Desktop)

### 9.2 Container Sizes
| Token | Value | Usage |
| :--- | :--- | :--- |
| `max-w-notebook` | `800px` | Maximum width of the main central paper card |
| `max-w-reading` | `65ch` | Maximum width of text blocks for optimal readability |
| `h-button-sm` | `32px` | Small action buttons, tags |
| `h-button-md` | `44px` | Standard buttons, mobile-friendly touch targets |
| `h-button-lg` | `56px` | Primary CTA buttons |

---

*End of design_tokens.md*
