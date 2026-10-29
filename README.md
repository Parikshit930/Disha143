# A Little World for Disha ❤️
React + Vite + Framer Motion. A static site: no backend, no paid services.

1. **Install:** `npm install`
2. **Run locally:** `npm run dev`
3. **Photos:** put images in `public/images/memories/` and set each `image` path in `src/data/memories.js` (e.g. `'/images/memories/ride.jpg'`). Empty paths show the elegant empty frame.
4. **Music:** add a legally usable instrumental as `public/audio/romantic-piano.mp3` (royalty-free or licensed; no copyrighted film songs without permission). If the file is missing the site works silently and the music button simply stays quiet. Music starts only after the gate is unlocked.
5. **Password:** change `PASSWORD` and `HINT` in `src/data/proposalContent.js`.
6. **Letter / promise cards / answers:** edit `src/data/proposalContent.js`. Scene wording that is not there lives in `src/scenes/Scenes.jsx`.
7. **Proposal wording:** the question and opening lines are in the `Proposal` component in `src/scenes/Scenes.jsx`; the three answer replies are in `proposalContent.js`.
8. **Build:** `npm run build` (output in `dist/`).
9. **Deploy:** Netlify — drag `dist/` onto app.netlify.com/drop, or connect the repo (build `npm run build`, publish `dist`). Vercel — import the repo; the Vite preset is auto-detected.
10. **Limits of the password:** it is a playful lock only. Anyone who inspects the page source can find it, so don't treat the site as private. Answers are shown locally and nothing is sent anywhere.
