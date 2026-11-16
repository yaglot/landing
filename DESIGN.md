# Yaglot Design System

> Warm parchment canvas, terracotta accent, Noto typography, approachable human tone.


## 0. Doodle redesign (November 2026)

The site now uses a hand-drawn, felt-tip doodle style. Where this section and the older sections below disagree, this section wins.

**Illustrations** (`images/illustrations/`, all SVG, made with rough.js)
- Wobbly brown ink outlines (`#3a2f2a`) with scribbled hachure fills over flat colour, on cream paper
- Illustration palette: sky `#d6eaf5`, sea `#a9d2e6`, leaf green `#8cc084`, deep green `#5a9a5f`, sunny yellow `#f6c453`, persimmon `#d9573b`, orange `#ef9a4a`, sand ground `#eadcbc`, navy night `#2d3561`
- Taiwan scenes:
  - Hero panorama: mountains, temple with lanterns, high-speed train, Taipei 101, two hikers, a parked light-blue scooter centred under the temple (clear of the railway)
  - Taiwan map: compass with 'N', heart on Miaoli, Taipei 101, Jiufen lanterns, Turtle Island, Taoyuan Airport plane, Gaomei wind turbines, Taroko Gorge, Sun Moon Lake, Alishan train, Tainan temple, Lotus Pond pagodas, Taitung balloon, Kenting lighthouse, plus Penghu, Green Island and Orchid Island
  - Night market (waitlist postcard): sky lanterns, moon, three stalls with food at realistic sizes (地瓜球, 珍珠奶茶, 臭豆腐)
  - Kenting beach (construction page): sandcastle, palms with ringed trunks, red-and-white striped umbrella, lighthouse on a complete hill, starfish and shell; shown in full on phones (not cropped)
- Cartoon people in side-on, active poses (walking, pointing, kneeling, lifting), not stick figures; every person looks different (hair, clothes, skin tone, age), never repeated across pictures
- Doodle star, bell and three monkeys replace the emoji GIFs; the monkeys are layered (face, expression, hands) and animated with CSS to match the original emoji
- Taipei 101 appears only in the hero and as a landmark on the map
- Drawings must not touch or overlap other lines or picture edges at any screen size

**Surfaces and shapes**
- Hero background sky `#d6eaf5`; paper `#fffaf0`; sand section `#efe7d6`
- Cards and buttons: 2px ink border, wobbly radius (`18px 22px 16px 24px / 22px 16px 24px 18px`), chunky ink shadow (`0 5px 0 0` ink), slight tilt (no more than 0.5° on text cards)
- Wavy SVG edges between sections; squiggle under headings; postcard-style waitlist with stamp
- Banner: soft sand stripes (`#eadcbc` / `#e2d1ab`), warm grey text `#57534e`, terracotta pulsing dot; text "We're currently operating in stealth mode, building our first course in Mandarin. Coming soon!"; stays at the top while scrolling on screens wider than 760px (where it fits on one line), scrolls away below that

**Phrase cards**: dark-outlined cards floating in the hero sky band (desktop) or grouped above the picture (below 1024px); characters in terracotta, pinyin in olive `#5f7146`.
- Desktop: the hero picture height follows the screen width (`max(420px, 29vw + 215px)`) so the cards always sit just above the mountains
- Below 1024px: cards grouped with 30px between rows and 24px between cards, 44px space above; picture shown at 9:4

**Text and small details**
- Hero subtitle 26px (20px on phones); doodle star 42px (32px on phones); bell beside the waitlist heading 50px (40px on phones)
- Buttons read 'Join the waitlist' (sentence case)
- Footer headings light terracotta `#e8a387` (link hover the same) on near-black
- Footer copyright year fills in automatically

**Logo**
- Oracle bone tree symbol (甲骨文) beside the name 'Yaglot' in Noto Serif Bold (700), both terracotta `#b85c38`
- The symbol's lines are 1.3 × thicker than the original drawing so it holds its own next to the bold name
- Icon shape: a terracotta circle with the cream symbol, used for the browser tab icons (`favicon.ico`, `favicon.svg`, `favicon-96x96.png`) and `images/brand/yaglot_circle.png` (the circle on a transparent background)
- Phone home-screen and app icons (`apple-touch-icon.png`, `web-app-manifest-*.png`) stay full squares, because phones cut them into their own rounded or circle shape
- Social preview picture: `images/brand/yaglot_circle.png` (the same circle logo; no separate preview file)
- The nine logo files, all in `images/brand/` (names use underscores, `_`):
  - `yaglot_name_with_symbol.png`: terracotta symbol and name, transparent (the header logo)
  - `yaglot_circle.png`: the circle on its own, transparent
  - `yaglot_circle_with_name.png`: circle and terracotta name, transparent
  - `yaglot_name_on_terracotta_with_symbol.png`: cream symbol and name on terracotta
  - `yaglot_name_on_terracotta.png`: cream name on terracotta
  - `yaglot_name.png`: terracotta name only, transparent
  - `yaglot_symbol.png`: terracotta symbol only, transparent
  - `yaglot_symbol_cream.png`: cream symbol only, transparent (for dark backgrounds)
  - `yaglot_logo.png`: cream symbol on a full terracotta square, no transparency (use for LinkedIn and other social media profile pictures; apps show transparent areas as white or black)
