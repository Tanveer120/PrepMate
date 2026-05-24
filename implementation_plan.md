implementation_plan.md
PrepMate — Implementation Plan
A startup-grade, deeply detailed plan for building a cozy, kawaii watercolor-style static exam-prep web app using React + Vite, Tailwind, Framer Motion, JSON files and browser storage.

Table of Contents

1. Product Vision
2. Brand Identity
3. Design System
4. UI/UX Architecture (Page-by-page)
5. Component Architecture
6. Folder Structure
7. Data Architecture
8. Local Storage System
9. Quiz Engine Architecture
10. Animation System (Framer Motion)
11. Responsive Design Strategy
12. Development Phases (Roadmap)
13. GitHub Pages Deployment Strategy
14. Future Expansion Ideas
15. Final Product Experience
Appendix: Quick References (colors, keys, JSON samples)
1. Product Vision
Purpose

Create a calm, safe, and delightful exam-prep web experience that encourages sustained study via gentle aesthetics and micro-rewards.
Offer an entirely static, privacy-first product: student data stays local (browser storage), fast load times, easily hostable on GitHub Pages.
Emotional experience

Warm, cozy, and reassuring — like opening a favorite study notebook.
Cute and friendly companion presence (mascot) that cheers small wins.
Watercolor textures and soft pastel palette invite low-friction re-engagement.
Minimal anxiety: no aggressive progress trackers, no harsh gamification — gentle nudges.
Target audience

High-school and undergraduate students, exam-takers, and lifelong learners who prefer a calm study environment.
Users who value privacy and lightweight tools, and who enjoy aesthetic / stationery-like interfaces.
Secondary: parents and tutors seeking a non-corporate student tool.
Design philosophy

"Less pressure, more ritual." Tools should invite rituals (daily open, quick quiz, bookmark), not overwhelm with dashboards.
Visual affordances modeled on physical stationery: paper, stickers, hand-drawn annotations.
Prioritize readability, low cognitive load, accessibility, and delightful microinteractions.
User psychology — how we help people study

Rituals & environment: a calming workspace encourages regular use and lower stress.
Micro-goals and small wins (streaks, sticker badges) drive dopamine without gamification anxiety.
Visual metaphors (desk, notebook) help users frame their focus and reduce digital fatigue.
Immediate feedback + gentle coaching (mascot) increases retention and motivation.
Differentiation vs traditional exam websites

Not dashboard-heavy and data-centric — instead, ambient, gentle, and stationery-inspired.
Fully static, client-side, privacy-first: no account lock-in, everything stored locally; users retain ownership.
Focus on study experience and mood, not just metrics. Analytics are simple, aesthetically integrated, and user-controlled.
2. Brand Identity
High-level brand direction

Cozy, gentle, and playful.
Honest, supportive — like a kind tutor who brings tea.
Soft watercolor textures, rounded shapes, sticker accents, hand-lettered headers.
Mascot philosophy

The mascot is a small, non-intrusive companion (e.g., a plush study critter) that communicates via short, positive microcopy and expressions.
Should add personality but never intrude on the study flow.
Expresses simple states: idle, encouraging, celebrating, empathetic (if exam result low).
Mascot ideas

Tiny hedgehog with a pencil (study hedgehog)
Little watercolor otter holding a notebook
A sleepy cat with a paperclip hat
A small sentient teacup / mug
Tagline ideas

"PrepMate — Your cozy study desk."
"Study gently. Remember better."
"Calm prep. Better focus."
Moodboard keywords

watercolor, pastel, paper grain, stickers, handwriting, rounded shapes, soft shadows, warm light, stationery, notebook margins, washi tape, cozy desk lamp.
Visual inspiration references (conceptual)

Watercolor illustrations, handmade stationery shops, planner/journal spreads, kawaii sticker sets, analog notebook UX (paper + sticky notes), slow productivity aesthetics.
Emotional tone & personality

Helpful, encouraging, gentle, slightly playful, trustworthy.
Microcopy voice: short, friendly, non-judgemental.
Visual storytelling

The app is a virtual desk: subjects are sticky notes / notebooks, quizzes are pages pulled out, results are sticker badges placed on your notebook page.
3. Design System
Goal

A compact design system tuned for Tailwind: tokens for colors, spacing, typography, shadows, and texture overlays. Reuse styles via utility classes and small component wrappers.
Color palette (pastel + warm neutrals)

Token	Name	Hex	Usage
primary-50	Mist Blue	#E6F2FF	backgrounds, soft surfaces
primary-500	Cozy Blue	#7FB6FF	primary accents, CTA
secondary-300	Peach Blush	#FFD6D1	stickers, highlights
accent-200	Sage	#C6EFD6	success / badges
neutral-100	Paper	#FFF9F6	main paper background
neutral-400	Warm Gray	#BFB6B0	text muted
shadow-color	Warm Shadow	rgba(122,107,95,0.12)	soft shadows
watercolor-edge	Indigo Wash	rgba(127,182,255,0.14)	watercolor overlays
(These tokens map into Tailwind config as color tokens and custom CSS variables.)

Typography

Heading font (handwritten/soft): "Patrick Hand" or "Shadows Into Light" (Google Fonts) — for logo, large titles, and small decorative headers.
UI & body: "Inter" or "Nunito" (rounded sans) for high legibility.
Scale: Headline (2rem), H2 (1.5rem), H3 (1.125rem), body (1rem), small (0.875rem).
Default line-height: 1.5 for body text.
Spacing system

Base spacing unit: 8px.
Scale: 4, 8, 12, 16, 24, 32, 40, 56 (map to Tailwind spacing).
Use consistent padding/margins: e.g., cards use p-4 (16px) on mobile.
Card styles (Watercolor paper cards)

