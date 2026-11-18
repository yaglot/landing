# Yaglot Design System

> Warm parchment canvas, terracotta accent, Noto typography, approachable human tone.


## 0. Doodle redesign (November 2026)

The site uses a hand-drawn, felt-tip doodle style. This section is the summary; sections 1 to 11 give the details. All of them describe the live site.

**Illustrations** (`images/illustrations/`, all SVG, made with rough.js)
- Wobbly brown ink outlines (`#3a2f2a`) with scribbled hachure fills over flat colour, on cream paper
- Illustration palette: sky `#d6eaf5`, sea `#a9d2e6`, leaf green `#8cc084`, deep green `#5a9a5f`, sunny yellow `#f6c453`, persimmon `#d9573b`, orange `#ef9a4a`, sand ground `#eadcbc`, navy night `#2d3561`
- Taiwan scenes:
  - Hero panorama: mountains, temple with lanterns, high-speed train, Taipei 101, two hikers, a parked light-blue scooter centred under the temple (clear of the railway)
  - Taiwan map: compass with 'N', heart on Miaoli, Taipei 101, Jiufen lanterns, Turtle Island, Taoyuan Airport plane, Gaomei wind turbines, Taroko Gorge, Sun Moon Lake, Alishan train, Tainan temple, Lotus Pond pagodas, Taitung balloon, Kenting lighthouse, plus Penghu, Green Island and Orchid Island
  - Night market (waitlist postcard): sky lanterns, moon, three stalls with food at realistic sizes (地瓜球, 珍珠奶茶, 臭豆腐)
  - Kenting beach (construction page): sandcastle, palms with ringed trunks, red-and-white striped umbrella, lighthouse on a complete hill, starfish and shell; shown in full on phones (not cropped)
- Cartoon people in side-on, active poses (walking, pointing, kneeling, lifting), not stick figures; every person looks different (hair, clothes, skin tone, age), never repeated across pictures
- Doodle star, bell and three monkeys (no emoji GIFs); the monkeys are layered (face, expression, hands) and animated with CSS to match the original emoji
- Taipei 101 appears only in the hero and as a landmark on the map
- Drawings must not touch or overlap other lines or picture edges at any screen size

**Surfaces and shapes**
- Hero background sky `#d6eaf5`; paper `#fffaf0`; sand section `#efe7d6`
- Cards and buttons: 2px ink border, wobbly radius (`18px 22px 16px 24px / 22px 16px 24px 18px`), chunky ink shadow (`0 5px 0 0` ink), slight tilt (no more than 0.5° on text cards)
- Wavy SVG edges between sections; squiggle under headings; postcard-style waitlist with stamp
- Banner: soft sand stripes (`#eadcbc` / `#e2d1ab`), warm grey text `#57534e`, terracotta pulsing dot; text 'We're building our first Mandarin course. Coming soon!'; stays at the top while scrolling on screens wider than 760px (where it fits on one line), scrolls away below that

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
- Icon links (in `index.html`, `construction.html` and `site.webmanifest`) end in a version tag, currently `?v=2`. Raise the number whenever an icon file changes, so browsers fetch the new icons instead of showing their saved copies
- Social preview picture: `images/social_preview.png` (1200 × 630): the logo and 'Languages, reimagined!' above the hero scene; not a logo file
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
- Pages live at yaglot.com, yaglot.com/construction (construction.html), yaglot.com/privacy (privacy.html), yaglot.com/terms (terms.html, terms and conditions), yaglot.com/contact (contact.html) and yaglot.com/faqs (faqs.html); 404.html forwards old addresses such as /privacy to the right page

---

## 1. Visual identity

Warm, playful and hand-made: a sketchbook of Taiwan. Felt-tip doodle scenes sit behind clean, flat interactive elements (buttons, cards, form) with dark ink outlines, so the whole site feels like one drawn page.

**Key characteristics**
- Cream and parchment surfaces, never pure white page backgrounds
- Terracotta (`#b85c38`) for the brand, buttons and Chinese characters
- Dark brown ink (`#3a2f2a`) outlines on cards, buttons and drawings
- Noto Serif for headings, Noto Sans for body text and UI
- Chunky ink shadows that press down on click
- Wobbly, slightly uneven corners and small tilts
- Three monkeys (see, hear, speak) on the construction page

---

## 2. Colour palette

All values are hex. Neutrals are warm (yellow-brown undertone), never cool grey.

### Surfaces

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f5f4ed` | Page background (parchment) |
| `--surface` | `#faf9f5` | Cards, postcard, phrase cards |
| `--sand` | `#efe7d6` | Features section background |
| `--sky` | `#fffaf0` | Cream paper; header background |
| Hero sky | `#d6eaf5` | Hero section background |

### Text and ink