- Only these nine are logos. Any logo file added, changed, renamed or removed must be reported to the founder, with the updated files, so their local logo folder stays in step

**Titles and addresses** (full details in the 'yaglot.com: behind the scenes' document)
- Home tab and social preview title: 'Languages, reimagined!'; construction page: 'Yaglot is coming soon!'
- Pages live at yaglot.com and yaglot.com/construction (construction.html); 404.html forwards old addresses

---

## 1. Visual Identity

Yaglot's visual identity is warm, editorial, and approachable — a literary salon reimagined for language learning. The parchment-toned canvas (`#f5f4ed`) evokes paper rather than a digital surface. The terracotta accent anchors the brand with earthy warmth. The three monkeys (see/hear/speak) serve as the core visual motif. Chunky Duolingo-style shadows keep the tone playful rather than serious.

**Key characteristics:**
- Warm parchment canvas (`#f5f4ed`) — never pure white
- Terracotta brand accent (`#b85c38`), also the logo and name colour — earthy, un-tech
- Noto Serif for headings, Noto Sans for body and UI
- Three monkeys motif (see, hear, speak)
- Chunky bottom shadows on interactive elements (Duolingo-inspired)
- Sticky nav, blur backdrop

---

## 2. Colour Palette

All values are hex. Every neutral carries a warm yellow-brown undertone — no cool blue-grays.

### Surface and background

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f5f4ed` | Page canvas (warm parchment) |
| `--surface` | `#faf9f5` | Cards, elevated containers |
| `--surface-warm` | `#e8e6dc` | Button backgrounds, interactive surfaces |

### Foreground and text

| Token | Value | Usage |
|---|---|---|
| `--fg` | `#141413` | Primary text (warm near-black) |
| `--fg-2` | `#3d3d3a` | Dark links, emphasised secondary text |
| `--muted` | `#5e5d59` | Secondary body text (olive-gray) |
| `--meta` | `#87867f` | Tertiary text, footnotes, metadata |

### Accent and semantic

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#b85c38` | Primary CTA, key brand moments |
| `--accent-on` | `#faf9f5` | Text on terracotta backgrounds |
| `--accent-hover` | `#9b4d2f` | Hover state for accent |
| `--accent-active` | `#833f26` | Active/pressed state |
| `--danger` | `#b53333` | Error states (warm red) |

### Borders

| Token | Value | Usage |
|---|---|---|
| `--border` | `#f0eee6` | Standard light-theme border |
| `--border-soft` | `#e8e6dc` | Section dividers, emphasised borders |

---

## 3. Typography

### Font families

| Token | Font | Weight loaded | Usage |
|---|---|---|---|
| `--font-display` | Noto Serif | 400, 500, 600, 700 | All headings |
| `--font-body` | Noto Sans | 400, 700 | Body text, UI, buttons, forms |
| `--font-mono` | Noto Sans Mono | 400 | Code |
| Chinese TC | Noto Sans TC | 400 | Traditional Chinese characters |
| Chinese SC | Noto Sans SC | 400 | Simplified Chinese characters |

### Weight defaults

- Headings: **500** (`--font-weight-display: 500`)
- Body: **400** (`--font-weight-body: 400`)

### Type scale

| Token | Size | Usage |
|---|---|---|
| `--text-xs` | 10px | *(unused — reserved)* |
| `--text-sm` | 14px | Labels, metadata, footnotes, captions |
| `--text-base` | 16px | Body text, buttons, nav links |
| `--text-lg` | 20px | Lead paragraphs, feature descriptions |
| `--text-xl` | 25px | *(unused — reserved)* |
| `--text-2xl` | 32px | h3, card titles |
| `--text-3xl` | 52px | h2, section titles |
| `--text-4xl` | 64px | h1, hero headline |

### Line heights

- Headings: `1.10–1.20` (tight)
- Body: `1.60` (relaxed, book-like)

### Principles

- Serif for authority (headings), sans for utility (body/UI)
- Single weight (500) for all headings — consistent voice
- Relaxed body leading (`1.60`) for literary reading feel
- Chinese characters use Noto Sans TC/SC at 400 weight, 44px in hero cards

---

## 4. Spacing

Base unit: **8px**.

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |

Section vertical spacing: `96px` on desktop, `60px` on tablet, `48px` on phone.

Container max-width: `1200px`, centred. Gutter: `24px` desktop, `16px` tablet, `12px` phone.

---

## 5. Border radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 8px | Standard buttons, cards |
| `--radius-md` | 12px | Primary buttons, inputs, nav |
| `--radius-lg` | 16px | Featured containers, hero visuals |

No sharp corners — softness is core to the identity.

---

## 6. Elevation and shadows

