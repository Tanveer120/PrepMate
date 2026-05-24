# 🎨 PrepMate — Art Direction

> *The definitive visual rules and artistic philosophy governing the PrepMate universe. A technical translation of our moodboard into actionable design principles.*

---

## Table of Contents

1. [Artistic Philosophy](#1-artistic-philosophy)
2. [Illustration Style Rules](#2-illustration-style-rules)
3. [Texture Rules](#3-texture-rules)
4. [Mascot Art Direction](#4-mascot-art-direction)
5. [Animation Direction](#5-animation-direction)
6. [Composition Philosophy](#6-composition-philosophy)
7. [UI Element Styling Rules](#7-ui-element-styling-rules)
8. [Emotional Motion System](#8-emotional-motion-system)
9. [Accessibility Through Aesthetics](#9-accessibility-through-aesthetics)
10. [Forbidden Styles](#10-forbidden-styles)

---

## 1. Artistic Philosophy

### Visual Storytelling Philosophy
PrepMate tells a story of **steady, gentle progress**. Every visual element supports the narrative of a student slowly filling a beloved notebook. We do not use visual storytelling to create urgency, competition, or high-stakes drama. The narrative is: *"You are safe here. Let's learn."*

### Emotional Pacing
Visuals should not demand immediate attention. We use a **slow-burn aesthetic** — the interface reveals its charm over time. A small doodle in the margin you didn't notice the first day. A new sleepy animation from the mascot on day three. The emotional pacing is designed for long-term retention rather than short-term dopamine spikes.

### Intentional Softness
Everything in PrepMate must be soft. Not just in shape, but in contrast, motion, and meaning. Hard lines create tension; soft edges invite touch. High contrast commands; low contrast suggests. We choose suggestion over command.

### Calming Interaction Design
Interactions should feel like physical objects moving through a dense, warm medium (like honey or warm air), not a vacuum. Nothing snaps instantly into place. Elements glide, settle, and rest.

---

## 2. Illustration Style Rules

All illustrations in PrepMate must adhere to these structural rules to ensure a cohesive universe.

### Line Style
- **Weight:** Variable weight, simulating a slightly dull HB pencil or a soft brush pen. Never perfectly uniform vector strokes.
- **Color:** Never pure black. Use `#4A4543` (Warm Charcoal) or `#7A6B5F` (Muted Umber) for outlines.
- **Continuity:** Breaks in lines are encouraged. Suggest shapes rather than rigidly enclosing them.

### Brush Style & Watercolor Usage
- **Wash:** Colors should appear as translucent washes, allowing the background paper texture to show through.
- **Bleed:** Edges of color blocks should have a slight "bleed" or feathered effect, never a vector-sharp edge.
- **Pooling:** Simulate pigment pooling at the edges of shapes (darker concentration at the borders of a wash).

### Shape Language & Edge Softness
- **Organic Geometry:** A circle is never mathematically perfect; it is a hand-drawn circle. A square is a squircle with slight wobbles.
- **Edge Softness:** Apply a 1-2px blur or feathering to illustration edges to remove vector harshness.

### Visual Imperfections & Layering
- **Off-Register Coloring:** The watercolor fill should not perfectly align with the line art. It should spill outside slightly or leave white gaps inside, simulating a quick, joyful painting process.
- **Layering Depth:** Background washes should be low opacity (10-20%), while foreground objects can reach 80% opacity. Never use 100% flat opacity fills.

---

## 3. Texture Rules

Texture is the foundation of the PrepMate aesthetic. Pure hex colors without texture are forbidden for large background areas.

### Paper Grain Intensity
- **Base Background (`bg-neutral-100`):** Subtle cold-press watercolor paper grain. Visible only upon close inspection (approx. 3-5% opacity noise overlay).
- **Cards/Containers:** Smoother hot-press paper feel. Slightly less grain than the background to create separation.

### Canvas Overlays
- Use SVG filters or tiled WebP images with `mix-blend-mode: multiply` for textures.
- Ensure textures tile seamlessly without visible repeating patterns.

### Watercolor Bleeding & Noise
- **Bleed:** Apply a CSS `box-shadow` or SVG filter with a slight color tint to simulate watercolor bleeding onto the paper from UI elements.
- **Noise Usage:** Use subtle, warm-tinted noise (never harsh grayscale TV static) to break up gradients and solid colors.

### Analog Imperfections
- Introduce very faint, sporadic "imperfections" — a tiny smudge, a faint watermark, or a slight discoloration in the paper background. These should be nearly imperceptible, adding subconscious realism.

---

## 4. Mascot Art Direction

The mascot is the soul of PrepMate. Its design must be strictly controlled to maintain its gentle appeal.

### Exact Mascot Art Style
- **Chibi Proportions:** Head-to-body ratio of 1:1 or 1:0.5 (mostly head).
- **Facial Features:** Wide-set eyes (simple dots, no pupils/irises). A small, curved line for a mouth (like a tiny 'v' or 'w').
- **Rendering:** Flat color washes with pencil-like outlines. Off-register coloring is mandatory. No intricate shading; use a single, soft drop shadow.

### Facial Expression Philosophy
- Expressions must remain subtle.
- **Joy:** Eyes turn to closed arches (`^ ^`), small blush appears.
- **Thinking:** One eye slightly larger, mouth straight, small question mark floats above.
- **Encouragement:** Standard face, but holding a prop (a tiny flag or star).
- **Never:** Anger, deep sadness, fear, or hyper-exaggerated anime reactions (no giant sweat drops, no exploding heads).

### Movement Rules & Idle Animations
- **Breathing:** A continuous, slow scale loop (e.g., `scaleY: 1` to `scaleY: 1.02` over 4 seconds).
- **Blinking:** Random interval blinking (every 3-7 seconds) to feel alive.
- **Rule of Restraint:** The mascot should spend 90% of its time doing almost nothing. Motion should be a reward, not a distraction.

---

## 5. Animation Direction

Motion in PrepMate must feel handcrafted and emotionally warm.

### Movement Pacing & Easing
- **Philosophy:** "Haste makes waste." Animations should feel unhurried.
- **Easing:** Almost entirely Custom Cubic Bezier. Use variations of `ease-out` for entering elements (decelerating as they arrive) and `ease-in-out` for decorative motion. Avoid linear or harsh `ease-in` curves.
- **Springs:** Use spring physics very sparingly, and only with high damping and low stiffness (a slow, lazy settle, not a bouncy spring).

### Interaction Softness (Hover & Transitions)
- **Hover:** Elements should not "snap" into a hover state. Use a 200-300ms transition for color shifts and shadow blooms.
- **Page Transitions:** Gentle cross-fades combined with a slight upward drift (`translateY: 10px` to `0px`). Never use sliding doors, flips, or harsh wipes.

### Scene Motion & Decorative Animations
- **Floating:** Stickers and background elements should have a subtle, asynchronous floating animation (drifting 2-4px up and down over 6-10 seconds).
- **Watercolor Reveals:** When a new major component appears, it can reveal itself via a watercolor mask expanding outward (like paint spreading on wet paper), rather than a simple fade.

---

## 6. Composition Philosophy

How elements are arranged on the screen dictates the user's emotional response to the workload.

### Whitespace Strategy
- **Generous Margins:** Content should never feel squeezed. The "desk" (background) must always be visible around the "notebook" (content area).
- **Breathing Room:** Use padding inside cards that is 1.5x what you would use in a standard SaaS app.

### Asymmetry Rules (Fukinsei)
- Perfect symmetry feels artificial and sterile.
- Introduce slight asymmetry: place a sticker on the top right, but leave the top left empty. Tilt a card by 0.5 degrees. Align text perfectly, but let the background container be slightly irregular.

### Layering Depth & Visual Hierarchy
1. **Background (Desk):** Deepest layer, highest texture, lowest contrast.
2. **Cards (Paper):** Middle layer, smooth texture, holds the primary content.
3. **Stickers/Accents:** Top layer, drop shadows, slight rotations, highest saturation.
- Hierarchy is established through layering and spacing, rarely through extreme font weight or harsh color contrast.

---

## 7. UI Element Styling Rules

### Cards (The Paper)
- Must have a subtle paper grain texture.
- Border radius: 12px - 18px.
- Never use a solid border line. If a border is needed, use a semi-transparent watercolor edge or a sketched pencil line.
- Shadow: Soft, warm, and diffuse. Never harsh black.

### Buttons (The Stickers/Tape)
- **Primary:** Pill-shaped. Flat color wash. On hover, the color slightly deepens and the shadow lifts.
- **Secondary:** Look like torn pieces of washi tape or outlined sketches.
- Text inside buttons must be centered and readable, using the rounded sans-serif font.

### Inputs & Progress Bars
- **Inputs:** Look like blank spaces in a workbook. A soft bottom border (pencil line) or a very pale, rounded rect background.
- **Progress Bars:** Should look like a watercolor brush stroke filling up, or a hand-drawn line extending. Never a perfectly sharp, glossy HTML progress bar.

### Tags & Stickers
- Used for categorization.
- Must look like physical die-cut stickers. Slight white outline, subtle drop shadow, tiny rotation (-2deg to +2deg).

---

## 8. Emotional Motion System

How motion reinforces the psychological goals of PrepMate.

### How Success Feels
- **Visuals:** A gentle bloom of Sage Green.
- **Motion:** The selected option softly pulses. A tiny, slow-moving burst of watercolor particles (not harsh confetti) drifts upward and fades. The mascot does a small, happy wiggle.
- **Emotion:** "That was nice. I am capable."

### How Failure Feels
- **Visuals:** A very soft shift to a muted Peach/Warm Gray.
- **Motion:** A slight, slow horizontal drift (a gentle head shake, not a violent buzzer vibration). The correct answer is highlighted calmly. The mascot tilts its head sympathetically.
- **Emotion:** "Oops. That's okay, now I know."

### How Progress Feels
- **Visuals:** A brushstroke extending.
- **Motion:** Smooth, continuous tweening. When a milestone is reached (e.g., streak extended), a small sticker appears with a satisfying, soft "plop" animation (scale down slightly, then settle to 1).
- **Emotion:** "I am moving forward, step by step."

---

## 9. Accessibility Through Aesthetics

Aesthetics and accessibility are not enemies in PrepMate; they support each other.

### Reducing Visual Stress
- The low-contrast, warm palette inherently reduces the visual stress and eye fatigue associated with staring at bright, high-contrast screens for long study sessions.

### Avoiding Overstimulation
- By restricting animations to gentle, slow movements and avoiding bright flashing colors, we protect neurodivergent users and those sensitive to sensory overload.

### Preserving Readability
- While we use handwritten fonts for decoration, **all functional text (questions, options, navigation) must use a highly legible, rounded sans-serif font** (e.g., Nunito or Inter).
- Ensure a minimum contrast ratio of 4.5:1 for all essential text against the paper background.

---

## 10. Forbidden Styles

> [!WARNING]
> If a design element looks like it belongs in any of these categories, it must be removed or redesigned immediately.

- **Harsh Gradients:** No linear or radial gradients that shift between highly contrasting colors (e.g., blue to pink). Gradients must only be used to simulate lighting or watercolor washes of analogous colors.
- **Neon / Cyberpunk:** Absolutely no glowing neon lines, pure black backgrounds, or electric/fluorescent colors.
- **Hard Glassmorphism:** No heavily blurred, glossy, transparent panels with stark white borders. (A very subtle frosted effect is acceptable only if it mimics tracing paper, not glass).
- **Ultra-Minimal SaaS:** No stark white interfaces with pure blue `#0066FF` buttons and `#333333` text. Do not look like a banking app or a CRM.
- **Over-Sharpened UI:** No 1px solid black borders. No 0px border-radius containers. Nothing should look like it could cut you.

---

*End of art_direction.md*