| Token | Value | Usage |
|---|---|---|
| `--fg` | `#141413` | Headings and main text; footer background |
| `--ink` | `#3a2f2a` | Outlines and shadows |
| `--muted` | `#5e5d59` | Body paragraphs, consent line under the waitlist button |
| `--meta` | `#87867f` | Small print (copyright, privacy page date) |
| Pinyin | `#5f7146` | Pinyin under Chinese characters (olive) |
| Footer links | `#b0aea5` | Footer link text; headings and hover `#e8a387` |

### Accent

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#b85c38` | Buttons, links, characters, logo |
| `--accent-on` | `#faf9f5` | Text on terracotta |
| `--accent-hover` | `#9b4d2f` | Hover |
| `--accent-active` | `#833f26` | Pressed |

### Icon tints (feature cards)

`--tint-clay` `#fbe0d6`, `--tint-sage` `#dcedf6`, `--tint-gold` `#fbecc4`, used in turn behind the feature icons.

### Borders and dividers

- Header bottom: `2px dashed #e2d3b8`
- Postcard dividers: `#d8c9ad` dashes
- Footer divider: `1px dashed #3d3d3a`

---

## 3. Typography

### Fonts

| Font | Weights loaded | Usage |
|---|---|---|
| Noto Serif | 400, 500, 600, 700 | Headings (500); logo name (700, in the image files) |
| Noto Sans | 400, 500, 700 | Body, buttons, forms, banner |
| Noto Sans TC / SC | 400 | Chinese characters |

### Sizes

Nine text sizes: 14, 16, 18, 20, 24, 32, 40, 48, 60 (plus the hero subtitle at 26). Headings use fixed steps per screen size so a lower level is never bigger than the one above it. Anything people need to read (including the consent line, form notes, warnings and footer links) is at least 16; 14 is only for small labels. The same kind of text uses the same size on every page.

| Role | Computer (1024px+) | Tablet (769 to 1023px) | Phone (768px and below) |
|---|---|---|---|
| Main heading (hero and every page title: construction, privacy, terms, contact) | 60 | 48 | 40 |
| Section headings | 48 | 40 | 32 |
| Waitlist heading | 40 | 40 | 32 |
| Feature card titles | 24 | 24 | 24 |
| Hero subtitle | 26 | 26 | 20 |
| Lead text (map section, construction description) | 20 | 20 | 18 |
| Page text on Privacy, Terms and Contact (paragraphs, lists, contact intro, 'Or email us' line) and '← Back to the home page' on every page | 18 | 18 | 16 |
| Body text (paragraphs, feature cards, banner, consent line, form notes and warnings, footer links, construction email line) | 16 | 16 | 16 |
| Buttons, footer headings | 16 | 16 | 16 |
| Small text, only for labels people don't need to read closely ('ALMOST THERE', 'Last updated', copyright) | 14 | 14 | 14 |
| Chinese characters on phrase cards | 40 | 32 | 32 |
| Pinyin | 14 | 14 | 14 |
| Phrase-card meaning | 16 | 16 | 16 |

### Visual sizes

| Element | Computer | Phone |
|---|---|---|
| Logo height | 60 | 44 |
| Doodle star beside the subtitle | 42 | 32 |
| Bell beside the waitlist heading | 50 | 40 |
| Monkey tiles (all three equal) | 140 | 112 (88 at 480px and below) |
| Feature icon in its blob | 40 in 76 | same |
| Stamp box and heart | 64×76, 30×28 | 48×58, 24×22 |
| Squiggle under headings | 120×14 | 96×12 |
| Wavy section edges | 72 tall | 40 tall |

### Principles

- Headings at weight 500, tight line height (1.1 to 1.25)
- Body line height 1.6 (feature cards 1.65)
- Long headings use balanced wrapping so lines stay even

---

## 4. Spacing

- Container: max width 1200px, centred; side padding 24px (16px on phones)
- Sections: hero 80px top (56px on phones); focus 72px / 96px; features 24px / 64px; waitlist 24px / 112px (80px on phones)
- Spacing should always look comfortable on phones and computers; check both after any change

---

## 5. Corners

| Token | Value | Usage |
|---|---|---|
| `--wobble` | `18px 22px 16px 24px / 22px 16px 24px 18px` | Buttons, inputs, phrase cards |
| `--wobble-lg` | `28px 34px 24px 36px / 34px 24px 36px 28px` | Feature cards, postcard |

Uneven corners keep the hand-drawn feel; no sharp corners.

---

## 6. Shadows

| Token | Value | Usage |
|---|---|---|
| Button | `0 5px 0 0 var(--ink)` | Primary buttons and the waitlist button |
| Phrase cards | `0 6px 0 0 rgba(58,47,42,0.85)` | Hero cards |
| `--chunky` | `0 6px 0 0 #dccfb6` | Feature cards (12px on hover) |
| Postcard | `0 8px 0 0 rgba(58,47,42,0.85)` | Waitlist postcard |

