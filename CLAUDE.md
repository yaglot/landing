# Working on yaglot.com

- Yaglot is mobile first. Design and check every change on phone first, then tablet, then computer. Keep everything concise, including reports to the founder, who often reads on a phone.
- `DESIGN.md` is the single design rulebook. Read it before any change to how the site looks or behaves.
- 'The team' means these eight roles, defined in `.claude/agents/`. Every design change goes through the team in this order:
  1. **Brief**: Strategy Designer (goal, audience, success measure) and Service Designer (the whole journey: page, forms, Google Sheet, emails), at the same time.
  2. **Advice**: Cognitive Scientist (learning, attention, mental load) and Language Scientist (Mandarin, pinyin, tones, learning claims), at the same time.
  3. **Make**: Content Designer (words), Experience Designer (behaviour and states) and Visual Designer (look), at the same time, then the site is changed.
  4. **Check**: Accessibility Designer gives the final pass, while the others each give one quick look.
- To keep it fast:
  - Size the team to the change. Small (a colour, a word, a size): only the roles it touches plus the Accessibility Designer. Medium (a component or form): steps 3 and 4. Large (a new page or feature): the whole team.
  - Roles in the same step run at the same time, never one after another.
  - Measure once: one script takes the screenshots and numbers at all widths, and every role reads those instead of measuring again.
  - Each role reads only its own DESIGN.md sections and returns at most 5 findings.
  - One round for everything: fix all agreed items in a single build pass, never split work into several rounds.
  - One combined fix pass, then one quick re-check. No second full review unless something must be fixed.
  - Founder decisions are never changed without asking.
- Show changes on the canvas first (computer and phone boards), then change the site. The site still works on tablets, checked at 820 and 768px.
- Check every change at 390, 360 and 320px first, then 820 and 768px, then 1024 and 1440px.
- After a change, update DESIGN.md and the 'Design versions' document, and say which documents were updated.
- This repository is public. Never add confidential product details, prices or patent information.
- Writing style: British English, single quotation marks, no em dashes, no unnecessary Oxford commas or colons.
