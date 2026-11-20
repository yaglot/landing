# Yaglot design rules

This is the single design rulebook for yaglot.com.
The rules come first in Part A and the decision history follows in Part B.
When a rule and the site disagree, the rule wins and the gap is listed in section 10.

## Contents

- Part A. Rules
  1. Principles and how to use this rulebook
  2. Layout, breakpoints and spacing
  3. Typography
  4. Logo
  5. Colour
  6. Illustration, icons and motion
  7. Components
  8. Page patterns and content
  9. Accessibility
  10. Gaps to fix
- Standards
- Part B. Decision history

## Part A. Rules

Each token is named and given its value once, in sections 2, 3, 5 and 6. Other sections use the name and point back.

## 1. Principles and how to use this rulebook

Every Yaglot page should feel friendly, obvious and consistent.

### Principles

1. **Phone first.** Yaglot is a mobile-first company. Design every page for the phone first, then let it grow for tablet and computer. Keep words short and every screen easy to use with one thumb. This follows who visits today. If computer or tablet visitors become clearly more common, the founder may switch the focus, and this rule changes then.
2. **One clear next step.** Each screen asks for one main action. 'Join the waitlist' is the only terracotta button and every other button is olive.
3. **Plain words.** Write the way a friendly teacher talks, with no jargon. Call what learners use a 'course', not a 'product' (the footer's 'Products' menu is the only exception).
4. **Same thing, same look.** A button, link or box looks and behaves the same on every page (Nielsen's 'consistency and standards', approximate).
5. **Always show what is happening.** Pressing a button gives an instant response, then a clear result (Nielsen's 'visibility of system status', approximate).
6. **Forgive mistakes.** Check forms only when people press the button, say exactly what to fix and never clear what they typed.
7. **Easy to tap.** On phones every control is at least 48px tall and on tablets 52px. On both every link has at least 44px to tap, except links inside sentences (Material 48dp and Apple 44pt, both approximate).
8. **Drawings decorate, controls act.** Doodles never look clickable. Only controls move or change when hovered or pressed (section 6).

### Screen sizes

'Computer' means 1024px wide and up. 'Phone' means 768px and down. Between the two is 'tablet' (769 to 1023px), such as an iPad held upright (820px). Tablets held sideways (1024px and wider) get the computer layout and an iPad mini held upright (744px) gets the phone layout. Tablet pages stack like a phone but keep computer spacing and control sizes. Headings use the tablet sizes in section 3.

Check every change on phone first (390, 360 and 320px), then tablet (820 and 768px), then computer (1024 and 1440px). Also check it at 200% browser zoom.

### Changing the design

How the team works on a change, step by step, is set out once in `CLAUDE.md`. Each role's own instructions are in `.claude/agents/`.

### Adding a page

1. Copy the closest inner page (careers.html for a short page, privacy.html for a long one).
2. Keep the banner, header, footer and '← Back to the home page' link unchanged.
3. Give it one heading, the squiggle and a one-line intro.
4. Add its footer link on every page and its short address to the forwarding list in 404.html.
5. Record it in this file and check it at the seven widths above.

## 2. Layout, breakpoints and spacing

Every page uses the same three layouts, one spacing scale and a small set of corners and shadows. Values were measured on 18 November 2026 from 1440px to 320px, and tablet values at 1023, 820 and 769px.

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| bp-computer | | | 1024px and up | Computer rules start at 1024px. Phone and tablet rules stop at 1023px |
| bp-tablet | | 769 to 1023px | | Stacks like a phone with computer spacing, control sizes and side margins. Tablet heading sizes (section 3) |
| bp-phone | 768px and down | | | Smaller text, one column |
| Smallest width | 320px | | | No sideways scrolling |
| width-page | Full width | As phone | 1200px | Centred, includes side margins |
| width-reading | Full width | As computer | 720px | Inner page column |
| width-paragraph | 34em (544px) | As computer | 34em (612px) | Caps every paragraph and list at 45 to 75 characters a line |
| margin-side | 16px | As computer | 24px | Every page, every section |

An iPad held upright (820px) is a tablet. Tablets held sideways (1024px and wider) get the computer layout and an iPad mini held upright (744px) gets the phone layout.

Small tweaks stay at 760px (the banner stops sticking), 520px (smaller banner text) and 374px (smaller logo). Below 360px the header button moves under the logo and the header scrolls away (section 7). Add no breakpoint without a measured reason. Material 3 switches at 600 and 840px and GOV.UK at 641 and 769px (approximate).

### Spacing scale

All spacing uses a 4px grid, like Material's 4dp grid (approximate).

| Token | Value | Typical use |
|---|---|---|
| space-1 to space-3 | 4, 8, 12px | Icon to text, label to box |
| space-4 to space-8 | 16, 24, 32, 40, 48px | Margins, padding inside boxes and buttons, card padding and gaps |
| space-9 to space-12 | 64, 80, 96, 112px | Section top and bottom |

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| section-hero | 56px / 0 | As computer | 80px / 0 | Top / bottom |
| section-map | 48px / 72px | As computer | 72px / 96px | Top / bottom |
| section-features | 24px / 80px | As computer | 24px / 64px | Top / bottom |
| section-waitlist | 24px / 80px | As computer | 24px / 112px | Top / bottom |
| section-inner | 48px / 64px | As computer | 64px / 96px | Inner pages, top / bottom |
| gap-cards | 40px | As computer | 40px | Rows and columns of feature cards |

### Corners and shadows

No sharp corners on anything with a border. Shadows fall straight down, with no blur.

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| radius-wobble | As computer | As computer | 18px 22px 16px 24px / 22px 16px 24px 18px | Buttons, boxes, phrase and FAQ cards |
| radius-wobble-lg | As computer | As computer | 28px 34px 24px 36px / 34px 24px 36px 28px | Feature cards, postcard |
| radius-blob | As computer | As computer | 46% 54% 42% 58% / 55% 44% 56% 45% | Icon blobs |
| radius-pill | 24px once text wraps | As computer | 999px | Progress bar, email pill |
| radius-small | As computer | As computer | 6px | Stamp, social icon |
| shadow-button | As computer | As computer | 0 5px 0 ink | 2px on hover, none when pressed |
| shadow-card | As computer | As computer | 0 4px 0 ink at 85% | FAQ cards |
| shadow-float | As computer | As computer | 0 6px 0 ink at 85% | Phrase cards |
| shadow-postcard | As computer | As computer | 0 8px 0 ink at 85% | Waitlist postcard |
| shadow-soft | As computer | As computer | 0 6px 0 #dccfb6 | Feature cards. No change on hover, because they cannot be clicked |

## 3. Typography

Headings use Noto Serif and everything else uses Noto Sans. Every size comes from one scale.

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| text-display | 40px / 1.15 | 48px / 1.15 | 60px / 1.15 | One per page (h1) |
| text-headline | 32px / 1.15 | 40px / 1.15 | 48px / 1.15 | Home section headings |
| text-postcard | 32px / 1.2 | As computer | 40px / 1.2 | Waitlist heading |
| text-title | 24px / 1.25 | As computer | 24px / 1.25 | Inner page headings, card titles, Mission beliefs (balanced so no short last line) |
| text-subtitle | 20px / 1.6 | As computer | 26px / 1.6 | Hero subtitle only |
| text-lead | 18px / 1.6 | As computer | 20px / 1.6 | Map section, construction page |
| text-body-lg | 16px / 1.65 | As computer | 18px / 1.65 | Inner page text, the back link (founder decision) and the Contact form's labels, boxes, word counter and privacy note |
| text-button | 19px bold / 1.2 | As computer | 19px bold / 1.2 | Every button, terracotta and olive (founder decision) |
| text-body | 16px / 1.6 | As computer | 16px / 1.6 | Home text, the waitlist 'Email address' label, warnings, failure messages, 'Last updated', footer |
| text-small | 14px | As computer | 14px | Copyright, pinyin and 'ALMOST THERE' only. 'ALMOST THERE' is accent-active, never terracotta |
| text-chinese | 32px | As phone | 40px | Phrase cards. Inside sentences, match the sentence |

- Weights are 400 for text and 500 for headings, banner and pinyin. Buttons, links, labels, warnings and FAQ questions use 700. Only those load (Noto Serif 500, Noto Sans 400, 500 and 700, Noto Sans TC and SC 400).
- Chinese uses Noto Sans TC first, then SC.
- Nothing people need to read goes below 16px. The text-small uses above are the only exceptions.
- A lower heading is never bigger than the one above it.
- Lines run 45 to 75 characters, spaces included (width-paragraph, section 2).
- Sentence case everywhere. Capitals only for 14px labels, spaced 0.08em.

Buttons use 19px bold because WCAG counts 19px bold as large text, which lets cream on terracotta pass (section 5). For comparison, Material 3 body large is 16px on a 24px line and display large 57px. Apple's body text is 17pt. GOV.UK body is 19px on computers and 16px on phones, close to our 18 (computer and tablet) and 16. All three are approximate.

## 4. Logo

The logo is the oracle bone tree symbol beside 'Yaglot' in Noto Serif Bold, both accent #b85c38.

The nine logo files live in images/brand and are listed in Part B (Logo). The header uses yaglot_name_with_symbol.png (648 by 220px, with 48px of transparent space on every side). On a computer the whole logo wiggles once when hovered (tilts 7 degrees left, 6 right, then smaller swings until it settles, 0.7s); it is off with reduced motion. A symbol-only twirl and a hop were tried and turned down.

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| logo-height | 52px | As computer | 72px | 46px below 375px (founder decision) |
| logo-width | 153px | As computer | 212px | 135px below 375px |
| logo-visible | 35px | As computer | 48px | Height of the drawing itself (31px below 375px) |
| logo-clear | 9px | As computer | 12px | A quarter of the visible height, every side. The file's transparent edge covers it |
| logo-min | 24px visible | As computer | 24px visible | About 36px image height. Smaller, use the circle |
| icon-min | 16px | As computer | 16px | Circle icon, browser tab |

- Do use the files as supplied, scaled evenly. On dark or terracotta backgrounds use the cream symbol or an 'on terracotta' file. Use yaglot_logo.png for social profiles.
- Don't stretch, rotate, recolour, outline, shadow or redraw it, or put anything inside the clear space.
- Don't put the terracotta logo on hero-sky or sand (3.7 to 1).

## 5. Colour

Warm neutrals carry the page. Terracotta marks the brand and 'Join the waitlist', and olive marks every other button. Colours are the same on every device.

### Surfaces

| Token | Hex | Use |
|---|---|---|
| parchment | #f5f4ed | Page background (the site calls it --bg) |
| surface | #faf9f5 | Cards, postcard, phrase cards |
| cream | #fffaf0 | Header, inner pages (the site calls it --sky) |
| sand | #efe7d6 | Features section |
| hero-sky | #d6eaf5 | Hero section |
| white | #ffffff | Form boxes only |
| card-hover | #f3efe6 | FAQ card on hover |

Icon tints #fbe0d6, #dcedf6 and #fbecc4 sit only behind icons.

### Text, accents and ink

| Token | Hex | Where it may be used | Contrast on usual background |
|---|---|---|---|
| accent | #b85c38 | Logo, 'Join the waitlist' buttons and decoration such as squiggles, icons, the stamp and the progress bar (founder decision). Also Chinese characters at 24px and above | 4.4 to 1 on cream, 4.3 to 1 on surface. Never for text under 24px |
| link | #9b4d2f | Every link on a light background, inside sentences and standalone such as '← Back to the home page' (founder decision). The site calls it --accent-hover | 5.8 to 1 on cream, at least 5.4 to 1 on other light backgrounds |
| accent-active | #833f26 | Pressed 'Join the waitlist', warnings, word counter over 500, box border on error, focus outline on light backgrounds, 'ALMOST THERE' | 7.5 to 1 on cream. Only 2.4 to 1 on fg, so never in the footer |
| accent-on | #f7f0e3 | Text on every button, focus outline in the footer (founder decision) | 4.0 to 1 on accent, 4.7 to 1 on olive, 16.3 to 1 on fg |
| olive | #5f7146 | Every other button, pinyin (founder decision) | 5.1 to 1 on surface |
| olive-pressed | #45532f | Pressed olive button | 7.3 to 1 under accent-on |
| fg | #141413 | Headings (including 'You're in!'), main text, labels, footer background | 17.7 to 1 on cream |
| muted | #5e5d59 | Paragraphs, feature card text | 6.0 to 1 on parchment |
| updated | #6f6e68 | 'Last updated' | 4.9 to 1 on cream |
| placeholder | #757575 | Example text in boxes | 4.6 to 1 on white |
| banner-text | #57534e | Banner | 5.1 to 1 on #e2d1ab |
| ink | #3a2f2a | Outlines, shadows | 11.8 to 1 on parchment |
| footer-heading | #c8963e | Footer headings (founder decision) | 6.9 to 1 on fg |
| footer-link | #b0aea5, hover #e8a387 | Footer links (founder decision) | 8.3 to 1 (hover 8.8 to 1) on fg |
| meta | #87867f | Copyright, dark backgrounds only | 5.0 to 1 on fg |

- Text needs 4.5 to 1, or 3 to 1 at 24px and above or 19px bold and above. Outlines and icons need 3 to 1. Section 9 has the checks.
- Cream on terracotta measures 4.0 to 1, not the 4.3 to 1 in Part B. The founder keeps both colours, so all button text is text-button (19px bold), which counts as large and needs only 3 to 1.
- Terracotta text appears only on 'Join the waitlist' and on Chinese characters at 24px and above. Chinese characters are text, so inside sentences they take the sentence colour.
- Buttons never change colour on hover. They move instead (section 7).
- Never put meta #87867f on a light background (3.3 to 1).

## 6. Illustration, icons and motion

Hand-drawn doodles sit behind the page, and flat outlined elements sit on top.

- Doodles are felt-tip style (rough.js), with wobbly lines and scribbled fills. Doodles are never flat with an ink border.
- Among flat items with one fill and a 2px ink border, only controls move or change when hovered or pressed. Reading cards (phrase cards, feature cards and the construction 'Reach out' box) stay still. The one exception (founder's choice, 20 November 2026): the feature cards themselves stay still, but on a computer each card's icon bounces and wiggles while the card is hovered (up 8px, a tilt of up to 12 degrees and a 15% grow, settling within 0.7s and repeating every 1.4s); it is off with reduced motion. A single small wiggle was too subtle, and a card lift was turned down.
- Outlines are ink, 1.4 to 2.2px wide at full artwork size. Wood and trunks may use #7a5236.
- Drawings stay at least 12px from text, buttons, other lines and picture edges on computer and tablet, 8px on phone. They never touch.
- The illustration palette is sky #d6eaf5, sea #a9d2e6, leaf #8cc084, deep green #5a9a5f, yellow #f6c453, persimmon #d9573b, orange #ef9a4a, sand #eadcbc and night #2d3561.
- Icons are doodle line icons with round ends, never emoji. Line width is the icon size divided by 20.

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| icon-feature | As computer | As computer | 40px in 76px blob | Line 2px |
| icon-belief | 26px in 48px blob | As computer | 32px in 60px blob | Line 1.6px / 1.3px |
| icon-social | 34px, 44px tap area | As phone | 34px | Official logo only |
| doodle-star | 32px | As computer | 42px | Hero subtitle |
| doodle-bell | 40px | As computer | 50px | Waitlist heading |
| banner-dot | 9px | As computer | 9px | Founder decision |
| squiggle | 96 by 12px | As computer | 120 by 14px | Under headings |
| wave | 40px tall | As computer | 72px tall | Between sections |

### Motion

Durations match on every device. Phrase cards float 14px on computer and 8px on tablet and phone.

| Token | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| motion-press | As computer | As computer | 0.15s | Button press |
| motion-hover | As computer | As computer | 0.2s | Colour and background changes |
| motion-enter | As computer | As computer | 0.6s | Slide-in, once |
| motion-blink | As computer | As computer | 1.4s | Banner and 'Reach out' dots, 0.2s apart |
| motion-loop | As computer | As computer | 2 to 3s | Star, bell, monkeys |
| motion-progress | As computer | As computer | 4s | Progress bar, once |
| motion-float | As computer | As computer | 5 to 6s | Phrase cards, staggered |

Loops use ease-in-out and single moves use ease. No loop runs faster than 1.4s. Loops run normally, and with reduced motion nothing loops, floats or slides in (section 9).

## 7. Components

Each component has one job and behaves the same wherever it appears.

### Sizes

| Component | Phone | Tablet | Computer | Rule |
|---|---|---|---|---|
| Sticky banner | 60px, scrolls away | As computer | 41px tall, sticks | Sticks only above 760px, where it fits on one line. On short screens (500px tall or less, such as 400% zoom or a phone held sideways) it scrolls away |
| Header | 79px tall, 152px below 360px | As computer | 87px tall | Logo (section 4) on the left links home, 'Join the waitlist' on the right, at least 16px apart on phone. Sticks under the banner. When space runs short the button's side padding shrinks evenly, never its words. If the words still do not fit, as with wider text spacing at 360 to 390px, they wrap and the button grows taller instead of spilling out. Normal view keeps one line, so the header stays 79px. Below 360px the button sits under the logo and the header scrolls away. The button lines up with the logo drawing, not the image box (the file has a 10px transparent edge at 46px tall), and there is 22px of clear space above the drawing, between the drawing and the button, and below the button's shadow. On short screens (500px tall or less) the header scrolls away at every width |
| Button | 48px tall, 16px side padding (space-4) | As computer | 52px tall, 24px side padding (space-5) | text-button. Form buttons fill the width on phone |
| Text box and Topic | 48px tall | As computer | 52px tall | Match the button height. 16px inside on the left and right (space-4), no padding top or bottom. Contact boxes use text-body-lg on tablet and computer |
| Message box | 150px tall | As computer | 150px tall | People can drag it taller |
| Label | text-body bold | Contact text-body-lg bold, waitlist text-body bold | As tablet | Above the box, 8px gap. Lines up with the text inside the box (18px in, the 2px border plus 16px) |
| Warning | As computer | As computer | text-body bold, accent-active, under the box | One per box |
| Word counter | text-body | text-body-lg | text-body-lg | Right-aligned under Message. Reads '0 / 500 words' |
| FAQ card | 59px closed | As computer | 66px closed, 16px apart | Whole question row opens it |
| Back link | 46px to tap | As computer | 50px to tap | text-body-lg bold in link colour |
| Footer link | 44px to tap, social icons too | As phone | 22px tall | Two columns on phone, four on tablet and computer |

### Buttons

Buttons do things and links go to pages.

| State | 'Join the waitlist' | Every other button |
|---|---|---|
| Default | accent #b85c38, accent-on text in text-button, shadow-button | olive #5f7146, same text and shadow |
| Hover | Moves down 3px, shadow 2px. The colour does not change | Same |
| Pressed | Darkens to accent-active, moves down 5px, no shadow | Darkens to olive-pressed, same movement |
| Focus | 3px accent-active outline, 3px away. In the footer the outline is accent-on | Same |
| Sending | Reads 'Sending…' and keeps its width, so nothing next to it moves. Keeps its normal colour and 5px shadow, stays still on hover, normal arrow cursor. Uses `aria-disabled="true"`, not `disabled`, so it keeps keyboard focus, and presses do nothing until the result | Same |
| Error | Buttons never show errors. The boxes do | Same |

Button words start with a verb and use three words at most, such as 'Send message'.

### Links

- Links on light backgrounds are link #9b4d2f and bold, with no underline (founder decision). This covers links inside sentences and standalone links such as '← Back to the home page'.
- They underline on hover and show the focus outline (section 9).
- The address hello@yaglot.com in a failure message (section 8) is a mailto link in the same style. It never wraps on its own, so 'at hello@yaglot.com.' stays together on one line.
- Footer links are footer-link #b0aea5 and turn #e8a387 on hover. Their focus outline is accent-on.
- Links that leave yaglot.com open in a new tab and have a spoken label such as 'Yaglot on LinkedIn (opens in a new tab)'.

### Form fields

- Every box has a visible label above it in text-body bold. The labels are 'Name', 'Email', 'Topic' and 'Message' on Contact and 'Email address' on the waitlist (founder decision).
- Topic always has an answer, so its label stays 'Topic' with no '(optional)'.
- Placeholders show an example, never an instruction. Use 'John Doe', 'you@example.com' and 'What's on your mind?' in placeholder #757575. They vanish when typing starts.
- A box is white with a 2px ink border. When selected it shows the focus outline (section 9) and no glow. On error its border turns accent-active and a warning appears under it. Boxes are never disabled.
- Name and email boxes allow autofill, and email brings up the email keyboard on phones.

### Word counter

It sits under the Message box on the right and counts words as people type. Over 500 it turns accent-active and bold. The box gets a warning only when they press 'Send message'. Screen readers hear the counter only when the count goes over 500.

### Topic select

The topics are General question, Feedback or a problem, Schools and businesses, Working with us and Something else, in that order. General question is chosen unless a link picks another (section 8). It uses our rounded ink chevron, not the browser's arrow.

### Phrase cards and feature cards

Both are for reading only and never look clickable. Phrase cards show characters (text-chinese), pinyin and meaning and float gently in the hero. Feature cards hold an icon, a text-title heading and a short paragraph in muted. They stay still on hover. They sit in three columns on computer, two on tablet and one on phone, gap-cards apart.

### FAQ accordion

Used on the FAQs page. Each question card opens and closes with a click, a tap, Enter or Space. The chevron points down when closed and up when open. On hover the background changes from surface to card-hover over motion-hover.

### Waitlist postcard

The one place to join. The 'Email address' label (text-body bold) sits above the box. The box and button sit side by side on computer and stack on tablet and phone, each full width, with the consent line underneath unchanged.

### Footer, back link and 404

- **Footer** columns are About us, Products, Help (Contact us, FAQs, Privacy, Terms) and Follow us. Headings are h2, styled in footer-heading ochre at 16px, and never links.
- **Back link** '← Back to the home page' ends every inner page.
- **404.html** sends known old addresses to the right page and anything else home, so no visitor meets a dead end.

## 8. Page patterns and content

Every page follows one of two shapes, asks for one thing and speaks plainly.

### Page anatomy

| Part | Home | Inner pages |
|---|---|---|
| Top | Banner, header | Banner, header |
| Opening | Hero heading, subtitle with star, phrase cards and picture | Page heading, squiggle, one-line intro |
| Middle | Taiwan map, six feature cards | Reading column (width-reading) |
| Action | Waitlist postcard | At most one olive button, if the page needs one |
| End | Footer | Back link, then footer |

### One main action per screen

Count only the page content, not the header. A screen shows at most one filled button. If a page needs a second action, make it a link. The header 'Join the waitlist' goes to the postcard's words and form (#waitlist) and stops below the sticky banner and header, using only the scroll padding in section 9 (no extra scroll margin). The email box is then on screen at every width, 320 by 568 included. On tablet and phone the postcard picture sits above, out of view. Coming from another page, the home page aims again once its fonts have loaded, unless the visitor has already scrolled.

### Form flows

**When we check.** Only when the visitor presses the button. Never while typing or when they leave a box (GOV.UK pattern, approximate).

**What happens on a problem.** Nothing is sent. Every problem shows at once, each warning under its own box. The cursor jumps to the first one, which reads its warning out (section 9). A warning disappears as soon as the visitor types in that box.

| Box | Problem | Warning |
|---|---|---|
| Name | Empty | 'Please enter your name.' |
| Email | Empty | 'Please enter your email address.' |
| Email | Not like name@example.com | 'Please enter a valid email address, like name@example.com.' |
| Message | Empty | 'Please write your message.' |
| Message | Over 500 words | 'Please keep your message under 500 words.' |

Warnings say what to do, start with 'Please' and never use words like 'invalid' or 'error'.

**Sending.** The button reads 'Sending…', keeps its width and focus and cannot be pressed again (section 7). A `role="status"` area says 'Sending…' to screen readers. The result shows after one second at the earliest, so 'Sending…' never flashes. With 'no-cors' we cannot read the answer, so the send counts as done unless the network fails or there is no answer within 15 seconds.

**Robot checks (Contact).** Robots fill the hidden 'Leave this empty' box or send within 3 seconds of the page opening.
- If the button is pressed within 3 seconds of the page opening (autofill, a pasted message or a quick person), 'Sending…' stays until 3 seconds have passed and then the message is sent as normal. The 15 seconds start from then. Never show a failure for the time rule.
- If the hidden box is filled, nothing is sent and 'Thank you!' shows quietly. This is the one case where a success message shows without a send.

**Success.** The waitlist shows 'You're in!' and 'We'll let you know as soon as we're ready.' The contact form shows 'Thank you!' and 'Your message is on its way. We'll reply to you by email.' Both use the same layout, with no tick. A centred 24px heading in fg sits 8px above one line of text, with 24px of space above and below. The cursor moves to the heading so screen readers announce it.

**Failure.** Only a network failure or 15 seconds with no answer counts. Keep the form and what was typed, and the button reads its normal words again. Show 'Something went wrong. Please try again or email us at hello@yaglot.com.' under the button, in a `role="alert"` area so screen readers read it out. hello@yaglot.com is a mailto link (section 7) and stays on one line with 'at'. The message sits 18px under the button on both forms and in text-body bold accent-active. If it is below the screen, as on phones, it scrolls gently into view (at once with reduced motion). Focus stays on the button, or the box where Enter was pressed. Apart from the hidden box above, never show a success message when nothing was sent.

### Links that pick a topic

Add '?topic=' and the topic's name to a contact link to pick it, with '%20' for each space, for example contact?topic=Working%20with%20us. Matching ignores capital letters. Any other value leaves General question. Use this whenever a page points people to one topic.

### Writing style

- British English (programme, organise, colour).
- Sentence case for buttons, headings and labels.
- Plain words and short sentences a 14-year-old could follow.
- Single quotes, with double quotes inside them.
- No em dashes and no dashes used as dashes. Use a full stop, a comma or 'to'.
- No Oxford comma unless the sentence is unclear without it.
- Avoid colons in sentences. Use lists or two sentences.
- No invented numbers or claims, no prices and nothing confidential.

## 9. Accessibility

Every Yaglot page must work for people who use a keyboard, a screen reader, zoom or reduced motion, so we aim for WCAG 2.2 level AA.

In the UK the Equality Act 2010 expects businesses to make reasonable adjustments for disabled people, and WCAG 2.2 AA is the usual yardstick (approximate). Figures were measured on 18 November 2026 with axe-core and Playwright on all nine pages at 1440, 390, 360 and 320px.

### Colour contrast

Contrast is how much text stands out from its background. Small text needs 4.5 to 1. Large text (24px, or 19px bold) needs 3 to 1 (WCAG 1.4.3, approximate). Logos are exempt. Every token's ratio is in section 5. These pairs need care.

| Text on background | Where | Size | Ratio | Rule |
|---|---|---|---|---|
| accent-on on accent | 'Join the waitlist', every page | 19px bold | 4.0 to 1 | Passes only as large text, so button text is always text-button |
| link on cream or surface | Links in text, '← Back to the home page', 'privacy notice' under both forms, FAQ links | 16 to 18px bold | 5.4 to 5.8 to 1 | Pass. Terracotta here would fail (4.3 to 4.4 to 1) |
| accent on surface | Phrase-card characters (text, but large) | 32 to 40px | 4.3 to 1 | Pass (large) |
| accent-active on cream | 'ALMOST THERE', warnings | 14 to 16px | 7.5 to 1 | Pass |
| accent-on on olive | 'Send message', 'Get in touch' | 19px bold | 4.7 to 1 | Pass |
| olive on surface | Pinyin, FAQ 'ya' and 'glot' | 14 to 18px | 5.1 to 1 | Pass |
| placeholder on white | Example text in boxes | 16px | 4.6 to 1 | Pass, just. Do not lighten it |
| accent-active or fg on any light background | Warnings, headings, labels | All | 7.4 to 18.4 to 1 | Pass |

### Non-text contrast

Borders, icons and focus outlines need 3 to 1 against what is next to them (WCAG 1.4.11, approximate). Ink borders measure 10.5 to 13 to 1 and the LinkedIn square 3.2 to 1. The social icons are brand logos, recognised by their white glyphs (21 to 1 on black). The accent-active outline passes on light backgrounds (6.3 to 7.5 to 1) but is only 2.4 to 1 on the footer, so the footer uses accent-on (16.3 to 1).

### Focus, keyboard and targets

- **Focus visible (2.4.7).** You can always see where the keyboard is. Every link, button, box and FAQ question shows a 3px accent-active outline, 3px away. In the footer the outline is accent-on cream #f7f0e3 only (founder decision).
- **Focus not obscured (2.4.11).** The focused item must never hide under the sticky banner and header. Set `scroll-padding-top` to the measured sticky height plus 12px. That is 140px from 769px up (128px sticky), 132px at 761 to 768px (120px sticky) and 91px at 360 to 760px (79px sticky). Below 360px, and on screens 500px tall or less (400% zoom, a phone held sideways), the banner and header scroll away, so it is 12px. The header 'Join the waitlist' link uses the same offset and nothing else adds to it.
- **Keyboard (2.1.1).** Everything works without a mouse, with no traps.
- **Skip link (2.4.1).** People can jump past repeated parts. A 'Skip to main content' link, first in the header, appears on focus and moves focus to `main`.
- **Target size (2.5.8).** Things you tap are at least 24 by 24px or spaced apart (approximate). Our own rule is 48px buttons and boxes on phone, 52px on tablet and 44px link tap areas on both (section 7).

### Zoom, reflow and spacing

- **Reflow (1.4.10).** At 320px wide, which equals 400% zoom on a computer, nothing scrolls sideways. Below 360px the header wraps and scrolls away (section 7), which also makes 19px button text fit. On screens 500px tall or less nothing sticks, so the sticky parts never take a third of the screen.
- **Resize text (1.4.4).** Text zoomed to 200% stays readable with nothing lost.
- **Text spacing (1.4.12).** Text still fits when readers widen line, letter and word spacing. On phone the header button's words wrap and the button grows taller rather than spill out (section 7).

### Structure and wording

- **Page titles (2.4.2).** Each tab names its page.
- **Headings and landmarks (1.3.1).** One h1, then h2 and h3 in order, inside `header`, `nav`, `main` and `footer`. Footer headings are h2, styled as small ochre headings. The banner is a region landmark named 'Announcement'.
- **Link text (2.4.4).** Each link says where it goes. The '←' is hidden from screen readers. The social and ico.org.uk links say '(opens in a new tab)'.
- **Alternative text (1.1.1).** Pictures that carry meaning get a short description. Doodles get `alt=""`. The Taiwan map gets one short sentence.
- **Language (3.1.1 and 3.1.2).** Pages have `lang="en"`. Chinese characters have `lang="zh-Hant-TW"` and pinyin `lang="zh-Latn-pinyin"`, so screen readers pronounce them.

### Forms

- **Labels (3.3.2).** Every box has a visible label, the waitlist's 'Email address' included (section 7).
- **Required fields (3.3.2).** Name, Email and Message use `required`. Topic always has an answer, so its label stays 'Topic'.
- **Autocomplete (1.3.5).** Name and email boxes use `autocomplete="name"` and `autocomplete="email"`.
- **Errors (3.3.1 and 3.3.3).** Problems are explained in words. Both forms set `aria-invalid`, link warnings with `aria-describedby` and move focus to the first problem, which reads its warning once. Warnings have no `role="alert"`, so nothing is read twice and several warnings never cut each other off. If the cursor is already in that box (Enter pressed there), it leaves and comes back so the warning is read. Other warnings are read when people reach their boxes.
- **Status messages (4.1.3).** Put 'Sending…' in a `role="status"` area. The button uses `aria-disabled`, not `disabled`, so focus never drops to the page while sending. When the thank-you appears, move focus to its heading (`tabindex="-1"`) and leave it out of the live area, so it is read once. The failure message uses `role="alert"`, is shown and filled in one step and leaves focus where it was.

### Motion

Nothing may flash more than three times a second (2.3.1). Looping animations run normally. With reduced motion (`prefers-reduced-motion`) they stop completely on every page, the home page and the banner dots included (founder decision). There is no 5-second stop. WCAG 2.2.2 (approximate) asks for a way to pause loops that last over 5 seconds, and the reduced-motion setting is the way we offer.

- With reduced motion, stop the phrase-card float, star, bell, banner dots, 'Reach out' dots, monkeys, heading slide-in, progress bar and smooth scrolling. Each stops at rest, never mid-move. Phrase cards sit at their starting place and dots and the star stay fully visible.
- The button press may stay. It is short and only happens when people press.
- Put the reduced-motion block last in each page's styles so it wins.

### Testing routine

Run in this order on every change, using Chrome's device toolbar for widths.

- [ ] Run axe DevTools or Lighthouse (free browser tools) on each changed page at 1440, 820 and 390. Check any new colour pair against section 5.
- [ ] At 1440, use only the keyboard. Tab and Shift+Tab through the page. Check the outline shows, is cream in the footer and is never under the header.
- [ ] Open and close each FAQ with Enter and with Space. The chevron points down when closed and up when open.
- [ ] Block script.google.com first, so no real message is sent. Submit both forms empty, with a bad email and with 501 words in Message. Check each warning sits under its own box and clears when you type there. Check nothing typed is lost.
- [ ] Zoom the browser to 200% and then 400%. Nothing is cut off and nothing scrolls sideways.
- [ ] At 820, 390, 360 and 320, check there is no sideways scrolling and taps reach 44px.
- [ ] On a real phone, open the keyboard in each form. The box and its warning stay visible.
- [ ] Turn on reduced motion (system settings or Chrome DevTools Rendering). Nothing loops, floats or slides in.
- [ ] Apply a text spacing bookmarklet at 1440 and 360. Nothing is cut off.
- [ ] Listen with VoiceOver (Mac or iPhone) or NVDA (Windows). Check the title, headings, Chinese and pinyin, image descriptions, warnings and thank-you messages.

## 10. Gaps to fix

Every place where the site does not yet follow the rules, most serious first. Founder decisions stay here until the site is changed. All other gaps found in the 18 November 2026 review were fixed in the final build pass that day.

| Issue | Page and width | Rule | Fix |
|---|---|---|---|
| The hello@yaglot.com link in the failure message stands out from the message only by colour (link #9b4d2f in accent-active #833f26 bold text, about 1.2 to 1, axe 'link-in-text-block') | Home waitlist and Contact failure message, all widths | Sections 7 and 9, WCAG 1.4.1 | Founder decision (18 November 2026): keep it as it is, links underline on hover only. Accepted exception; revisit if users report trouble |

## Standards

The rules lean on WCAG 2.2 AA, Apple's Human Interface Guidelines, Material 3 and the GOV.UK Design System. Those sites could not be opened while this was written, so every value quoted from them is marked '(approximate)'.

## Decision history

This is Part B. It is the earlier DESIGN.md, kept as it was apart from headings moved down two levels and a few words changed to suit a public file. Where Part A now says something different, the old value stays and is followed by '(superseded, see section N)'.

### Yaglot Design System

> Warm parchment canvas, terracotta accent, Noto typography, approachable human tone.


#### 0. Doodle redesign (November 2026)

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
- Banner: soft sand stripes (`#eadcbc` / `#e2d1ab`), warm grey text `#57534e`, three blinking dots (9px, yellow, orange, terracotta, one after another, centred on the text) like the 'Reach out to us at' box on the construction page; text 'We're building our first Mandarin course. Coming soon!'; stays at the top while scrolling on screens wider than 760px (where it fits on one line), scrolls away below that

**Phrase cards**: dark-outlined cards floating in the hero sky band (desktop) or grouped above the picture (below 1024px); characters in terracotta, pinyin in olive `#5f7146`.
- Desktop: the hero picture height follows the screen width (`max(420px, 29vw + 215px)`) so the cards always sit just above the mountains
- Below 1024px: cards grouped with 30px between rows and 24px between cards, 44px space above; picture shown at 9:4

**Text and small details**
- Hero subtitle 26px (20px on phones); doodle star 42px (32px on phones); bell beside the waitlist heading 50px (40px on phones)
- Buttons read 'Join the waitlist' (sentence case)
- Footer headings ochre `#c8963e` (so they don't look like links); link hover light terracotta `#e8a387`; on near-black
- Footer copyright year fills in automatically

**Logo**
- Oracle bone tree symbol (甲骨文) beside the name 'Yaglot' in Noto Serif Bold (700), both terracotta `#b85c38`
- The symbol's lines are 1.3 × thicker than the original drawing so it holds its own next to the bold name
- Icon shape: a terracotta circle with the cream symbol, used for the browser tab icons (`favicon.ico`, `favicon.svg`, `favicon-96x96.png`) and `images/brand/yaglot_circle.png` (the circle on a transparent background)
- Phone home-screen and app icons (`apple-touch-icon.png`, `web-app-manifest-*.png`) stay full squares, because phones cut them into their own rounded or circle shape
- Icon links (in `index.html`, `construction.html` and `site.webmanifest`) end in a version tag, currently `?v=2`. Raise the number whenever an icon file changes, so browsers fetch the new icons instead of showing their saved copies
- Social preview picture: `images/social_preview.png` (1200 × 630): the logo and 'Language learning, reimagined!' above the hero scene; not a logo file
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
- Home tab title: 'Languages, reimagined!' (the short version, tab only; Google usually shows this as the search title too). Search description, link preview and share picture: 'Language learning, reimagined!', with the description 'Founded by a language and cognitive scientist, Yaglot is building its first Mandarin course. Coming soon!' (20 November 2026). The site name 'Yaglot' is given to Google by a WebSite tag in the Home page head. `sitemap.xml` lists every page for Google except the construction placeholder, and `robots.txt` points to it; add any new page to the sitemap. Construction page: 'Yaglot is coming soon!'
- Pages live at yaglot.com, yaglot.com/construction (construction.html), yaglot.com/privacy (privacy.html), yaglot.com/terms (terms.html, terms and conditions), yaglot.com/contact (contact.html), yaglot.com/faqs (faqs.html), yaglot.com/mission (mission.html), yaglot.com/team (team.html) and yaglot.com/careers (careers.html); 404.html forwards old addresses such as /privacy to the right page

---

#### 1. Visual identity

Warm, playful and hand-made: a sketchbook of Taiwan. Felt-tip doodle scenes sit behind clean, flat interactive elements (buttons, cards, form) with dark ink outlines, so the whole site feels like one drawn page.

**Key characteristics**
- Cream and parchment surfaces, never pure white page backgrounds
- Terracotta (`#b85c38`) for the brand, buttons and Chinese characters (superseded, see section 5)
- Dark brown ink (`#3a2f2a`) outlines on cards, buttons and drawings
- Noto Serif for headings, Noto Sans for body text and UI
- Chunky ink shadows that press down on click
- Wobbly, slightly uneven corners and small tilts
- Three monkeys (see, hear, speak) on the construction page

---

#### 2. Colour palette

All values are hex. Neutrals are warm (yellow-brown undertone), never cool grey.

##### Surfaces

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#f5f4ed` | Page background (parchment) |
| `--surface` | `#faf9f5` | Cards, postcard, phrase cards |
| `--sand` | `#efe7d6` | Features section background |
| `--sky` | `#fffaf0` | Cream paper; header background |
| Hero sky | `#d6eaf5` | Hero section background |

##### Text and ink

| Token | Value | Usage |
|---|---|---|
| `--fg` | `#141413` | Headings and main text; footer background |
| `--ink` | `#3a2f2a` | Outlines and shadows |
| `--muted` | `#5e5d59` | Body paragraphs, consent line under the waitlist button |
| `--meta` | `#87867f` | Small print (copyright, privacy page date) |
| Pinyin | `#5f7146` | Pinyin under Chinese characters (olive) |
| Footer links | `#b0aea5` | Footer link text; hover `#e8a387`; headings ochre `#c8963e` |

##### Accent

| Token | Value | Usage |
|---|---|---|
| `--accent` | `#b85c38` | Buttons, links, characters, logo (superseded, see section 5) |
| `--accent-on` | `#f7f0e3` | Button text (a warm cream, slightly creamier than the page cream) |
| `--accent-hover` | `#9b4d2f` | Hover (superseded, see section 5) |
| `--accent-active` | `#833f26` | Pressed |

##### Icon tints (feature cards)

`--tint-clay` `#fbe0d6`, `--tint-sage` `#dcedf6`, `--tint-gold` `#fbecc4`, used in turn behind the feature icons.

##### Borders and dividers

- Header bottom: `2px dashed #e2d3b8`
- Postcard dividers: `#d8c9ad` dashes
- Footer divider: `1px dashed #3d3d3a`

---

#### 3. Typography

##### Fonts

| Font | Weights loaded | Usage |
|---|---|---|
| Noto Serif | 400, 500, 600, 700 (superseded, see section 3) | Headings (500); logo name (700, in the image files) |
| Noto Sans | 400, 500, 700 | Body, buttons, forms, banner |
| Noto Sans TC / SC | 400 | Chinese characters |

##### Sizes

Nine text sizes: 14, 16, 18, 20, 24, 32, 40, 48, 60 (plus the hero subtitle at 26) (superseded, see section 3). Headings use fixed steps per screen size so a lower level is never bigger than the one above it. Anything people need to read (including the consent line, form notes, warnings and footer links) is at least 16; 14 is only for small labels. The same kind of text uses the same size on every page.

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
| Buttons (superseded, see section 3), footer headings | 16 | 16 | 16 |
| Small text, only for labels people don't need to read closely ('ALMOST THERE', 'Last updated', copyright) | 14 | 14 | 14 |
| Chinese characters on phrase cards | 40 | 32 | 32 |
| Pinyin | 14 | 14 | 14 |
| Phrase-card meaning | 16 | 16 | 16 |

##### Visual sizes

| Element | Computer | Phone |
|---|---|---|
| Logo height | 72 | 52 (46 under 375px wide) |
| Doodle star beside the subtitle | 42 | 32 |
| Bell beside the waitlist heading | 50 | 40 |
| Monkey tiles (all three equal) | 140 | 112 (88 at 480px and below) |
| Feature icon in its blob | 40 in 76 | same |
| Stamp box and heart | 64×76, 30×28 | 48×58, 24×22 |
| Squiggle under headings | 120×14 | 96×12 |
| Wavy section edges | 72 tall | 40 tall |

##### Principles

- Headings at weight 500, tight line height (1.1 to 1.25)
- Body line height 1.6 (feature cards 1.65)
- Long headings use balanced wrapping so lines stay even

---

#### 4. Spacing

- Container: max width 1200px, centred; side padding 24px (16px on phones)
- Sections: hero 80px top (56px on phones); focus 72px / 96px; features 24px / 64px; waitlist 24px / 112px (80px on phones)
- Spacing should always look comfortable on phones and computers; check both after any change

---

#### 5. Corners

| Token | Value | Usage |
|---|---|---|
| `--wobble` | `18px 22px 16px 24px / 22px 16px 24px 18px` | Buttons, inputs, phrase cards |
| `--wobble-lg` | `28px 34px 24px 36px / 34px 24px 36px 28px` | Feature cards, postcard |

Uneven corners keep the hand-drawn feel; no sharp corners.

---

#### 6. Shadows

| Token | Value | Usage |
|---|---|---|
| Button | `0 5px 0 0 var(--ink)` | Primary buttons and the waitlist button |
| Phrase cards | `0 6px 0 0 rgba(58,47,42,0.85)` | Hero cards |
| `--chunky` | `0 6px 0 0 #dccfb6` | Feature cards (12px on hover) (superseded, see section 2) |
| Postcard | `0 8px 0 0 rgba(58,47,42,0.85)` | Waitlist postcard |

Buttons press down on hover (`translateY(3px)`, shadow 2px) and fully on click (`translateY(5px)`, no shadow).

---

#### 7. Components

##### Buttons
- 'Join the waitlist' buttons: terracotta `#b85c38` background, cream text, 2px ink border, `--wobble` corners, weight 700, 16px (superseded, see section 3)
- Every other button ('Send message', 'Get in touch' and future ones): the same, but olive `#5f7146` (class `btn-olive`; pressed `#45532f`), so 'Join the waitlist' stays the one terracotta action
- One button size everywhere (header, waitlist, contact form): 52px tall on computer and tablet, 48px on phone; the waitlist email box matches the button height
- Header: logo 72px tall on computer (52px on phone, 46px on screens narrower than 375px). Computer has 6px of padding above and 7px below (the logo image has a little transparent space of its own); phone has 12px above and below. The button keeps 5px of room underneath for its shadow. The visible space above and below is equal: 14px on computer, 12px on phone. The bar is 87px tall on computer and 79px on phone
- Text: 'Join the waitlist'

##### Phrase cards (hero)
- Surface background, 2px ink border, `--wobble`, small tilt, float animation
- Chinese characters in terracotta, pinyin in olive, meaning in muted text

##### Feature cards
- Surface background, 2px ink border, `--wobble-lg`, padding 32px 28px, tilts of -0.5°, 0.4° and -0.2°
- Icon in a blob-shaped tinted circle; lifts 6px on hover (superseded, see section 7)

##### Header
- Sticky under the banner, cream frosted background (`rgba(255,250,240,0.94)` + blur), dashed bottom border
- Logo left (72px tall, 52px on phones, 46px under 375px wide), button right; the logo wiggles on hover and takes you back to the top

##### Waitlist postcard
- Two halves: night-market picture and form; stacks on screens 1024px and below
- Dashed stamp with the bell, dashed postcard lines
- Email box: 2px ink border, `--wobble`, white, 52px tall (48px on phone), terracotta focus ring (superseded, see section 7); spoken label 'Email address' for screen readers (superseded, see section 7)
- Sends each sign-up to the Google Sheet through Google Apps Script with these fields (no personal data beyond the email):
  - `email`
  - `source`: `landing` (where the form is; other sources may be added later)
  - `device`: `computer`, `tablet` or `phone` (from the browser and screen)
  - `referrer`: where the visitor came from, worked out at sign-up: the link's `utm_source` tag if it has one; the app name when the page is opened inside an app's browser (`linkedin`, `instagram`, `threads`, `facebook`, `messenger`, `x`, `tiktok`, `snapchat`, `pinterest`, `line`, `wechat`, `telegram`, `youtube`); otherwise the referring site as a short name (`google`, `x`, `youtube`, `reddit`, `bing` and so on; any other site is just its name, for example `github`, `bbc`); or `direct`
  - `language`: the browser language (for example `en-GB`, `zh-TW`)
  - `region`: the time zone (for example `Europe/London`, `Asia/Taipei`)
  - `consent`: which privacy wording the visitor saw: `privacy-v26.7` now. Versions are named privacy-vYY.N: the year's last two digits, then a count that starts at 1 each year (privacy-v26.1 was the waitlist only; privacy-v26.2 added the contact form; privacy-v26.3 added cookie-free visit counting; privacy-v26.4 added time on page, scroll depth and FAQ questions opened; privacy-v26.5 added time zone and browser language to visits; privacy-v26.6 added which social media links were clicked; privacy-v26.7 added click and tap positions for a heatmap). Make a new version only when the meaning changes (what we collect, why, who we share it with, how long we keep it, or a consent line), not for typo fixes, and record the full wording of every version in the 'Privacy versions' document
- Nothing is stored on the visitor's device (no cookies or browser storage), so no cookie banner is needed
- Privacy notice page: `privacy.html` at yaglot.com/privacy (the earlier /privacy-notice address forwards there), linked from the consent line and the footer 'Privacy' link; same banner, header and footer as the construction page
- Shows 'Sending…' then a thank-you message
- Empty or wrong email is not sent: a warning shows under the box in dark terracotta (`--accent-active`, 16px bold) and the box gets a terracotta outline (superseded, see section 7): 'Please enter your email address.' or 'Please enter a valid email address, like name@example.com.' The warning disappears as soon as the visitor types

##### Stealth banner
- Sand stripes, warm grey text, blinking terracotta dot
- Sticky above 760px wide; scrolls away at 760px and below

##### Footer
- Near-black background, wavy top edge
- Four columns (two on phones), headings light terracotta (superseded, see section 5), links warm silver:
  - **About us:** Our mission, Our team, Careers
  - **Products:** Yaglot Pro, Yaglot Max, For schools, For businesses
  - **Help:** Contact us, FAQs, Privacy, Terms
  - **Follow us:** each network's own official logo, drawn to its official proportions (34px); LinkedIn's blue 'in' square (`#0A66C2`, small rounded corners, white 'in' filling the square as in LinkedIn's own logo) only for now (linkedin.com/company/yaglot)
  - **Follow us (19 November 2026):** seven icons in one colour (footer link grey #b0aea5, light terracotta #e8a387 on hover), 24px, grouped by what they are for: Threads, Instagram and Facebook (social); YouTube and TikTok (video); LinkedIn and X (news and work). Handles: Instagram, Threads, Facebook and X yaglotlabs; YouTube and TikTok yaglot. 44px to tap on phones and tablets
- Links go to the construction page until their pages exist (Our mission, Our team, Careers, Contact us, FAQs, Privacy and Terms go to their pages; Yaglot Pro, Yaglot Max, For schools and For businesses stay on the construction page for now)
- Our mission page: intro line, 'Why we're here', 'Starting with Mandarin' and 'What we believe': six beliefs in one column, each with the matching home page feature icon in a soft coloured blob (60px, 48px on phone), a 20px serif title and the text beside it; no boxes
- Our team page (19 November 2026): opens with the founder, Dr Chiawei Wang (PhD in Linguistics, University of Edinburgh), his name linking to his LinkedIn in a new tab, then the team's expertise (learning science, design and technology); 'How science shapes Yaglot' is one fun line ('Science in, fun out. Our research shapes every step of the way…'); the 'Who is behind Yaglot?' FAQ names the founder too; the Home team section says 'founded by a language and cognitive scientist' without the name; other people are added later
- Careers page: 'We're not hiring right now, but we'd love to hear from you' and a 'Get in touch' button that opens the contact form with 'Working with us' already picked (contact?topic=Working%20with%20us)
- FAQs page: intro line ('Answers to the questions we hear most. Can't find yours? Contact us.'), then 14 questions in five groups ('What does Yaglot mean?' first, then 'What is Yaglot?' and 'Who is behind Yaglot?') (About Yaglot; Launch and the waitlist; Plans and prices; Schools and businesses; Your privacy). Each question is a card that opens and closes (the same ink border, wobbly corners and chevron as the Topic dropdown); questions 18 bold, answers 18 (16 on phone). Never mention how paid plans work or any prices. Versions are named faqs-vYY.N (faqs-v26.7 now); record the full wording of every version in the 'Yaglot FAQs versions' document
- Company details (Yaglot Ltd, England and Wales, company number 17220926, registered office) are on the Terms page, which meets the UK requirement; the footer shows only the copyright line
- Contact page: intro line, then a form with light grey example text in the boxes, like the waitlist ('John Doe', 'you@example.com', 'What's on your mind?') (Name, Email, Topic dropdown: General question, Feedback or a problem, Schools and businesses, Working with us, Something else; Message) with 'Send message'; a hidden trap field and a 3-second minimum stop robots; sends `form=contact`, name, email, topic, message and `consent` to the same Google Apps Script, saved in the sheet's 'contact' tab (waitlist sign-ups go to the 'waitlist' tab; the script picks each tab by name and creates it if it's missing); 'Or email us at hello@yaglot.com' underneath; Message is limited to 500 words, with a counter under the box on the right ('0 / 500 words', dark terracotta bold when over) and the warning 'Please keep your message under 500 words.'; Name, Email and Message must be filled in, otherwise a warning shows under each missing box ('Please enter your name.', the same email warnings as the waitlist, 'Please write your message.') and nothing is sent; the Topic dropdown uses our own arrow (a rounded ink-coloured chevron) instead of the browser's
- Add back later: Pricing (when there is a public price), Investors (when fundraising), more social icons (as each account goes live)

---

#### 8. Component manifest

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

#### 9. Responsive breakpoints

| Width | Key changes |
|---|---|
| 1024px and above | Phrase cards float in the hero sky; map beside text; postcard side by side |
| Below 1024px | Phrase cards grouped above the hero picture (picture at 9:4); map above text; postcard stacked |
| 768px and below | Smaller text sizes, one-column feature cards, full-width button, two-column footer, 52px logo (46px under 375px) |
| 760px and below | Banner no longer sticky |
| 520px and below | Smaller banner text |
| 360px | Smallest checked width (superseded, see section 2); no sideways scrolling at any size |

---

#### 10. Motion and animation

| Animation | Timing | Element |
|---|---|---|
| Float | 5 to 6s, staggered | Phrase cards (smaller movement below 1024px); on very wide screens (2500px+) the right-hand card moves further right to stay clear of the sun |
| Star pop | 2s | Doodle star in the hero subtitle |
| Bell ring | 2s | Bell beside the waitlist heading |
| Banner dot blink | 2s (superseded, see section 6) | `.stealth-dot` |
| Feature card lift | 0.25s | `.feature-card` hover (superseded, see section 6) |
| Button press | 0.15s | Buttons |
| Monkeys | about 2.2s each, plus a gentle bob | Construction page: hands cover eyes, ears and mouth like the emoji |
| Progress bar and slide-in | 4s / 0.6s | Construction page |

---

#### 11. Page layout (home)

1. Banner and sticky header
2. Hero: heading, subtitle with star, button, phrase cards and Taiwan panorama
3. Wavy edge, then focus section: Taiwan map beside text
4. Features on sand: six feature cards
5. Waitlist postcard
6. Wavy edge, then footer

The construction page uses the same banner, header and footer around the Kenting beach picture, the three monkeys, a progress bar and a link back to the home page.

---

#### 12. Content guidelines

- **Voice**: Warm, encouraging, straightforward. Good for a secondary school student to understand.
- **Tone**: Approachable and human, not cold or techy.
- **Dashes**: Do NOT use m-dashes. Use single dash or rephrase (superseded, see section 8).
- **Quotes**: Single quotation marks for quotes, double for quotes within quotes.
- **Oxford commas**: Do NOT use (superseded, see section 8).
- **Placeholders**: Short honest placeholders (a dash, a grey block or a labelled stub) instead of invented metrics ('10× faster').
- **Avoid**: Lorem ipsum, generic emoji icon rows, left-border accent cards, purple gradients, warm beige page washes not justified by brand.

#### Design review (18 November 2026)

A visual designer checked every page at 1440, 1024, 768, 390 and 360. Rules that came out of it:

- **Contrast:** 'Last updated' is `#6f6e68`. Buttons and links stay brand terracotta `#b85c38` by choice (cream on terracotta measures 4.3:1, just under the WCAG AA 4.5:1; a darker `#a9532f` was tried and turned down) (superseded, see section 5)
- **Keyboard focus:** anything you can tab to (links, buttons, boxes, FAQ questions) shows a 3px dark terracotta outline (`--accent-active`), 3px away from it (superseded, see section 9)
- **Tap targets on phone:** footer links, the LinkedIn icon and '← Back to the home page' are at least about 44px tall to tap, without looking bigger
- **Form boxes:** contact Name, Email and Topic match the buttons: 52px tall (48px on phone); all text boxes (waitlist and contact) have 18px of space inside on the left and right (superseded, see section 7), so the text and example text line up the same way; the contact form labels (Name, Email, Topic, Message) and warnings are indented 20px (superseded, see section 7) so they line up with the text inside the boxes
- **Reading width:** paragraphs and lists on inner pages stop at about 66 characters a line (superseded, see section 2)
- **Intro spacing:** 20px from the squiggle to the intro line (or 'Last updated'), then 40px to the first content on every inner page (12px when a normal paragraph follows, as on Careers)
- **Waitlist heading:** room for the stamp is 48px (40px on phone), so the heading wraps over fewer lines
- **FAQ questions** balance their lines so no word sits alone; FAQ cards turn slightly darker on hover
- **FAQ cards** sit 16px under their heading with 16px between cards
- **Page titles** use line spacing 1.15 everywhere; intro lines 1.65 like the paragraphs; the base h3 size is 24
- **Tablet edges:** inner page text lines up with the logo at 768
- **Map section on phone:** heading, squiggle and text are all left-aligned
- **Links:** terracotta bold with no underline everywhere (the underline only appears on hover), including 'privacy notice' under the waitlist button (superseded, see section 7)
- **Fixed-height boxes** (waitlist email, contact Name, Email and Topic) have no top or bottom padding, so their text is never cut off on phones; the height alone sets the size
