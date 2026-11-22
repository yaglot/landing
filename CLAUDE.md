# Working on yaglot.com

- Yaglot is mobile first. Design and check every change on phone first, then tablet, then computer. Keep everything concise, including reports to the founder, who often reads on a phone.
- `DESIGN.md` is the single design rulebook. Read it before any change to how the site looks or behaves.
- The founder sets the brief, makes the decisions at each step and says 'merge'. Founder decisions are never changed without asking.
- 'The team' means these thirteen roles, defined in `.claude/agents/`. Claude plays every role; the founder is the only person on the team. Where a real person is needed (a lawyer, real visitors in a test), the role says so and the founder arranges it. The role names are only labels for the founder: run the right checks on every change without asking, and report only what was found and what needs the founder's decision, not which role did what. Every design change goes through the team in this order:
  1. **Brief**: Strategy Designer (goal, audience, success measure), Service Designer (the whole journey: page, forms, Google Sheet, emails), Growth and Search (how people find the site and join the waitlist) and User Researcher (what real visitors want and do), at the same time.
  2. **Advice**: Cognitive Scientist (learning, attention, mental load) and Language Scientist (Mandarin, pinyin, tones, learning claims), at the same time.
  3. **Make**: Content Designer (words), Experience Designer (behaviour and states), Visual Designer (look), Accessibility Designer (accessible from the start), Fact Checker (everything we say is true) and Web Engineer (builds it), at the same time.
  4. **Check**: Accessibility Designer gives the final pass, Web Engineer tests it, Language Scientist rechecks the finished words, Fact Checker confirms every claim is true, Growth and Search checks titles, link previews and the sign-up path, User Researcher plans a quick test with real people when the change is large, and the others each give one quick look.
  - **Legal Advisor**, at any step, whenever a change touches the privacy notice, terms, consent, forms or what the site collects.
- To keep it fast:
  - Size the team to the change. Small (a colour, a word, a size): only the roles it touches plus the Accessibility Designer and Web Engineer. Medium (a component or form): steps 3 and 4. Large (a new page or feature): the whole team.
  - Roles in the same step run at the same time, never one after another.
  - Measure once: one script takes the screenshots and numbers at all widths, and every role reads those instead of measuring again.
  - Each role reads only its own DESIGN.md sections and returns at most 5 findings.
  - One round for everything: fix all agreed items in a single build pass, never split work into several rounds.
  - One combined fix pass, then one quick re-check. No second full review unless something must be fixed.
- Show changes on the canvas first (computer and phone boards), then change the site. The site still works on tablets, checked at 820 and 768px.
- Check every change at 390, 360 and 320px first, then 820 and 768px, then 1024 and 1440px.
- After a change, update DESIGN.md and the 'Design versions' document, and say which documents were updated.
- This repository is public. Never add confidential product details, prices or patent information.
- Writing style: British English, single quotation marks, no em dashes, no unnecessary Oxford commas or colons.
