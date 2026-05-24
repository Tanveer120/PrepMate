# 🎨 PrepMate

> *A cozy kawaii watercolor-style exam preparation platform.*

PrepMate is a privacy-first, fully static web application designed to act as a gentle, non-judgmental study companion. Inspired by Japanese stationery, watercolor art, and cozy study spaces, the app replaces stressful metrics and harsh gamification with warmth, encouragement, and a lovely mascot.

## 🌟 Features

*   **Fully Static & Private:** No backend, no login, no tracking. All your progress, bookmarks, and settings are saved locally in your browser's `localStorage`.
*   **Subject Notebooks:** Easily select subjects from your digital desk.
*   **Cozy Quiz Engine:** Multiple-choice questions with gentle feedback, watercolor highlights, and soft animations.
*   **Mascot Companion:** A tiny companion cheers you on and offers empathy when you get a question wrong.
*   **Bookmarks:** Save tricky questions and review them later.
*   **Settings & Privacy:** Easily clear your local data, toggle reduced motion, or change the theme's warmth.

## 🛠 Tech Stack

*   React 18
*   Vite
*   Tailwind CSS (v4)
*   Framer Motion
*   React Router (HashRouter)
*   Lucide Icons

## 🚀 Getting Started

### Prerequisites

*   Node.js v18 or higher

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/PrepMate.git
    cd PrepMate
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open `http://localhost:5173` in your browser.

## 📂 Adding Content

Adding content to PrepMate requires exactly **zero code changes**.

1.  **Add Questions:** Create a new JSON file (e.g., `history.json`) and drop it into `public/data/mcqs/`. Follow the format of `algebra.json`.
2.  **Update Manifest:** Open `public/data/subjects.json` and add an entry for your new subject, pointing `questionsFile` to your new JSON file.

That's it! The app will automatically discover and load the new subject.

## 🚢 Deployment

PrepMate is designed to be hosted seamlessly on GitHub Pages. 
A GitHub Actions workflow is provided in `.github/workflows/deploy.yml`. 
Simply push to the `main` branch, and the workflow will build and deploy the app to GitHub Pages.

## 🎨 Design Philosophy

PrepMate strictly adheres to its foundational design documents:
*   `moodboard.md`: Emotional and visual inspiration.
*   `art_direction.md`: Rules for illustrations, texture, and spacing.
*   `design_tokens.md`: The core numerical values that drive the UI.
*   `implementation_plan.md`: The architectural roadmap.

*PrepMate: Because studying should feel like a warm cup of tea.*