Buttons press down on hover (`translateY(3px)`, shadow 2px) and fully on click (`translateY(5px)`, no shadow).

---

## 7. Components

### Buttons
- Terracotta background, cream text, 2px ink border, `--wobble` corners, weight 700, 16px
- One button size everywhere (header, waitlist, contact form): 52px tall on computer and tablet, 48px on phone; the waitlist email box matches the button height
- Header: logo 60px tall on computer (44px on phone) with 12px above and below; the button keeps 5px of room underneath for its shadow, so the visible space above and below is equal (14px on computer, with 13px of padding underneath; 12px on phone). The bar is 87px tall on computer and 79px on phone
- Text: 'Join the waitlist'

### Phrase cards (hero)
- Surface background, 2px ink border, `--wobble`, small tilt, float animation
- Chinese characters in terracotta, pinyin in olive, meaning in muted text

### Feature cards
- Surface background, 2px ink border, `--wobble-lg`, padding 32px 28px, tilts of -0.5°, 0.4° and -0.2°
- Icon in a blob-shaped tinted circle; lifts 6px on hover

### Header
- Sticky under the banner, cream frosted background (`rgba(255,250,240,0.94)` + blur), dashed bottom border
- Logo left (60px tall, 44px on phones), button right; the logo tilts slightly on hover and takes you back to the top

### Waitlist postcard
- Two halves: night-market picture and form; stacks on screens 1024px and below
- Dashed stamp with the bell, dashed postcard lines
- Email box: 2px ink border, `--wobble`, white, 54px tall, terracotta focus ring; spoken label 'Email address' for screen readers
- Sends each sign-up to the Google Sheet through Google Apps Script with these fields (no personal data beyond the email):
  - `email`
  - `source`: `landing` (where the form is; other sources may be added later)
  - `device`: `computer`, `tablet` or `phone` (from the browser and screen)
  - `referrer`: where the visitor came from, worked out at sign-up: the link's `utm_source` tag if it has one; the app name when the page is opened inside an app's browser (`linkedin`, `instagram`, `threads`, `facebook`, `messenger`, `x`, `tiktok`, `snapchat`, `pinterest`, `line`, `wechat`, `telegram`, `youtube`); otherwise the referring site as a short name (`google`, `x`, `youtube`, `reddit`, `bing` and so on; any other site is just its name, for example `github`, `bbc`); or `direct`
  - `language`: the browser language (for example `en-GB`, `zh-TW`)
  - `region`: the time zone (for example `Europe/London`, `Asia/Taipei`)
  - `consent`: which privacy wording the visitor saw: `privacy-v26.2` now. Versions are named privacy-vYY.N: the year's last two digits, then a count that starts at 1 each year (privacy-v26.1 was the waitlist only; privacy-v26.2 added the contact form). Make a new version only when the meaning changes (what we collect, why, who we share it with, how long we keep it, or a consent line), not for typo fixes, and record the full wording of every version in the 'Yaglot privacy notice versions' document
- Nothing is stored on the visitor's device (no cookies or browser storage), so no cookie banner is needed
- Privacy notice page: `privacy.html` at yaglot.com/privacy (the earlier /privacy-notice address forwards there), linked from the consent line and the footer 'Privacy' link; same banner, header and footer as the construction page
- Shows 'Sending…' then a thank-you message
- Empty or wrong email is not sent: a warning shows under the box in dark terracotta (`--accent-active`, 16px bold) and the box gets a terracotta outline: 'Please enter your email address.' or 'Please enter a valid email address, like name@example.com.' The warning disappears as soon as the visitor types

### Stealth banner
- Sand stripes, warm grey text, blinking terracotta dot
- Sticky above 760px wide; scrolls away at 760px and below

### Footer
- Near-black background, wavy top edge
- Four columns (two on phones), headings light terracotta, links warm silver:
  - **About us:** Our mission, Our team, Careers
  - **Products:** Yaglot Pro, Yaglot Max, For schools, For businesses
  - **Help:** Contact us, FAQs, Privacy, Terms
  - **Follow us:** each network's own coloured logo (34px, rounded square); LinkedIn blue `#0A66C2` only for now (linkedin.com/company/yaglot)