Background: paper color (#FFF9F6) + subtle paper grain texture as background-image (SVG/PNG).
Border: none or faint colored border with low opacity to feel like watercolor edge.
Border radius: 12px for small cards, 18px for large panels.
Inner accents: torn/washi tape header or small corner sticker.
Elevation: soft, warm shadow (shadow-color) with spread rather than harsh.
Button styles

Primary (CTA): filled with primary-500, white text, rounded-full or pill.
Secondary: ghost button with colored outline or soft background.
Sticker button: small rounded rect with off-white and subtle sticker shadow; used for bookmarking, tags.
Size variants: small (28px height), medium (40px), large (56px).
Shadows

Use warm, soft shadows:
subtle: 0 6px 18px rgba(122,107,95,0.08)
card: 0 12px 40px rgba(122,107,95,0.09)
Avoid heavy dark drop-shadows; prefer blurred, warm shadows that read as paper floating.
Border radius

Base radius: 12px
Large radius: 18px
Sticker radius: 8px
Capsule buttons: 9999px
Paper textures and watercolor overlays

Technique: overlay semi-transparent PNG/SVG textures on containers using mix-blend-mode: multiply / overlay.
Use CSS variables to toggle intensity and color tint.
Provide 3 texture variations (light, medium, heavy) as public assets.
Sticker aesthetics

Small rounded rectangles with SVG shadow; ability to "pin" to corner via CSS transform (rotation, offset).
Implement as reusable Sticker component with props for color, label, icon.
Notebook aesthetics

Ruled lines via subtle repeating-linear-gradient in background for "notebook" container.
Left margin/gutter for dates/section names.
Ring-binder element optional for desktop.
Animation language

Smooth, gentle, friendly motion.
Easing: custom cubic-bezier similar to easeOutCubic (e.g., [0.22, 1, 0.36, 1]) for entries. Use slower durations for decorative motion, faster for feedback.
Timing:
microinteractions: 120–250ms
major transitions: 400–600ms
decorative loops: 3–8s cycles
Respect prefers-reduced-motion.
Hover interactions

Slight scale up (1.02) + lift shadow + watercolor highlight fade-in.
Sticker tilt on hover: small rotation (±3°).
Buttons: smooth color shift and subtle inner shadow.
Microinteractions

Answer click: tactile "press" animation (scale down → up) + color feedback swipe.
Bookmark toggles: small sticker "flip" or burst of confetti (subtle).
Mascot reactions: trigger a short animation on notable events.
UI consistency rules

Use design tokens exclusively for colors, spacing and radii.
All interactive elements have at least 44px tappable area.
Always support keyboard focus styles with visible ring in brand color.
4. UI/UX Architecture (Page-by-page)
General layout patterns

Global layout: DeskCanvas (full-bleed background with watercolor textures + floating stickers), central content card (paper) with max-width 1100px, side panels optional.
Navigation: left-floating minimal header with subject icon + back button; floating quick actions (bookmark, settings).
Always accessible "mascot area" in bottom-left / -right corner where mascot lives.
For each page: goal, layout, animation, and user flow.

Landing Page
Role: Welcome, quick entry to subjects, show latest / pinned subject, and short explanation.
Layout:
Full-bleed watercolor background (soft).
Central desk canvas with an open notebook (animated).
Featured subject cards (small grid), Quick Start CTA, "Import / Export Data" link.
Emotional goal: invite, calm and encourage immediate action.
Animations: gentle page fade + notebook open animation; cards float in staggered.
Flow: user can pick subject or go to Subject Selection.
Subject Selection Page
Role: browse subjects and open them.
Layout:
Grid of PaperCard subject tiles (sticky notes).
Filters / tags row (mini sticker buttons).
Last opened subject shown as highlighted.
Emotional goal: feel like a clean desk with labeled notebooks.
Animations: card hover lift, selection expands into subject view.
Flow: click subject → load subject JSON → transition into Quiz Start or Subject Overview.
Quiz Page
Role: core study interactions.
Layout:
Left: QuestionCard (paper) with question text and optional media.
Middle / below: Options as sticker-like OptionButtons arranged vertically/inline.
Right (or bottom on mobile): progress column — streak, timer, notes, mascot tip bubble.
Top: breadcrumb + question index + progress bar.
Emotional goal: focused, low cognitive load, calm urgency (timers are optional).
Animations:
Question card entrance: watercolor reveal mask.
Option press: tactile feedback + small particle "glow" if correct.
Mascot animation on feedback.
Flow:
Load a set -> display question -> select answer -> immediate feedback (if enabled) or accumulate to end -> mark bookmark / flag → next.
New session persists current question index.
Results Page
Role: summarize session, encourage gentle next steps.
Layout:
Big sticker badge with summary score.
Suggested weak topics (cards with "review" CTA).
Cheerful mascot and sticker confetti (subtle).
Buttons: retry weak questions, review all, export results.
Emotional goal: celebrate without pressure, highlight realistic next steps.
Animations: confetti watercolor wash, badges pop-in with bounce.
Analytics Dashboard
Role: simple, aesthetic learning insights (not overwhelming).
Layout:
Overview cards: current streak, total time studied, accuracy %
Timeline sparkline (small SVG)
Heatmap-like calendar for practice days (soft colors)
Tag accuracy breakdown (horizontal bars)
Emotional goal: informative, calm, helpful — avoid "big data" feel.
Animations: bars animate gently into place, sparkline strokes draw.
Flow: click a tag -> jump to Subject filter or Weak Questions for that tag.
Bookmarks Page
Role: curated list of bookmarked questions with quick review flow.
Layout:
List of PaperCards with bookmarked question + small notes and tag chips.
Quick "start quiz" to review bookmarks.
Emotional goal: organized cozy pocket for things you want to revisit.
Animations: card re-ordering, "pin" animation when bookmarked.
Weak Questions Mode
Role: targeted remediation based on tracked weak items.
Layout:
Similar to Quiz Page but question set consists only of weak items and shows failure patterns.
Extra banner explaining why these were chosen.
Emotional goal: supportive coaching; provide small goals like "5 questions to rebuild confidence".
Animations: subtle progress micro-animations.
Flow: run quick 5-10 question sessions, track improvement.
Settings Page
Role: control persistence, export/import data, toggle animations, choose theme intensity, study preferences.
Layout:
Small, simple form-like layout framed on a paper card.
Emotional goal: trusted control center, privacy-first messaging.
Animations: toggles animate gently; export confirmation toast.
5. Component Architecture
Principles

Composition over inheritance: small, focused components, higher-level composites.
Reusability: UI primitives are independent of quiz logic.
Clear state ownership: UI components receive props; global state via contexts (settings, storage), session state via reducers.
Top-level component tree (conceptual)

App (routes + contexts)
Layout (DeskCanvas)
Header
FloatingActions
MascotRoot
MainContent (routes render here)
LandingPage
SubjectListPage
SubjectOverview
QuizPage
QuizEngine (session reducer)
QuestionCard
MediaRenderer
ExplanationPanel
OptionsList
OptionButton (handles click animation)
ProgressBar / ProgressRing
Timer
NotesPanel
ResultsPage
AnalyticsPage
Sparkline
Heatmap
BookmarksPage
WeakQuestionsPage
SettingsPage
ToastProvider
ModalRoot
Key reusable UI components and responsibilities

DeskCanvas

Props: children, themeIntensity
Responsibility: background watercolor textures, floating sticker layers, scene depth.
PaperCard

Props: title, subtitle, children, variant, textureIntensity
Responsibility: consistent card visual (paper + texture), focus trap for modals on desktop.
Sticker

Props: label, color, icon, pinned(boolean), rotation
Responsibility: decorative/interactive sticker, used for tags and CTAs.
Button / IconButton

Props: variant, size, onClick, ariaLabel, disabled
Responsibility: accessible, themable buttons with hover / press animations.
QuestionCard

Props: question (object), onAnswer, showExplanation
Responsibility: render question text, media, optional student notes, handle focus and layout.
OptionButton

Props: option, index, onSelect, selected, disabled
Responsibility: visual selection + animations; emit selection events but not business logic.
QuizEngine (core session component)

Props: questionSet, config (randomize, immediateFeedback,...)
Responsibilities:
Manage session state: currentIndex, answers[], timing, seed.
Persist partial progress to localStorage.
Handle scoring and weak-question tagging.
Exposes: start(), next(), prev(), submitAnswer(), pause().
MascotRoot & MascotReaction

Props: mood, onInteract
Responsibility: controlled by sessions & global events to react.
ProgressBar / ProgressRing

Props: value (0–1), label
Responsibility: accessible progress indicator.
Timer

Props: duration, onExpire, paused
Responsibilities: per-question or session timer; provides remaining time and progress.
State ownership strategy

Global contexts (App-level):
SettingsContext: themeIntensity, reducedMotion, audioEnabled
StorageContext: localStorage helpers, migration utils
AnalyticsContext: event recording
Local session state:
QuizEngine manages the live quiz session via useReducer.
UI ephemeral state:
Component-level state for handling focus, hover, and small toggles.
Props conventions

Keep prop names explicit and small; prefer passing IDs & handlers over entire large objects when possible.
Keep presentational components purely presentational: PaperCard receives only rendering props and children.
Performance & reusability

Memoize heavy components (QuestionCard) with React.memo.
Avoid prop drilling: use contexts for deeply needed global data (settings, storage functions).
6. Folder Structure
Goals

Clear separation of concerns.
Scales to growing features and assets.
Easy mental model for new contributors.
Proposed tree (top-level)

Copy
Why each folder exists

/public: static JSON assets and PNG/SVG textures avoid bundling for easier editing.
/src/assets: small images imported into components, fonts etc.
/components: reusable UI and composition components.
/pages: route-level compositions (keeps routes tidy).
/hooks: reusable logic decoupled from components.
/contexts: global state and cross-cutting concerns.
/utils: pure functions; storage keys centralization for consistent access.
/animations: central place for Framer Motion variants to ensure consistency.
/styles: Tailwind & custom CSS tokens.
Future scalability

Add /plugins for optional features (SRS), /integrations for cloud sync, and /experiments for A/B features.
7. Data Architecture
Constraints & decisions

All canonical data (question banks, subject manifest) are static JSON files under /public/data.
Each subject may map to a large JSON file (paginated or chunked if huge).
Client fetches JSON via fetch() and caches into in-memory and optionally into localStorage for offline-ish speed.
subjects.json (manifest)

Purpose: quick list of subjects and metadata to render selection UI without loading full question sets.
Example schema:

json
Copy
[
  {
    "slug": "algebra",
    "title": "Algebra",
    "description": "Basic algebra concepts",
    "icon": "/assets/icons/algebra.svg",
    "color": "#FFD6D1",
    "questionsFile": "/data/questions/algebra.json",
    "version": "1.0",
    "count": 124,
    "tags": ["math", "algebra", "equations"]
  }
]
MCQ JSON format (per subject)

Design goals: flexible, self-describing, extendable (multi-correct, media, explanation).
Each question is an object with stable ID.
Example question entry:

json
Copy
{
  "id": "alg-0001",
  "type": "mcq",
  "question": "Solve for x: 2x + 3 = 7",
  "options": [
    { "id": "a", "text": "1" },
    { "id": "b", "text": "2" },
    { "id": "c", "text": "3" },
    { "id": "d", "text": "4" }
  ],
  "correct": ["b"],
  "explanation": "Subtract 3, divide by 2.",
  "difficulty": 1,
  "tags": ["linear-equations", "algebra"],
  "media": null,
  "createdAt": "2024-03-01"
}
Key fields

id (string, unique)
type: mcq, multi-select, fill-in, true-false (initially focus on mcq)
question: string (supports inline markdown)
options: array of {id, text, media?}
correct: array (support multi-correct)
explanation: optional string
difficulty: integer (1–5)
tags: array of strings
media: object (type, src, alt)
Bookmark storage representation

In local storage, keep minimal bookmark records:
Example:

json
Copy
{
  "questionId": "alg-0001",
  "subject": "algebra",
  "note": "Review step-by-step method",
  "createdAt": 1680000000000
}
Wrong answer tracking

Track attempts per question with counters and timestamps:
Example structure (localStorage):

json
Copy
{
  "id": "alg-0001",
  "attempts": 3,
  "correctAttempts": 0,
  "lastAttemptAt": 1680123456789,
  "history": [
    { "timestamp": 1680000010000, "correct": false, "timeMs": 15000 }
  ]
}
localStorage schema (high-level)

All keys prefixed with prepmate:v1: to allow migration later.
Keys:
prepmate:v1:settings (object)
prepmate:v1:bookmarks (array)
prepmate:v1:wrongIndex (map by questionId)
prepmate:v1:sessions (array of session summaries)
prepmate:v1:lastOpened (string slug)
prepmate:v1:analytics (events array, pruned)
prepmate:v1:cache:subject:algebra (cached file)
Keep objects small; prune analytics to rolling window.
Data flow

Load subjects.json at app start (or lazy when opening subject list).
On subject open, fetch questions file (questionsFile path in manifest).
Cache fetched JSON in memory and optionally to localStorage cache key.
When user begins a quiz, QuizEngine loads question set (possibly random subset).
User actions update StorageContext (bookmarks, wrong tracking, session recording).
All writes happen synchronously to localStorage or via batched write to avoid frequent writes.
Analytics context records events and periodically prunes/exports.
Fetch strategy

Use fetch() with relative URLs (e.g., /data/questions/algebra.json) — ensures compatibility with GH Pages.
Provide simple client cache: memory-first, localStorage fallback.
For large question files, support chunked files (questions-1.json, questions-2.json) and lazy loading.
Persistence strategy

On critical state change (bookmark, wrong-answer increment, session end), persist to localStorage.
Use small debouncing (e.g., 300ms) for frequent events (e.g., per-question timing updates).
Provide manual export/import JSON for backup.


8. Local Storage System
Goals recap

Keep all user data client-side (privacy-first).
Versioned, recoverable, and sync-friendly (across tabs/windows).
Small, efficient writes to avoid hitting storage quotas.
Clear migration path when schema evolves.
High-level strategy

All storage keys will be prefixed and versioned: prepmate:v1:.... This allows clear migrations and bulk backup before altering formats.
Use a hybrid sync pattern:
BroadcastChannel (preferred, when available) for cross-tab deltas.
Fallback to storage event for browsers without BroadcastChannel.
On Tab focus, revalidate critical keys to ensure no stale UI.
Debounce frequent writes (e.g., timer ticks) and batch changes for critical keys.
Keep analytics/event logs pruned to avoid unbounded growth.
Provide manual export/import of the full data package (single JSON file) for backups and migration between devices.
Storage keys and payloads

Use a consistent, documented set of keys. Keys should be small and predictable.
Example keys and brief schemas:

text
Copy
prepmate:v1:settings            // Object - user preferences
prepmate:v1:bookmarks          // Map<string, Bookmark>
prepmate:v1:wrongIndex         // Map<string, WrongRecord>
prepmate:v1:weakSet            // Array<string> (questionId list)
prepmate:v1:sessions           // Array<SessionSummary>
prepmate:v1:lastOpened         // String (subject slug)
prepmate:v1:analytics         // Array<Event> (pruned)
prepmate:v1:streak            // Object {count, lastDate}
prepmate:v1:cache:subject:<slug>  // Stringified subject JSON (versioned)
prepmate:v1:session:active    // Serialized active session state (for resume)
prepmate:v1:migration:meta    // Object (migrationVersion, lastMigratedAt)
Detailed shapes (conceptual)

settings (object)

themeIntensity: "low" | "medium" | "high"
reducedMotion: boolean
questionOrder: "sequential" | "shuffled"
immediateFeedback: boolean
timerDefaultSec: number | null
audioEnabled: boolean
analyticsOptIn: boolean
bookmark (Map value)

questionId: string
subject: string
note?: string
createdAt: number (ms)
wrongIndex entry

attempts: number
correctAttempts: number
lastAttemptAt: number (ms)
history: Array<{timestamp: number, correct: boolean, timeMs: number}>
session summary

sessionId: string
subject: string
startedAt: number
endedAt: number
questions: number
correct: number
accuracy: number (0–1)
avgTimeMs: number
seed?: string
analytics event

id, type, payload, timestamp
Persistence & write strategy

For critical state (bookmarks, wrongIndex, settings, sessions):
Write immediately but in a debounced manner: batch changes within 300–500 ms window.
Use try/catch around setItem; if QUOTA_EXCEEDED_ERR, show a graceful UI to export and clear analytics or large caches.
For ephemeral telemetry (high-frequency events), keep only in-memory and append to analytics array lazily, pruned to last N events or last 30 days.
Recovery strategy & migrations

On app start:
Read prepmate:v1:migration:meta. If missing or older than current migration version, run migrations.
Migrations should be idempotent and incremental. Keep a migrations list in source (migration v1 → v2 → ...), each migration can:
Transform data shape.
Back up pre-migration snapshot to prepmate:v1:migration:backup:<timestamp>.
Set prepmate:v1:migration:meta with new version and timestamp.
If a migration fails, roll back by restoring the backup and surface a clear user-facing message with steps to export and request troubleshooting.
Synchronization logic (multi-tab)

Preferred: BroadcastChannel channel named prepmate:v1.
Send concise delta messages like {type: "bookmark:toggle", payload: {questionId, subject}} or {type: "sync:request", key: "prepmate:v1:settings"}.
When receiving deltas, apply them locally without overwriting unrelated local edits.
Fallback: window 'storage' event.
When another tab writes to localStorage, the current tab receives event with key and newValue; parse and merge.
On focus/visibilitychange:
Re-read prepmate:v1:settings, prepmate:v1:bookmarks, prepmate:v1:wrongIndex in case changes occurred while inactive.
Conflict resolution:
For scalar/owned settings: last-write-wins.
For map-based data (bookmarks, wrongIndex): merge by key, prefer the delta with latest timestamp.
For session: only one tab should own an active session; attempts to start a session on another tab should either create a new session or prompt to resume.
Storage size & pruning

Analytics/events: prune to last 2,000 events or last 90 days (configurable). Keep summaries longer (sessions).
Cache for subject files: keep cached subject JSON only if < 5MB; otherwise avoid caching full file in localStorage and rely on in-memory cache.
Export / Import

Provide a "Download backup" which bundles all relevant keys into a single JSON file. Include a manifest and migration metadata.
Import should validate with JSON schema, present a dry-run summary, and ask the user to confirm overwriting or merging.
For privacy, documents are saved to user's filesystem and never uploaded unless user explicitly uses a cloud sync feature (future).
Security & privacy

Data stays local by default.
If a user opts into cloud sync (future), require explicit consent and a clear privacy policy.
Avoid storing sensitive personal data in plain text.
Edge cases

Storage quota reached: surface user-friendly message, offer export/clear options.
Corrupted data: if JSON.parse fails, back up raw value under prepmate:v1:corrupt:<key>:<timestamp> and reset to defaults with a prompt for restore.
Private browsing: localStorage may be limited. Fall back to in-memory warnings and suggest download.
9. Quiz Engine Architecture
The quiz engine is the app's core interactive subsystem. It must be robust, resumable, testable and performant.

Key design principles

Deterministic when needed: support seeded randomization so session order can be recreated.
Single source of truth: the QuizEngine manages the session state (reducer) and exposes controlled actions.
Persist frequently: persist minimal session state to localStorage to allow resume after reload/close.
Respect user settings (immediateFeedback, timer, order, retry policy).
Top-level responsibilities

Build question set (pool) from a subject (and optional filters / weak set).
Shuffle / order according to settings and seed.
Present questions one-by-one (or in pages if review mode).
Track per-question answer attempts, correctness, time on question.
Handle timers and pause/resume.
Mark bookmarks and flags.
Detect and record weak items.
Produce session summary and persist session record.
Core state model (conceptual)

session: {
sessionId: string,
subject: string,
questionIds: string[],
seed: string,
index: number, // current index into questionIds
answers: Record<questionId, AnswerRecord>,
startedAt: number,
pausedAt?: number,
endedAt?: number,
status: 'ready' | 'active' | 'paused' | 'finished',
config: {immediateFeedback, perQuestionTimerSec, allowRetake, randomize, maxQuestions}
}

AnswerRecord {
selected: string[] (option ids),
attempts: number,
correct: boolean,
timeMs: number,
timestamps: [{ts, correct, timeMs}]
}

Primary actions (API)

startSession({subject, questionIds, config, seed})
submitAnswer(questionId, selectedOptions)
nextQuestion()
prevQuestion()
toggleBookmark(questionId)
flagQuestion(questionId)
pauseSession()
resumeSession()
finishSession()
resumeFromPersisted(sessionState)
State management approach

Use a reducer (useReducer) inside QuizEngine component for predictable transitions and to enable unit testing.
Keep business logic (validation, scoring, weak detection) in pure utility functions (e.g., utils/quiz.ts) that the reducer calls.
Persist to prepmate:v1:session:active after each meaningful change (answer submitted, index moved, pause/resume) to minimize lost progress.
Question navigation

Standard linear navigation: next/previous. On mobile, provide swipe gestures (optional).
When randomize is enabled, the questionIds array is shuffled once at session start (seeded).
Skip behavior:
If allowSkip = true, user can skip; skipped questions are appended to the end of the queue optionally.
If timer expires and allowSkip = false, auto-mark wrong/record attempt depending on settings.
Answer validation

For single-correct MCQ: selected[0] === correct[0] → correct.
For multi-correct MCQ: treat as correct if selected set equals correct set (no partial credit by default). Future: configurable partial credit.
For fill-in questions (future): implement normalization (trim, lowercase, synonyms).
Validation is pure and returns {correct: boolean, details: optional}.
Retry system

Configurable retryPolicy:
immediateRetries: number (e.g., allow 1 immediate retry)
sessionRetries: allow re-queueing incorrect items at end of session
weakReviewTrigger: add to weakIndex after N incorrect attempts
UX rule: keep retries simple and low-friction. If immediate feedback is ON, offer "Try again" visually. Track attempts in AnswerRecord.
Randomization

Use seeded RNG for reproducibility (seed derived from session start timestamp or user-provided seed).
Shuffle algorithm: Fisher-Yates implemented in pure util, seeded.
Advanced sampling strategies (future): difficulty-stratified sampling, proportional sampling by tag.
Bookmarking

Toggle bookmark from QuestionCard; persist via StorageContext and broadcast to other tabs.
Bookmarks should be lightweight entries (questionId, subject, note).
Timer logic

Two timer modes:
perQuestionTimer (optional): countdown per question.
sessionTimer (optional): total session time limit.
Timer implementation:
Use an accurate time source (performance.now()) and compute elapsed as now - startedAt rather than relying entirely on setInterval ticks.
Update UI using requestAnimationFrame for smooth progress anims or 1s tick if lower precision suffices.
On timer expiry, call submitAnswer with selected = [] (or mark as timed out) and move according to settings.
Weak question detection (algorithm)

v1 (simple and effective):
For any question, maintain last N attempts (N=5).
If attempts >= 2 and accuracy over last N attempts < 0.6 → mark as weak.
v2 (weighted/time-decay, future):
Weighted accuracy: each attempt weighted by exp(-(now - t) / T) where T is a decay constant (e.g., 30 days).
If weightedAccuracy < threshold and attempts >= minAttempts → weak.
On detectWeak:
Add to prepmate:v1:weakSet and prepmate:v1:wrongIndex.
Signal UI to show "weak question firefly" in results and suggest review.
Scoring system

Default: accuracy = correctCount / totalAttempted
Session score displayed as percentage with friendly language (e.g., "You got 8 of 12 — nice!").
Optionally weight by difficulty for weighted score:
weight = 1 + (difficulty - 1) * 0.25
weightedScore = sum(correct * weight) / sum(weights)
Provide breakdowns: per-tag accuracy, average time per question.
Edge cases & resilience

Missing question: if a question id from saved session is not found in the subject JSON (updated dataset), skip gracefully and log to analytics.
Duplicate ids: validate JSON on load; if duplicates present, use first occurrence and warn.
Multiple answer clicks: disable options after selection when immediateFeedback is enabled (or only disable while processing).
Offline / failed fetch: if subject JSON fails to fetch, try cached prepmate:v1:cache:subject:<slug>; if absent, show helpful error UI with "Try again" and "Export current session" options.
UX considerations

Keep interface uncluttered: central question card, big tappable options, subtle progress bar.
Provide "explain later" vs "show explanation now" control (for users who prefer testing without learning immediately).
Soft warnings before destructive actions (clear session, reset progress).
Keyboard accessibility: use arrow keys to move, Enter to select, space to toggle options; ensure focus is clearly visible.
Resuming & persistence

Persist prepmate:v1:session:active every time the user submits an answer or moves index.
On app restart, if session:active exists and not finished, prompt: "Resume your last session?" with quick resume or discard.
Keep snapshots small: store only necessary state (questionIds, index, answers metadata) not entire question objects if subject cache exists.
Observability

Emit structured analytics events (if opt-in) for: session start, answer submit, timer expire, bookmark toggle, session end. Keep event schema stable for later offline analysis and debugging.
Testing & verification

Unit test pure utils: shuffling, validation logic, weak detection, scoring.
Integration tests: full quiz flows including timer expiry and resume-from-persist scenarios.
Edge-case testing: quota handling, corrupted session restore, offline resume.
10. Animation System (Framer Motion)
Philosophy

Motion should be warm, gentle, and purposeful — not flashy. Use motion to guide attention and reinforce success, not to distract.
Prioritize transform/opacity-based animations for performance.
Respect user preference for reduced motion (do not animate when prefers-reduced-motion is set).
Use a small, centralized set of motion variants to ensure consistency.
Animation primitives & naming

PageTransitions

variants: pageInitial, pageAnimate, pageExit
typical: opacity + subtle y (translateY)
timings: 400–600ms, easing: easeOutCubic
CardEntrance

variants: hidden, visible
typical: scale 0.98 → 1, opacity 0 → 1, slight rotate -1° → 0° for sticker effect
timing: 280–360ms
StickerFloat (looping)

idle: small y oscillation (-6px → 6px), small rotation oscillation (-2° → 2°)
loopDuration: 4s – 8s, smooth sine-like easing
MascotIdle / Reaction

idle: subtle breathing (scale 0.995 → 1.005) over 5–8s
praise: short hop + small glow and wave (300–700ms)
empathy/encourage: slow head-tilt + blink (600–900ms)
OptionPressFeedback

press: scale 0.98 and quick shadow increase (80–120ms)
correct: watercolor wash animation (fade-in colored overlay) + small particle burst (subtle)
incorrect: short shake (translateX -8px → 8px → 0) + red watercolor fade (200–420ms)
ProgressAnimations

progress bar: smooth width animate with spring or linear tween (300–700ms)
progress ring: stroke-dashoffset animation for circular progress
WatercolorReveal

effect: animate an SVG mask or clip-path that reveals the question card with a watercolor brush edge.
caution: animate mask transforms rather than expensive layout properties; keep resolution reasonable.
Loading & Skeletons

fade-in with shimmer; use CSS linear-gradient for shimmer for performance over heavy JS anim.
Example timing & easings (recommended)

Micro: 120–200 ms, easing: ease-out (cubic-bezier(.22,1,.36,1))
Medium: 300–450 ms, same easing
Large (decorative): 800–1200 ms, easing: ease-in-out
Implementation considerations with Framer Motion

Centralize motion variants in /src/animations/framerVariants.ts to reuse across components.
Use MotionConfig to set reduced motion behavior globally when reducedMotion setting is true.
Limit simultaneous animations; e.g., cap the number of floating stickers doing heavy motion to 3.
Prefer CSS for looping animations (keyframes) for tiny effects when possible to reduce React re-renders.
Use will-change: transform, opacity in CSS where necessary.
Animate only components that are entering/exiting or responding to events. Avoid animating large lists on every update.
Performance

Animate transforms only (translate, scale, rotate, opacity).
Avoid animating height/width/layout properties which force layout reflow.
Debounce or throttle event-triggered animations (e.g., particle bursts).
Use requestAnimationFrame for custom JS animation hooks if needed.
Monitor memory usage of mascot animation assets (SVG sprite sheets vs multiple image elements).
Emotional impact

Use motion sparingly to produce the feeling of a gentle companion and a living page:
Page transitions → "opening a notebook".
Mascot reactions → "someone cheering for you".
Small blooms/particles → "sticker placed" reward.
Avoid large celebratory confetti unless user reaches a meaningful milestone (and even then, keep it watercolor-scented and low-contrast).
Accessibility

Provide "reduced motion" toggle in Settings.
Ensure motion does not impede comprehension or cause discomfort.
Avoid flicker frequencies that may trigger photosensitive reactions.
11. Responsive Design Strategy
Mobile-first principle

Start layout for small viewports (320–420px), progressively enhance for tablet and desktop.
Use Tailwind's mobile-first utilities; set base paddings and font sizes for mobile, then scale up.
Breakpoints (suggested Tailwind defaults with some custom tokens)

sm: 640px (small tablets / large phones)
md: 768px (tablets)
lg: 1024px (laptops)
xl: 1280px (desktops)
Layouts by device

Mobile

Single-column stack: Question card > Options > Progress bar.
Sticky bottom action zone for primary action (Next, Submit).
Mascot moves to bottom corner, minimized.
Minimal side content; hide auxiliary panels behind slide-over or bottom sheet.
Tappable areas >= 44px.
Tablet

Two-column layout: left column question, right column options or notes/progress.
More real-estate for mascot and decorative stickers.
Allow expanded explanation panels.
Desktop

Centered paper canvas with max width (900–1100px).
Right-side persistent progress panel (streak, timer, notes).
Floating decorative elements off-screen edges.
Option for "notebook" layout with ring-binder visuals.
Touch interactions

Primary actions optimized for tap.
Provide swipe left/right to move between questions (optional toggle).
Long-press on option reveals "explain" or "add note" context menu on touch.
Avoid hover-only affordances; provide persistent affordances for touch.
Accessibility

Keyboard navigation:
Tab order follows logical reading order.
Arrow keys can be used in options list.
Enter / Space to select.
Focus visible and high-contrast with brand focus ring.
Screen reader:
Use semantic elements (,
/
, role="progressbar") and ARIA labels.
Announce when a new question loads via ARIA live region.
Announce feedback ("Correct" / "Incorrect") via polite live region and avoid redundant verbosity.
Color contrast:
Ensure text contrast meets WCAG AA at least; provide a high-contrast theme switch in settings.
Reduced motion:
Respect prefers-reduced-motion; provide explicit toggle in Settings.
Forms and input

Notes input and bookmark notes use textarea with autosize; preserve keyboard behavior on mobile to avoid UI jumps.
Prevent accidental keyboard dismissal; ensure viewport's visible area is respected.
Testing across devices

Test on common phone widths (iPhone SE/8, iPhone 11/12/13, Pixel), several Android devices, iPads, and typical desktops.
Use responsive design mode plus physical device testing where possible.


12. Development Phases (Roadmap) — continued
Quality & testing plan (continued)

Testing strategy overview:
Unit tests:
Frameworks: Jest + React Testing Library.
Targets: pure utilities (shuffle, validation, scoring, weak detection), reducer logic (QuizEngine reducer), and critical presentational logic (QuestionCard behaviors).
Coverage goal: 80%+ for core domain modules (quiz engine, storage helpers, migration code).
Integration tests:
Test interactions between contexts (SettingsContext / StorageContext / QuizContext) and UI components.
Scenarios: start/resume session, persistence across reload, bookmark lifecycle, wrong-index updates, import/export flows.
Tools: React Testing Library with mocked fetch for JSON files.
End-to-end (E2E):
Framework: Playwright (recommended for multi-browser coverage).
Critical flows: subject selection, full quiz session (with timer variations), results and weak-mode, bookmarks, import/export, settings change, resume session after reload.
Cross-browser: Chrome, Firefox, WebKit (Safari).
Accessibility testing:
Integrate axe-core checks into unit/integration tests and CI for pages/flows.
Manual audit checklist for keyboard navigation, screen-reader announcements, focus management.
Performance & regressions:
CI step to run Lighthouse or a headless performance audit for TTI / LCP / CLS budgets.
Bundle size checks and asset size thresholds.
CI pipeline:
GitHub Actions workflow:
On PR: lint → unit tests → integration tests → accessibility checks.
On merge/main: full test matrix + build → optional deploy to preview environment.
Add "presubmit" pre-commit hooks (lint, format).
Test data & fixtures:
Maintain small, deterministic JSON fixtures in /src/data/test-fixtures for deterministic tests.
Create generator scripts to make varied large question-set fixtures to stress-test performance.
Manual QA checklist (before major release):
Cross-device check (mobile/tablet/desktop).
Keyboard-only navigation for core flows.
Import/Export validation.
Multi-tab sync scenarios.
Storage-migration testing (old schema → new schema).
Storage quota / private browsing behavior.
Release & rollback:
Tag releases (semantic versioning).
Keep release changelog and a known-good build reference.
Deploy gating: require passing tests for deploy.
Deliverables for Phase 11 (wrap-up)

Passing CI with tests and accessibility checks.
Release candidate build and deployment to GitHub Pages staging.
Release notes and lightweight user manual for import/export and backup.
13. GITHUB PAGES DEPLOYMENT STRATEGY
High-level goals

Host a static single-page app (SPA) on GitHub Pages with fast load times and correct routing.
Ensure JSON assets are accessible and versioned.
Make deploys reproducible and automated via CI.
Routing & SPA considerations

Two recommended approaches for SPA routing on GitHub Pages:
Hash routing (recommended for simplest setup)
Use React Router's HashRouter.
Advantages: no server config needed; direct links always resolve.
UX tradeoff: URL includes #/ fragment.
Browser routing with 404 fallback (advanced)
Keep BrowserRouter and deploy a 404.html that redirects to index.html (commonly used trick).
Provide a simple fallback script in 404.html to redirect all unknown routes to the SPA entrypoint.
Slightly more complex but preserves clean URLs.
Recommendation: Start with HashRouter for simplicity. Revisit BrowserRouter after evaluating custom domain or advanced hosting options.
Vite & base path

Set Vite base to the repository path (if deploying under https://username.github.io/repo-name/) or / for GitHub Pages with project configured accordingly.
Use an environment variable (VITE_BASE or PUBLIC_URL) in CI to control base path at build time.
Ensure all asset references use relative paths or import.meta.env.BASE_URL where appropriate.
Public assets & JSON loading

Place static JSON and assets in /public (e.g., /public/data/subjects.json, /public/data/questions/*.json) — these are served as static files and do not get hashed by Vite.
Fetch subject/question files via relative URLs:
e.g., ${import.meta.env.BASE_URL}data/questions/algebra.json or simply data/questions/algebra.json depending on base config.
Cache-busting:
Because public files are not fingerprinted by the build, include a version property in the file path or manifest and update manifest when contents change (e.g., questions-algebra.v1.json), or append ?v=<version> query param in fetch calls.
For build-time generated files, Vite fingerprints them and you can import directly.
Asset handling & optimization

Optimize textures and images:
Convert heavy textures to compressed formats (WebP) and reasonable resolutions.
Use SVG for icons and mascot vector pieces.
Strip metadata and use sensible compression before committing assets.
Lazy-load non-critical assets:
Mascot animation frames, large watercolor textures, and high-res media should be lazy loaded after initial paint.
Deployment workflow

Use GitHub Actions to automate build and deploy. Workflow outline:
On push to main: run CI (lint, tests).
If tests pass, run vite build with appropriate BASE env var.
Deploy build output to GitHub Pages:
Option A: Push dist to gh-pages branch (via peaceiris/actions-gh-pages or gh-pages action).
Option B: Use GitHub Pages own deployment action (Publish Pages action) that uploads artifact to the Pages environment.
In PRs, publish preview artifacts or use a staging branch.
Use short-lived deploy previews for larger changes so stakeholders can review.
Cache and CDN considerations

GitHub Pages is a basic CDN — static files may be cached by the browser and intermediate caches.
Version static JSON / texture assets when updates are expected, using filename versioning or query parameter versioning.
For heavier scale or advanced caching control, consider moving to Netlify/Vercel later; but GH Pages suffices for initial static site.
Security & privacy

The app is purely client-side; do not commit any user data into the repo.
Ensure CORS policies are not broken by any external asset hosting.
For future cloud sync (optional paid feature), add clear privacy text and explicit user consent.
Rollback & release management

Keep a release tag for each deployed build. If a bad deploy occurs, re-deploy a previous tag's build artifacts.
Keep an artifact storage (in CI or Releases) to facilitate rollbacks.
Monitoring & observability

Client-side errors: capture uncaught exceptions and offer to persist anonymized crash reports only if the user opts in.
Monitor build size and Lighthouse metrics as part of CI to prevent regressions.
Notes on service workers / PWA

Optionally implement a lightweight service worker later for caching and offline improvements, but keep disabled in initial launch to avoid cache update pitfalls on GH Pages until fully tested.
14. FUTURE EXPANSION IDEAS
This section lists prioritized extensions with architectural notes, data impacts, and an MVP suggestion for each.

AI explanations (priority: medium)
Description: Offer optional AI-generated step-by-step explanations for questions or alternate explanations.
Constraints: No serverless LLM by default (privacy & cost). Implement as opt-in integration with user-provided API key (OpenAI or other).
Integration:
UI: "Explain with AI" button that appears only when user has configured an API key in Settings.
Data: Do not send bookmarks or personal metrics unless user opts in. Send minimal question text and options.
Storage: Store API key encrypted in localStorage (best-effort) or use session-only storage. Clearly communicate privacy.
Complexity: medium to high (requires UX for key management and usage quotas).
MVP: local API key input + a single-call explanation flow.
Spaced Repetition (SRS) / SM-2 Scheduler (priority: high)
Description: Integrate SRS to schedule future reviews for weak/learned questions.
Integration:
Data model: per-question scheduling metadata (EF, intervalDays, repetition, nextReviewAt).
Storage: new key prepmate:v1:srs.
UI: "Today’s review" queue; SRS status on question cards; optional daily reminder UI.
Complexity: medium.
MVP: Implement SM-2 algorithm with manual review queue and "Mark: Again/Hard/Good/Easy" options after each review.
PDF / Document → JSON converter (priority: low-medium)
Description: Tool to transform teacher-created PDFs into question JSON.
Implementation options:
Offline CLI (Node) for teachers to run locally and upload JSON.
Client-side Web tool using PDF.js + heuristic parsing for basic extraction (limited reliability).
Complexity: high (parsing accuracy), better as a separate tool.
MVP: an invite-only uploader for small PDF sets with manual QA workflow.
Cloud Sync & Cross-device Backup (priority: medium)
Description: Optional encrypted cloud backups and sync across devices.
Integration:
OAuth integrations (Google Drive, Dropbox), or use encrypted GitHub Gists.
Data sync via conflict-free merges: local changes merged using timestamps; provide manual conflict resolution UI.
Security: encrypt payload with user-provided passphrase (zero-knowledge option).
Complexity: high (auth, conflict resolution, privacy).
MVP: export/import via GitHub Gist (user-authenticated), or allow user to paste an encrypted JSON blob into a "Sync" area.
Multiplayer study rooms (priority: low)
Description: Live co-study sessions with shared timers and question queues.
Integration:
Real-time layer via WebRTC or server signaling.
Shared ephemeral sessions (no persistent data saved by default).
Complexity: high (networking, moderation).
MVP: "Co-study link" that synchronizes next/prev events and a shared timer.
Seasonal themes & Asset Packs (priority: low)
Description: Cosmetic seasonal themes (e.g., spring blossoms, winter warm) and sticker packs.
Integration:
Theme packs are static assets stored under /public/themes/<theme>/.
User can toggle themes in Settings.
Complexity: low.
MVP: 2–3 themed assets toggleable in Settings; persist choice.
Achievement & Habit System (priority: medium)
Description: Local-only achievements and gentle habit nudges (no aggressive gamification).
Integration:
Store achievements in localStorage (prepmate:v1:achievements).
Badges are decorative stickers that appear on the notebook.
Complexity: medium (content design).
MVP: Daily streak badge, first 10 correct answers badge, first bookmark badge.
Content marketplace / community packs (priority: long-term)
Description: Shareable, curated question packs (teacher-created) with versioning.
Integration:
Authoring tools and a vetting pipeline.
Pack metadata: license, version, preview.
Complexity: very high (moderation, copyright).
MVP: invite-only sharing via GitHub repositories or Gists.
TTS / Read-aloud & Language support (priority: medium)
Description: Use Web Speech API for read-aloud and provide localized UI text.
Integration:
Offer read-aloud toggle per question and lightweight localization framework.
Complexity: medium.
MVP: English + 1 additional language, read-aloud support via browser APIs.
Paid/Pro features (priority: business decision)
Examples:
Cloud sync
Expanded AI explanations (server-powered)
Shared classroom packs
Note: Business & privacy models must be designed—keep core app fully functional for free offline use.
For each expansion idea, include these planning notes in the backlog with estimated engineering effort, UX wireframes proposal, and data model changes before development.

15. FINAL PRODUCT EXPERIENCE
Vision statement

PrepMate should feel like opening a warm, familiar desk drawer: soft textures, gentle encouragement, and tools that make studying feel like a calm routine rather than a sprint. The product exists to reduce friction and emotional load around exam prep while improving retention through consistent, bite-sized practice.
User journey (example)

First visit
The landing page opens to a watercolor desk scene and a friendly mascot pop-in.
The user browses subject "stickies" and taps "Algebra."
A short "Quick Start" pops up with recommended 5-minute practice and a calming micro-animation as the notebook opens.
First quiz session
Questions present with large, readable text and sticker-like options.
The user answers a few questions, bookmarks one, and moves on.
Immediate feedback is optional; the user chooses to see explanations only after finishing the session.
Results & gentle celebration
A sticky badge appears ("Nice work!") and the mascot does a happy wave; results and a "Try weak review (5 Qs)" suggestion are offered.
Daily ritual formation
On subsequent days, the user returns to the "Today" quick queue. A subtle streak indicator and new sticker unlock keep the flow satisfying but never pressuring.
Long-term retention
Weak question detection surfaces a small daily review queue powered by SRS. The user sees clear progress over time presented as friendly annotations rather than raw charts.
What makes PrepMate memorable

Aesthetic cohesion: watercolor textures, soft palette, and sticker metaphors create a distinct identity that stands out from sterile EdTech dashboards.
Mascot micro-interactions: the companion provides context-aware, short supportive messages and animations that feel personal.
Privacy-first, offline-first experience: student data remains on-device by default — users can trust the app.
Low cognitive friction: large tappable options, optional timers, and minimal modes encourage repeated brief sessions rather than marathon studying.
Delightful small rewards: stickers, local achievements, and seasonal themes reward consistency without the anxiety of competitive gamification.
Why students return daily

Rituals: a low-barrier "5-minute practice" encourages daily returns.
Visible progress: small wins and a gentle streak indicator provide motivation.
Novelty: seasonal themes, sticker packs, and a living mascot keep the interface fresh.
Practical value: quick weak-question remediation and fast quizzes create measurable improvement, encouraging continued use.
Success metrics (initial product)

Engagement:
Daily active users (DAU) / monthly active users (MAU) ratio (target > 20% initially).
Average session length (aim for 5–15 minutes).
Sessions per user per week (target 3+).
Retention:
7-day retention (target 20–30% initial).
Weekly returning users for "Today’s review" (higher retention indicates habit formation).
Quality:
User feedback / NPS for trust & delight.
Accessibility compliance score (Axe results).
Performance:
Lighthouse: LCP < 2.5s on 4G, TTI low, CLS stable.
Appendix: Quick References (colors, keys, JSON samples)
Design tokens (recommended Tailwind variables / CSS variables)

Color palette (examples)

Token	Name	Hex / RGBA	Use
--color-paper	Paper	#FFF9F6	Main card background
--color-primary	Cozy Blue	#7FB6FF	Primary CTA / accents
--color-primary-50	Mist Blue	#E6F2FF	Soft background wash
--color-secondary	Peach Blush	#FFD6D1	Highlight / sticker
--color-accent	Sage	#C6EFD6	Success / badges
--color-neutral	Warm Gray	#BFB6B0	Muted text
--color-shadow	Shadow	rgba(122,107,95,0.12)	Card shadows
Typography

Display / decorative: "Patrick Hand" or local fallback (for headings/logo)
UI / body: "Inter" or "Nunito"
Sizes: base 16px (1rem); small 0.875rem; H1 ≈ 2rem; H2 ≈ 1.5rem
LocalStorage keys (prefix = prepmate:v1)

prepmate:v1:settings — user preferences
prepmate:v1:bookmarks — map of bookmarked questions
prepmate:v1:wrongIndex — per-question attempt history & weak metadata
prepmate:v1:weakSet — list of flagged weak question ids
prepmate:v1:sessions — historical session summaries
prepmate:v1:session:active — serialized active session state
prepmate:v1:lastOpened — last opened subject slug
prepmate:v1:analytics — (opt-in) event logs (pruned)
prepmate:v1:cache:subject: — optional cached copy of subject JSON
prepmate:v1:migration:meta — migration metadata
Sample subjects.json (manifest)

json
Copy
[
  {
    "slug": "algebra",
    "title": "Algebra",
    "description": "Core algebra: equations, inequalities, polynomials",
    "icon": "/assets/icons/algebra.svg",
    "color": "#FFD6D1",
    "questionsFile": "/data/questions/algebra.json",
    "version": "1.0",
    "count": 124,
    "tags": ["math", "algebra", "equations"]
  },
  {
    "slug": "biology",
    "title": "Biology",
    "description": "Cell structure, genetics, ecology basics",
    "icon": "/assets/icons/biology.svg",
    "color": "#C6EFD6",
    "questionsFile": "/data/questions/biology.json",
    "version": "1.0",
    "count": 98,
    "tags": ["science", "bio"]
  }
]
Sample MCQ entry (questions file)

json
Copy
{
  "id": "alg-0001",
  "type": "mcq",
  "question": "Solve for x: 2x + 3 = 7",
  "options": [
    { "id": "a", "text": "1" },
    { "id": "b", "text": "2" },
    { "id": "c", "text": "3" },
    { "id": "d", "text": "4" }
  ],
  "correct": ["b"],
  "explanation": "Subtract 3 from both sides: 2x = 4, then divide by 2, x = 2.",
  "difficulty": 1,
  "tags": ["linear-equations", "algebra"],
  "media": null,
  "createdAt": "2024-03-01"
}
Sample localStorage bookmark item (bookmarks stored as map)

json
Copy
{
  "alg-0001": {
    "questionId": "alg-0001",
    "subject": "algebra",
    "note": "Remember to re-check algebraic steps",
    "createdAt": 1680000000000
  }
}
Sample wrongIndex entry

json
Copy
{
  "alg-0001": {
    "attempts": 3,
    "correctAttempts": 0,
    "lastAttemptAt": 1680123456789,
    "history": [
      { "timestamp": 1680000010000, "correct": false, "timeMs": 15000 },
      { "timestamp": 1680050010000, "correct": false, "timeMs": 12000 },
      { "timestamp": 1680123456789, "correct": false, "timeMs": 18000 }
    ]
  }
}
Framer Motion variant snippets (reference)

Keep a small, centralized set of named variants in /src/animations/framerVariants.ts such as:
page: { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 } }
card: { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 } }
Respect reducedMotion flag to return non-animated defaults.
Performance budgets (initial)

First Contentful Paint (FCP): < 2.0s (4G)
Largest Contentful Paint (LCP): < 2.5s
Time to Interactive (TTI): < 3.5s
Bundle size: keep initial JS < 300KB gzipped if possible (prioritize code-splitting).
Open Questions & Early Decisions (to finalize before heavy dev)

Routing strategy: HashRouter (fast) vs BrowserRouter + 404 fallback (cleaner URLs).
Mascot design: choose mascot (hedgehog vs otter vs cat) and finalize art style and number of animations for v1.
Data versioning policy for subject/question JSON (file-name vs manifest version field + cache-busting).
SRS algorithm specifics: SM-2 vs simplified Leitner; choose before building SRS storage.
Export/import format: single JSON bundle vs zipped assets + JSON metadata.
Cloud sync / AI features gating: require opt-in and clear privacy policy; decide whether to support user-provided API keys or hosted backend (cost implications).
Risks & mitigations

Risk: localStorage quota exhaustion (heavy caches or many sessions).
Mitigation: prune analytics, limit cache size, provide export/clear UI.
Risk: inconsistent data when updating static JSON files (new versions).
Mitigation: include version in manifest and check for mismatch; provide graceful handling and migration UI.
Risk: animation/performance regressions on low-end devices.
Mitigation: respect prefers-reduced-motion; provide minimal theme mode and test on low-end devices.
Risk: reliance on GH Pages routing limitations.
Mitigation: use HashRouter initially; consider migration to Netlify/Vercel if later needed.
Concluding notes

This plan favors a privacy-first, delightful UX for learners while keeping the architecture simple and static-friendly. The trade-offs (no backend at v1) simplify deployment and reduce maintenance while offering a clear path to future improvments (SRS, cloud sync, AI extras).
Next steps (after approval of this plan):
Finalize a minimal visual style guide (font + color tokens).
Produce assets for a single mascot with a small animation set.
Create the initial subjects.json and two subject question files as canonical test fixtures.
Scaffold repository with Vite + Tailwind + Framer Motion and CI.
End of implementation_plan.md