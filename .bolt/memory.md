# Project memory

## Product intent & audience

- "The Learning Lab" — Vietnamese education platform for personalized learning and exam prep (English, Math, Science).
- Audience: parents and students seeking 1-1 and small-group tutoring.
- Primary conversion: booking form → saves to Supabase `registrations` table → contact within 24h.
- Content language: Vietnamese.

## Brand personality & voice

- Trustworthy, academic, inspiring.
- Tone: professional yet warm; emphasizes personalized paths and measurable results.
- Highlights specific outcome metrics (e.g., +1.5 điểm, 92% success rate).

## Visual design & UX direction

- **Colors**: White (#FFFFFF) base, burgundy / đỏ đô (#7f1d2a → #a51e34 range) for dark sections and headings, warm gold/amber (#F59E0B) retained as accent for CTAs, icons, and highlights. Green preserved only for success states (checkmarks, form confirmation).
- **Layout**: Clean, modern, generous whitespace; 6 sections top-to-bottom (Header, Hero, Programs, Why Us, Testimonials, Booking) plus added Pricing and Footer.
- **Hero**: Gradient-based visual treatment (no stock photos; Pexels was unavailable) with floating accent card.
- **Cards**: Three-up horizontal cards with hover lift effects, icon + description + target audience + feature checklist + CTA.
- **Testimonials**: Burgundy background section for contrast; 5-star reviews with concrete improvement stats.
- **Interactions**: Scroll-reveal animations, smooth scrolling, sticky header; mobile slide-down menu.
- **Responsive**: Fully mobile-responsive; sticky nav collapses on small screens.
- **Tech styling**: Tailwind CSS theme configured with brand color system (burgundy + gold tokens).

## Decisions, constraints & rationale

- **Stack**: Vite + React, Tailwind CSS, Lucide React icons, `@/` path alias → `src/`.
- **Database**: Supabase used for `registrations` table; booking form writes directly and shows inline success message.
- **No stock images**: Pexels temporarily unavailable → premium gradient-based visuals chosen as reliable alternative.
- **Pricing section added** beyond the 6 requested sections to support the "Học phí" nav link.
- **Color pivot**: User requested đỏ đô + trắng direction; entire palette migrated from navy/amber to burgundy/gold while keeping amber value for accent compatibility. Build verified clean after migration.

## Open questions & assumptions

- Hero visual currently gradient-based; may revisit with real imagery if Pexels becomes available.
- No explicit backend validation or duplicate-phone handling on the booking form yet.
- Pricing section content is placeholder/teaser — actual tuition tiers not provided.
- Assume Vietnamese is the sole content locale for now; no i18n structure in place.
- Gold accent retained from prior scheme; user did not explicitly request changing it — may revisit if a different accent is preferred.