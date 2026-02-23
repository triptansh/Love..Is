# Happy Birthday, Riddhi 🌷
## Production-Ready Romantic Interactive Birthday Website

Built with: **Next.js 14** · **TypeScript** · **Tailwind CSS** · **Framer Motion** · **GSAP** · **Howler.js**

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

---

## 📦 Production Build

```bash
npm run build
npm run start
```

Or for static export (Vercel/Netlify):
```bash
npm run build
# Outputs to /out folder — ready to deploy
```

---

## 🎵 Adding Background Music

Place your piano audio file at:
```
/public/audio/piano.mp3
```

Recommended: A soft instrumental piano loop (~3-5 min, loopable).
Free sources: [Pixabay Music](https://pixabay.com/music/), [Free Music Archive](https://freemusicarchive.org)

Music will **NOT autoplay** — it unlocks on first user interaction (tap/click).

---

## ✏️ Editing Slide Content

All slide text lives in one file:
```
/data/slides.ts
```

Each slide has a clear interface. Example:
```typescript
{
  id: 5,
  type: 'hindi-poem',
  lines: [
    'Tumhari narazgi bhi tumhari tarah pyaari hai,',
    'kyunki usmein bhi sirf ehsaas hota hai.',
  ],
  caption: 'I never thought you were too much.',
}
```

**No component changes needed** — just edit the text in `slides.ts`.

---

## 🏗️ Project Structure

```
riddhi-birthday/
├── app/
│   ├── globals.css          ← All custom styles, animations
│   ├── layout.tsx           ← Root layout with Google Fonts
│   └── page.tsx             ← Main orchestrator page
│
├── components/
│   ├── AnimatedText.tsx     ← Stagger + line reveal text
│   ├── CourtSceneFinal.tsx  ← Slide 20: Court of Love
│   ├── ConfettiAnimation.tsx← canvas-confetti integration
│   ├── CustomCursor.tsx     ← Soft rose cursor (desktop)
│   ├── FloatingParticles.tsx← Perf-optimized CSS particles
│   ├── HeartPopInteraction.tsx ← 3D heart tap with burst
│   ├── MemoryCardModal.tsx  ← Spring-animated memory cards
│   ├── MovingButton.tsx     ← Physics evasive "No" button
│   ├── ProgressBar.tsx      ← Progress bar + audio UI
│   ├── SlideWrapper.tsx     ← Framer Motion slide transitions
│   └── slides/
│       ├── SlideFactory.tsx     ← Maps slide type → renderer
│       └── SlideRenderers.tsx   ← All slide layout components
│
├── data/
│   └── slides.ts            ← ✏️  ALL CONTENT LIVES HERE
│
├── hooks/
│   ├── useAudio.ts          ← Howler.js audio management
│   └── useSlideNavigation.ts← Slide state + keyboard nav
│
├── lib/
│   └── utils.ts             ← cn(), clamp(), etc.
│
├── public/
│   └── audio/
│       └── piano.mp3        ← 🎵 Add your audio here
│
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## ☁️ Deploy to Vercel

### Option A — Vercel CLI (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Click Deploy (no env vars needed)

### Option C — Static Export
Already configured in `next.config.js` with `output: 'export'`.
```bash
npm run build
# Upload /out folder to Netlify, GitHub Pages, or any static host
```

---

## 🎨 Customization

### Change Color Theme
Edit CSS variables in `app/globals.css`:
```css
/* Rose/Pink tones */
--rose:       #C4687A;
--rose-deep:  #A84E62;
--blush:      #F2D7D9;
```

### Change Fonts
In `app/layout.tsx`, update the Google Fonts link.
In `tailwind.config.ts`, update the `fontFamily` section.

### Add More Slides
In `data/slides.ts`, add a new object to the `SLIDES` array.
Pick from existing types or add a new `type` in `SlideRenderers.tsx`.

### Memory Card Modal Text
Edit `memoryCards[].modalBody` in `data/slides.ts` — the placeholder text is yours to fill.

---

## ⌨️ Navigation

| Action | Result |
|--------|--------|
| Click / Tap | Next slide |
| Swipe Up | Next slide |
| Swipe Down | Previous slide |
| ← / → Arrow Keys | Navigate |
| Space | Next slide |

---

## ✅ Checklist Before Sharing

- [ ] Added `piano.mp3` to `/public/audio/`
- [ ] Filled in Memory Card modal texts in `data/slides.ts`
- [ ] Tested on mobile (Chrome + Safari)
- [ ] Deployed to Vercel / shared link

---

*Built with love. 🌷*
