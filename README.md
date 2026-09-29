# Sawan Cinematographer — Website Guide

This is your website. You do **not** need to know how to code to update it.
Everything you'll change lives in plain text files, and every important
spot is marked with a comment like `<!-- CHANGE THIS HERE -->`.

## What's in this folder

```
sawan-cinematography/
├── index.html              ← the page content (text, links, sections)
├── style.css                ← colors, fonts, spacing (you rarely need this)
├── script.js                 ← makes things interactive (you don't need to touch this)
├── README.md                  ← this guide
└── assets/
    ├── images/
    │   ├── hero.jpg             ← big background photo on the homepage
    │   ├── profile.jpg          ← your portrait in the "About Me" section
    │   └── portfolio/
    │       ├── wedding-01.jpg, wedding-02.jpg, wedding-03.jpg   ← portfolio photos
    │       └── ig-01.jpg … ig-06.jpg                              ← Instagram grid photos
    └── videos/
        ├── hero.mp4 (optional)      ← background video instead of hero.jpg
        └── portfolio/
            └── video-01.mp4, video-02.mp4   ← portfolio video clips
```

Open `index.html` in any text editor (Notepad, TextEdit, VS Code, etc.) to
make changes. Save the file, then refresh the page in your browser to see
the update.

**Placeholder images:** every photo currently on the site is a plain dark
placeholder generated for this template — it just shows a label like
"PORTFOLIO PHOTO 01" so you can see the layout. Replace them with your own
real photos before publishing (see below).

---

## 1. How to change your name

Open `index.html`, search for:
```html
<!-- CHANGE YOUR NAME HERE -->
```
Change the text `SAWAN` (and `CINEMATOGRAPHER` just below it) to whatever
you'd like your brand to say.

## 2. How to change the "About Me" text

Search for:
```html
<!-- CHANGE ABOUT ME TEXT HERE -->
```
Just below it are a few `<p>...</p>` paragraphs. Replace the text between
`<p>` and `</p>` with your own words. Keep the tags themselves.

## 3. How to change your WhatsApp number

Search for `CHANGE WHATSAPP NUMBER HERE` — it appears a few times (nav bar,
hero, contact section). Each one looks like:
```html
https://wa.me/917300500834?text=...
```
Replace `917300500834` with your number in international format, no `+`,
no spaces (e.g. a number `+91 98765 43210` becomes `919876543210`).

## 4. How to change your Instagram link

Search for `CHANGE INSTAGRAM LINK HERE` and `CHANGE INSTAGRAM HANDLE HERE`.
Replace the link `https://www.instagram.com/sawan_solanki_7300/` with your
own profile link, and replace the `@sawan_solanki_7300` text with your handle.

## 5. How to change your YouTube channel

Search for `CHANGE YOUTUBE LINK HERE`. Replace the link with your channel URL.

To change which videos show up in the "Watch My Films" thumbnails, search for
`CHANGE YOUTUBE VIDEO ID HERE`. Each thumbnail has:
```html
<div class="yt-thumb" data-yt="dQw4w9WgXcQ">
```
Find your video's ID from its YouTube URL — the part after `v=`. For example,
in `https://www.youtube.com/watch?v=ABC123XYZ` the ID is `ABC123XYZ`. Replace
the text inside the quotes after `data-yt=`.

## 6. How to replace the hero (homepage background) image

Put your own photo into `assets/images/` and name it exactly `hero.jpg`
(replacing the existing file). Use a wide photo, ideally landscape,
around 1920×1080px or larger, for the best quality.

**Optional — use a video instead of a photo:**
1. Add a video file named `hero.mp4` into `assets/videos/`.
2. In `index.html`, find the commented-out `<video>` block right under
   `<!-- ADD YOUR NEW PHOTO HERE -->` and remove the `<!--` and `-->`
   around it so it becomes active.
3. If `hero.mp4` is ever missing, the site automatically falls back to
   `hero.jpg`, so your site never breaks.

## 7. How to replace your profile photo

Replace `assets/images/profile.jpg` with your own portrait. A portrait
(taller than wide) around 1000×1250px works best.

## 8. How to add a new portfolio photo

1. Put your photo inside `assets/images/portfolio/`.
2. In `index.html`, find the "PORTFOLIO / MY WORK" section, and copy one
   whole photo block — from `<!-- ADD NEW PHOTO BELOW -->` down to the
   matching `</article>`. For example:

```html
<!-- ADD NEW PHOTO BELOW -->
<article class="portfolio-item" data-type="image" data-src="assets/images/portfolio/wedding-02.jpg">
  <img src="assets/images/portfolio/wedding-02.jpg" alt="Wedding photo 2" loading="lazy">
  <div class="portfolio-caption">
    <div class="cap-tag">Pre-Wedding</div>
    <div class="cap-title">Golden Hour</div>
  </div>
</article>
```

3. Paste the copy anywhere inside the `portfolio-grid` section.
4. Change every `wedding-02.jpg` in your pasted copy to your new file
   name, e.g. `my-new-photo.jpg`.
