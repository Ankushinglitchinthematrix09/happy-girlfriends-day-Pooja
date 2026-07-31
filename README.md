# happy-girlfriends-day 💌

A little multi-section site for Pooja: a wax-sealed envelope that
opens into a love letter, a photo album, a "little details" grid, a
bouquet of reasons, and a closing note — each section ends with a
little pill button that jumps down to the next one, just like the
screenshots this was built from.

## Files

```
index.html         the page (all sections + jump buttons)
style.css           all the styling (colors, fonts, the envelope animation)
script.js           behavior — gallery, reasons, song player, scroll reveal
config.js           👈 EDIT THIS ONE — every word on the site lives here
assets/song.mp3     put your song here (see step 2)
assets/photos/      put your real photos here (see step 3)
```

## 1. Personalize it

Open `config.js` and change the text. `herName` is already set to
`"Pooja"`, `petNameLine` is `"i love you my rasmalai 🍮💗"`, and the
closing letter already says it too — edit those strings directly if
you want to change the wording. This is the only file you need to
touch for text. Save, then open `index.html` in a browser to preview.

## 2. Add her favourite song

1. Get an mp3 of the song and rename it `song.mp3`.
2. Drop it into the `assets/` folder (replacing nothing — the folder
   is empty by default).
3. In `config.js`, set `songTitle` / `songSubtitle` to whatever you
   like, and edit `songQuote` to a little lyric or line from the song
   (shown under the player). Leave `songTitle: ""` to hide the whole
   card.

## 3. Add real photos (so THEY show up for her, on her phone too)

The upload box under "our moments" still works for quick local
testing, but anything uploaded that way is saved only in *your*
browser — it won't appear when Pooja opens the link on her own phone.

To ship real photos with the site:
1. Put your image files in `assets/photos/` (e.g. `photo1.jpg`,
   `photo2.jpg`, …).
2. In `config.js`, fill in the `photos` array:
   ```js
   photos: [
     { src: "assets/photos/photo1.jpg", caption: "our first date 🍮" },
     { src: "assets/photos/photo2.jpg", caption: "that trip we took" },
   ],
   ```
3. Save. These now show in the photo stack, the little thumbnail row,
   and the 3-photo preview strip near the top of the site — for
   anyone who opens the link, no upload needed.

## 4. Put it on GitHub + make it live (GitHub Pages)

```bash
# from inside this folder
git init
git add .
git commit -m "happy girlfriend's day site"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

Then on GitHub:
1. Go to your repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a
   branch`, branch `main`, folder `/ (root)`.
3. Save. GitHub gives you a link like
   `https://<your-username>.github.io/<repo-name>/` within a minute
   or two — that's the link you send her.

No build step, no dependencies — it's plain HTML/CSS/JS, so it works
as-is on GitHub Pages, Netlify, Vercel, or just opened locally.
