# YourJobFirst MVP

This repository contains a simple prototype for the **YourJobFirst** application (also called "Swipehire").
It is a front-end only demo written in plain HTML, CSS, and JavaScript.

## Launching the app

1. Clone this repository.
2. Install the development dependency for the local server:
   ```bash
   npm install
   ```
3. Start the demo with:
   ```bash
   npm start
   ```
   This serves the site at `http://localhost:8080`.

If you prefer not to use `npm`, you can simply open `index.html` in your browser.
All code is static and does not require a backend.

## Project structure

- `index.html` – Landing page with a quick introduction and a link to job cards.
- `jobs.html` – Sample job cards with a like/dislike interaction.
- `style.css` – Basic styling shared across pages.
- `script.js` – Minimal logic for navigating job cards.

This prototype demonstrates the core user flow for the MVP without a backend or user authentication.
