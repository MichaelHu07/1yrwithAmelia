# Blue Skies & Soft Paws

This is a full-screen anniversary site built with plain HTML, CSS, and JavaScript.

## Open It

- Open `index.html` in a browser.
- If your browser blocks module loading from `file://`, run a small local server.

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Customize It

- Edit the letter text in `messageParagraphs` inside `main.js`.
- Edit the floating reason phrases in `reasons` inside `main.js`.
- Edit the memory scenes in `memories` inside `main.js`.
- Drop your MP3 files into `assets/music` and edit the floating playlist entries in `main.js` if you want different filenames, song titles, or artist names.

## Layout Flow

- The home scene is a full-screen golden retriever hero.
- Left click on the hero to transition into the scrollable gallery.
- The gallery alternates image placement left and right with text on the opposite side.
- The message reveal sits at the end of the story flow.

## Assets

- The golden retriever model is stored locally at `assets/golden-retriever.glb`.
- Music files should go in `assets/music`.
- Source and license notes are in `ASSET_CREDITS.md`.
