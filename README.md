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
- Edit the memory scenes in `memories` inside `main.js`.
- Drop your MP3 files into `assets/music` and your track icon PNG/JPG files into `assets/music/icons`.
- Edit the floating playlist entries in `main.js` if you want different filenames, song titles, artist names, or icon paths.
- The gallery now uses plain converted photo assets in `assets/gallery`.
- To swap in different gallery photos later, add new JPG/PNG files to `assets/gallery` and update the `photo` paths in `memories` inside `main.js`.

## Layout Flow

- The home scene is a full-screen golden retriever hero.
- Use the home menu buttons to jump into the gallery or message.
- The gallery alternates image placement left and right with text on the opposite side, and every frame reacts to the page-level mouse position.
- The message reveal sits at the end of the story flow.

## Assets

- The golden retriever model is stored locally at `assets/low poly dog 3d model.glb`.
- The seal model is stored locally at `assets/yuki.glb`.
- Gallery photos live in `assets/gallery`.
- Music files should go in `assets/music`.
- Track icons should go in `assets/music/icons`.
- Source and license notes are in `ASSET_CREDITS.md`.