- Links go to the construction page until their pages exist (Contact us, FAQs, Privacy and Terms go to their pages)
- FAQs page: intro line ('Answers to the questions we hear most. Can't find yours? Contact us.'), then questions in five groups (About Yaglot; Launch and the waitlist; Plans and prices; Schools and businesses; Your privacy). Each question is a card that opens and closes (the same ink border, wobbly corners and chevron as the Topic dropdown); questions 18 bold, answers 18 (16 on phone). Never mention how Max works or any prices. Versions are named faqs-vYY.N (faqs-v26.1 now); record the full wording of every version in the 'Yaglot FAQs versions' document
- Company details (Yaglot Ltd, England and Wales, company number 17220926, registered office) are on the Terms page, which meets the UK requirement; the footer shows only the copyright line
- Contact page: intro line, then a form (Name, Email, Topic dropdown: General question, Feedback or a problem, Schools and businesses, Working with us, Something else; Message) with 'Send message'; a hidden trap field and a 3-second minimum stop robots; sends `form=contact`, name, email, topic, message and `consent` to the same Google Apps Script, saved in the sheet's 'contact' tab (waitlist sign-ups go to the 'waitlist' tab; the script picks each tab by name and creates it if it's missing); 'Or email us at hello@yaglot.com' underneath; Name, Email and Message must be filled in, otherwise a warning shows under each missing box ('Please enter your name.', the same email warnings as the waitlist, 'Please write your message.') and nothing is sent; the Topic dropdown uses our own arrow (a rounded ink-coloured chevron) instead of the browser's
- Add back later: Pricing (when Max has a public price), Investors (when fundraising), more social icons (as each account goes live)

---

## 8. Component manifest

| Component | Selector | Key classes |
|---|---|---|
| Banner | `.stealth-banner` | `.stealth-dot` |
| Header | `header nav` | `.logo-link`, `.logo-img`, `.btn-primary` |
| Hero | `.hero` | `.hero-text`, `.lead`, `.scene`, `.scene-art`, `.cards` |
| Phrase card | `.char-card` | `.char-card-1` to `-3`, `.char-unit`, `.char-symbol`, `.char-pinyin`, `.char-mean` |
| Focus (map) | `.focus` | `.focus-grid`, `.focus-map` |
| Features | `.features-sec` | `.features`, `.feature-card`, `.feature-icon` |
| Waitlist | `.waitlist-sec` | `.postcard`, `.postcard-art`, `.postcard-body`, `.stamp`, `.waitlist-inline`, `.btn-notify` |
| Footer | `footer` | `.footer-wave`, `.footer-content`, `.footer-bottom`, `.copyright-year` |
| Construction page | `.uc-wrap` | `.uc-art`, `.uc-heading`, `.uc-desc`, `.uc-bar`, `.uc-monkeys`, `.monkey`, `.uc-back` |

---

## 9. Responsive breakpoints

| Width | Key changes |
|---|---|
| 1024px and above | Phrase cards float in the hero sky; map beside text; postcard side by side |
| Below 1024px | Phrase cards grouped above the hero picture (picture at 9:4); map above text; postcard stacked |
| 768px and below | Smaller text sizes, one-column feature cards, full-width button, two-column footer, 44px logo |
| 760px and below | Banner no longer sticky |
| 520px and below | Smaller banner text |
| 360px | Smallest checked width; no sideways scrolling at any size |

---

## 10. Motion and animation

| Animation | Timing | Element |
|---|---|---|
| Float | 5 to 6s, staggered | Phrase cards (smaller movement below 1024px); on very wide screens (2500px+) the right-hand card moves further right to stay clear of the sun |
| Star pop | 2s | Doodle star in the hero subtitle |
| Bell ring | 2s | Bell beside the waitlist heading |
| Banner dot blink | 2s | `.stealth-dot` |
| Feature card lift | 0.25s | `.feature-card` hover |
| Button press | 0.15s | Buttons |
| Monkeys | about 2.2s each, plus a gentle bob | Construction page: hands cover eyes, ears and mouth like the emoji |
| Progress bar and slide-in | 4s / 0.6s | Construction page |

---

## 11. Page layout (home)

1. Banner and sticky header
2. Hero: heading, subtitle with star, button, phrase cards and Taiwan panorama
3. Wavy edge, then focus section: Taiwan map beside text
4. Features on sand: six feature cards
5. Waitlist postcard
6. Wavy edge, then footer

The construction page uses the same banner, header and footer around the Kenting beach picture, the three monkeys, a progress bar and a link back to the home page.

---

## 12. Content guidelines

- **Voice**: Warm, encouraging, straightforward. Good for a secondary school student to understand.
- **Tone**: Approachable and human, not cold or techy.
- **Dashes**: Do NOT use m-dashes (—). Use single dash or rephrase.
- **Quotes**: Single quotation marks for quotes, double for quotes within quotes.
- **Oxford commas**: Do NOT use.
- **Placeholders**: Short honest placeholders (a dash, a grey block or a labelled stub) instead of invented metrics ("10× faster").
- **Avoid**: Lorem ipsum, generic emoji icon rows, left-border accent cards, purple gradients, warm beige page washes not justified by brand.