| Token | Value | Usage |
|---|---|---|
| `--elev-flat` | `none` | Default state |
| `--elev-ring` | `0 0 0 1px var(--border)` | Border-like halo for interactive cards |
| `--elev-raised` | `rgba(0,0,0,0.05) 0px 4px 24px` | Whisper-soft elevation |
| `--elev-chunky` | `0 4px 0 0 var(--border-soft)` | Duolingo-style chunky shadow |
| `--elev-chunky-accent` | `0 4px 0 0 color-mix(...)` | Chunky shadow in accent colour |

The chunky bottom shadows on buttons and interactive elements are the signature Yaglot flourish — they create a playful, tactile press-down effect on click (`translateY(3px)` + shadow reduction).

---

## 7. Components

### Buttons

**Primary CTA:**
- Background: `--accent` (#b85c38)
- Text: `--accent-on` (#faf9f5)
- Radius: `--radius-md` (12px)
- Weight: 700
- Shadow: `--elev-chunky-accent`
- Hover: `translateY(3px)`, shadow shrinks
- Active: `translateY(4px)`, shadow removed

### Cards

**Feature card:**
- Background: `--surface` (#faf9f5)
- Border: `1px solid --border`
- Radius: `--radius-lg` (16px)
- Padding: 40px
- Shadow: none (flat) on default
- Hover: accent border, raised shadow, `translateY(-4px)`

**Character card (hero):**
- Background: `--bg` (#f5f4ed)
- Border: `1px solid --border`
- Radius: `--radius-md` (12px)
- Padding: 20px
- Shadow: `--elev-ring`
- Float animation infinite

### Navigation

- Sticky top nav with frosted background (`rgba(245,244,237,0.95)` + `backdrop-filter: blur`)
- Logo: left, CTA button: right
- Links hidden on mobile (< 768px)

### Forms

- Input radius: 12px
- Focus ring: `3px rgba(184,92,56,0.2)`
- Font: `--font-body`
- Submit button: same style as primary CTA
- Mobile: form stacks vertically

### Stealth banner

- Background: `#8b8c7a` (olive)
- Sticky at top, pulsing dot indicator
- Font: 14px

---

## 8. Component manifest

| Component | Selector | Key classes |
|---|---|---|
| Button primary | `button, .btn.btn-primary` | `.btn`, `.btn-primary` |
| Feature card | `.feature-card` | — |
| Character card | `.char-card` | `.char-card-1` through `.char-card-4` |
| Character unit | `.char-unit` | `.char-symbol`, `.char-pinyin` |
| Hero | `.hero` | `.hero-content`, `.hero-visual`, `.hero-visual-content` |
| Navigation | `header nav` | `.logo-link`, `.links` |
| Waitlist form | `#waitlist-form-main` | `.waitlist-inline`, `.btn-notify` |
| Stealth banner | `.stealth-banner` | `.stealth-dot` |
| Footer | `footer` | `.footer-content`, `.footer-bottom` |

---

## 9. Responsive breakpoints

| Name | Width | Key changes |
|---|---|---|
| Phone | < 480px | Stacked layout, reduced padding, 28px heading |
| Tablet | < 768px | Single column hero, hidden nav links, 60px section padding |
| Desktop | < 1024px | Hero collapses to single column (if not already) |
| Wide | 1200px+ | Full layout, max container width |

---

## 10. Motion and animation

| Animation | Duration | Element |
|---|---|---|
| Hero card float | 5–6s ease-in-out | `.char-card-*` |
| Bell ring | 2s ease-in-out infinite | `.bell-animate` |
| Star pop | 2s ease-in-out infinite | Hero star gif |
| Hover lift | 0.3s | `.feature-card` |
| Button press | 0.15s | `.btn-primary` |
| Page load (construction) | 0.6s ease | `.uc-heading`, `.uc-desc` |

---

## 11. Core layout patterns

### Section alternation
Light sections (`--surface` to `--bg` gradient) alternating with dark sections (`--fg` background, white text) creates chapter-like reading rhythm.

### Hero layout
Two-column grid (1fr 1fr) on desktop. Left column: headline + lead + CTA. Right column: floating character cards in a relative container. On tablet/phone: single column, hero visual below text.

### Features grid
Auto-fit grid with minimum 320px columns, `48px` gap. Cards hover to accent border with lift.

### Footer grid
Auto-fit grid with minimum 250px columns. Dark background (`--fg`), warm silver text (`#b0aea5`). Four columns: About, Products, Help, Social.

---

## 12. Content guidelines

- **Voice**: Warm, encouraging, straightforward. Good for a secondary school student to understand.
- **Tone**: Approachable and human — not cold or techy.
- **Dashes**: Do NOT use m-dashes (—). Use single dash or rephrase.
- **Quotes**: Single quotation marks for quotes, double for quotes within quotes.
- **Oxford commas**: Do NOT use.
- **Placeholders**: Short honest placeholders (—, grey block, labelled stub) instead of invented metrics ("10× faster").
- **Avoid**: Lorem ipsum, generic emoji icon rows, left-border accent cards, purple gradients, warm beige page washes not justified by brand.