5. Change the caption text (`cap-tag` and `cap-title`) if you'd like.
6. Save the file — no other code needs to change.

## 9. How to add a new portfolio video

Same idea as photos. Put your video into `assets/videos/portfolio/`, then
copy a video block (search `<!-- ADD NEW VIDEO BELOW -->`):

```html
<!-- ADD NEW VIDEO BELOW -->
<article class="portfolio-item tall" data-type="video" data-src="assets/videos/portfolio/video-01.mp4">
  <video src="assets/videos/portfolio/video-01.mp4" muted loop playsinline preload="metadata"></video>
  <div class="play-badge"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
  <div class="portfolio-caption">
    <div class="cap-tag">Cinematic Film</div>
    <div class="cap-title">A Monsoon Wedding</div>
  </div>
</article>
```

Change `video-01.mp4` to your new file name in both places it appears, and
update the caption text. Keep video files reasonably small (compressed
MP4, under ~20MB) so the page loads quickly.

## 10. How to change your equipment

Search for `CHANGE EQUIPMENT HERE`. You'll see simple lists like:
```html
<li>Canon R6 Mark II <span>Primary</span></li>
```
Change the camera/lens name, and the small label after it (or delete the
`<span>...</span>` part if you don't want a label). Add a new line the
same way to list a new item, or delete a line to remove one.

## 11. How to change your services

Search for the "SERVICES" section. Each service looks like:
```html
<div class="service-row reveal">
  <h3>Wedding Cinematography</h3>
  <p>Cinematic coverage of your wedding day, emotions, rituals and celebrations.</p>
</div>
```
Change the `<h3>` title and the `<p>` description. Copy a whole block to
add a new service, or delete one to remove it.

---

## 12. How to publish the website on GitHub Pages

1. Create a free account at [github.com](https://github.com) if you don't
   have one.
2. Click **New repository**, name it anything (e.g. `sawan-cinematography`),
   and set it to **Public**.
3. On the new repository page, click **uploading an existing file** and
   drag in every file and folder from this project (`index.html`,
   `style.css`, `script.js`, and the whole `assets` folder).
4. Click **Commit changes**.
5. Go to the repository's **Settings** tab → **Pages** (in the left menu).
6. Under "Build and deployment", set **Source** to **Deploy from a branch**,
   choose the `main` branch and the `/ (root)` folder, then click **Save**.
7. Wait a minute or two, then refresh the page — GitHub will show you your
   live website link (something like
   `https://yourusername.github.io/sawan-cinematography/`).

To update the site later: upload your changed files again the same way,
or use GitHub's "Edit" (pencil) button on a file to edit it directly in
the browser.

## 13. How to publish or update it on Cloudflare Pages

1. Create a free account at [pages.cloudflare.com](https://pages.cloudflare.com).
2. Click **Create a project** → **Upload assets** (or connect the GitHub
   repository you made above, if you'd rather Cloudflare stay in sync
   with GitHub automatically).
3. If uploading directly, drag in the whole project folder (or a `.zip`
   of it) when prompted.
4. Click **Deploy site**. Cloudflare will give you a live link like
   `https://sawan-cinematography.pages.dev`.
5. To update later: if you connected GitHub, just upload new files to
   GitHub and Cloudflare updates automatically. If you uploaded directly,
   go back to your Cloudflare Pages project and upload the changed files
   again to create a new deployment.

---

## HOW TO EDIT THIS WEBSITE — BEGINNER GUIDE

| I want to change...            | Edit this file | What to search for |
|---------------------------------|-----------------|----------------------|
| My name / brand                 | `index.html`     | `CHANGE YOUR NAME HERE` |
| About Me text                   | `index.html`     | `CHANGE ABOUT ME TEXT HERE` |
| WhatsApp number                 | `index.html`     | `CHANGE WHATSAPP NUMBER HERE` |
| Instagram link/handle           | `index.html`     | `CHANGE INSTAGRAM LINK HERE` |
| YouTube link/videos             | `index.html`     | `CHANGE YOUTUBE LINK HERE` |
| Hero background photo           | replace file      | `assets/images/hero.jpg` |
| Profile photo                   | replace file      | `assets/images/profile.jpg` |
| Add a portfolio photo           | `index.html`     | `ADD NEW PHOTO BELOW` |
| Add a portfolio video           | `index.html`     | `ADD NEW VIDEO BELOW` |
| Equipment list                  | `index.html`     | `CHANGE EQUIPMENT HERE` |
| Services                        | `index.html`     | "SERVICES" section |
| Colors / fonts (optional)       | `style.css`       | `:root` at the top of the file |

You never need to edit `script.js` for everyday updates — it just makes
the menu, lightbox and animations work, and reads whatever you put in
`index.html` automatically.

If something looks broken after an edit, the most common cause is a
missing closing tag (like a `</p>` or `</article>`) — undo your last
change and try again, copying an existing block exactly and only
changing the text/filenames inside it.
