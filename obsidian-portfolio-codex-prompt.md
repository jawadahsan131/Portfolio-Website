# Obsidian Portfolio — Codex Prompt
> Copy the entire content below and paste it into Codex.

---

You are an expert full-stack developer. Build a complete, production-ready personal portfolio website from scratch using the exact specifications below. Every detail matters — code quality, visual fidelity, and architectural correctness are all required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TECH STACK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Frontend:
- Next.js 14+ (App Router, TypeScript strict mode)
- Tailwind CSS v3 (custom design tokens from DESIGN SYSTEM below)
- Shadcn UI (for accessible base components)
- Framer Motion (page transitions, scroll animations, hover effects)
- Lucide React (icons)
- next-mdx-remote (MDX content)
- next-themes (dark/light mode, localStorage persist)

Backend:
- FastAPI (Python 3.11+)
- Pydantic v2 (schema validation)
- python-dotenv (env vars)
- aiosmtplib or smtplib (email delivery)
- CORS middleware enabled

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DESIGN SYSTEM — OBSIDIAN PORTFOLIO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Brand Personality: Sophisticated, forward-thinking, precise. Quiet confidence + technical mastery.
Visual Direction: Modern Minimalist fused with Subtle Glassmorphism. Dark-mode-first. Premium executive feel.

COLOR TOKENS (add to tailwind.config.ts):
  background:          #131313
  surface:             #131313
  surface-low:         #1c1b1b
  surface-mid:         #201f1f
  surface-high:        #2a2a2a
  surface-highest:     #353534
  surface-bright:      #393939
  on-surface:          #e5e2e1
  on-surface-variant:  #c1c6d7
  outline:             #8b90a0
  outline-variant:     #414755
  primary:             #adc6ff   (Electric Blue accent)
  primary-container:   #4b8eff
  on-primary:          #002e69
  secondary:           #4edea3   (Emerald Green)
  secondary-container: #00a572
  on-secondary:        #003824
  error:               #ffb4ab
  on-error:            #690005

TYPOGRAPHY:
  Google Fonts: Montserrat (headings), Inter (body/UI)

  display-lg:        Montserrat 700, 64px/72px, letter-spacing -0.02em
  display-lg-mobile: Montserrat 700, 40px/48px, letter-spacing -0.02em
  headline-lg:       Montserrat 600, 32px/40px
  headline-md:       Montserrat 600, 24px/32px
  body-lg:           Inter 400, 18px/28px
  body-md:           Inter 400, 16px/24px
  label-md:          Inter 500, 14px/20px, letter-spacing 0.01em
  caption:           Inter 400, 12px/16px

SPACING (multiples of 8px):
  unit-xs: 4px | unit-sm: 8px | unit-md: 16px
  unit-lg: 24px | unit-xl: 48px
  container-max: 1280px | gutter: 24px
  margin-desktop: 64px | margin-mobile: 20px

BORDER RADIUS:
  sm: 4px | DEFAULT: 8px | md: 12px | lg: 16px | xl: 24px | full: 9999px

ELEVATION & GLASSMORPHISM:
  Level 0 (base):    bg #131313
  Level 1 (cards):   bg #1A1A1A, border 1px solid rgba(255,255,255,0.06)
  Level 2 (overlays): backdrop-blur 12–20px, bg rgba(26,26,26,0.8)
  Shadows: 0 10px 30px rgba(0,0,0,0.5) — soft, large radius only

COMPONENT RULES:
  Buttons primary:   bg #4b8eff, text white, rounded-lg
  Buttons secondary: ghost, border 1px rgba(255,255,255,0.125), hover bg rgba(255,255,255,0.03)
  Cards:             bg #1A1A1A, border 1px rgba(255,255,255,0.06), rounded-lg
  Inputs:            bg #1A1A1A, border 1px #414755, focus border #4b8eff + glow 2px
  Chips/Tags:        bg #252525, text on-surface-variant, rounded-full, label-md
  Navbar:            sticky, glassmorphism blur, bg rgba(19,19,19,0.85)
  Skill bars:        fill color #4edea3 (Emerald Green)
  Section comments:  use monospace prefix labels like `// SECTION_LABEL` as eyebrow text above headings

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT STRUCTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

frontend/
├── app/
│   ├── layout.tsx              # Root layout, fonts, ThemeProvider, metadata
│   ├── page.tsx                # Home page
│   ├── about/page.tsx
│   ├── projects/
│   │   ├── page.tsx            # Projects listing with search + filter
│   │   └── [slug]/page.tsx     # Project detail (MDX)
│   ├── gallery/page.tsx        # Full gallery page (NOT just a single-screen view)
│   ├── services/page.tsx       # NEW: Services page
│   ├── resume/page.tsx
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── rss/route.ts
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky glass navbar with all nav links
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── ThemeToggle.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── BlogCard.tsx
│   │   ├── SkillCard.tsx
│   │   ├── Timeline.tsx
│   │   ├── ContactForm.tsx
│   │   ├── ResumeViewer.tsx
│   │   ├── SearchInput.tsx
│   │   ├── FilterTabs.tsx
│   │   ├── CTASection.tsx
│   │   ├── GalleryGrid.tsx     # Masonry/grid gallery component
│   │   └── ServiceCard.tsx     # Card for services page
│   └── sections/
│       ├── Hero.tsx
│       ├── AboutPreview.tsx
│       ├── FeaturedProjects.tsx
│       ├── SkillsSection.tsx
│       ├── ExperienceTimeline.tsx
│       ├── LatestBlogs.tsx
│       └── ContactCTA.tsx
├── content/
│   ├── blog/
│   │   ├── building-scalable-apis.mdx
│   │   └── nextjs-performance-tips.mdx
│   ├── projects/
│   │   ├── ai-chat-assistant.mdx
│   │   └── portfolio-website.mdx
│   └── resume/
│       └── resume.pdf          # placeholder path
├── lib/
│   ├── mdx.ts                  # getAllBlogs, getBlogBySlug, getAllProjects, getProjectBySlug
│   ├── metadata.ts             # shared metadata helpers
│   └── utils.ts
├── hooks/
│   ├── useScrollAnimation.ts
│   └── useSearch.ts
├── types/
│   ├── blog.ts
│   ├── project.ts
│   └── service.ts
├── public/
│   ├── images/
│   └── resume.pdf
├── styles/
│   └── globals.css
├── tailwind.config.ts          # full design token integration
├── next.config.mjs
├── tsconfig.json
└── .env.example

backend/
├── app/
│   ├── api/
│   │   └── contact.py          # POST /api/contact
│   ├── schemas/
│   │   └── contact.py          # ContactSchema (Pydantic v2)
│   ├── services/
│   │   └── email.py            # Email delivery service
│   └── core/
│       └── config.py           # Settings from env vars
├── main.py                     # FastAPI app, CORS, /health
└── .env.example

docs/
└── README.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PAGES & SECTIONS — DETAILED SPEC
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## NAVBAR
- Sticky, glassmorphism blur (backdrop-blur-md, bg rgba(19,19,19,0.85))
- Logo: monospace brand name left-aligned
- Nav links: Home | Gallery | Projects | About | Services | Resume | Blog | Contact
- Right: "Hire Me" primary CTA button
- Active link indicator (bottom border, primary color)
- Mobile: hamburger menu with slide-down drawer
- CRITICAL: All nav links must route to full dedicated pages — not scroll-to-section only

## HOME PAGE (/):
  1. Hero Section:
     - `// COMPUTE_GRID_ACTIVE` eyebrow label (monospace, secondary color)
     - Large display headline: Name split across two lines, second line in primary color
     - Subtitle: Professional title + short intro paragraph
     - Two CTAs: "View Projects" (primary) + "Download Resume" (secondary ghost)
     - Right side: animated terminal/stats card (fake telemetry widget — model latency, tokens/sec, GPU cluster, memory usage, training progress bar)
     - Subtle background: dot grid or noise texture

  2. About Preview strip

  3. Featured Projects: numbered list cards (01, 02, 03) — title, description, tech chip tags, icons for SPECS and MONITOR links

  4. Skills Section: split layout — skill progress bars (left) + tech stack chips grid (right). Section eyebrow: `// AI_STACK`

  5. Experience Timeline: `// DEPLOYMENT_HISTORY` eyebrow, vertical timeline with dot indicators

  6. Academic Records: `// RESEARCH_LAB` eyebrow, side-by-side degree cards

  7. Latest Blogs: `// ML_OBSERVABILITY_LABS` eyebrow, 3-column blog cards with thumbnail images, category chip, date, title, excerpt, read link

  8. Contact CTA Section

  9. Footer: logo, nav links, copyright, social links, terminal-style button "Open_AI_Shell (Terminal)"

## GALLERY PAGE (/gallery):
  CRITICAL FIX: The gallery MUST be a full scrollable page with:
  - Hero banner at top: "// VISUAL_INDEX" eyebrow + "Gallery" headline + subtitle
  - Filter tabs: All | AI Visualizations | Architecture | Infra | Research | UI/UX
  - Responsive masonry grid (3 cols desktop, 2 cols tablet, 1 col mobile)
  - Each gallery item: image thumbnail, hover overlay with title + category + "View" button
  - Lightbox modal on click (full-screen image view with prev/next navigation)
  - Lazy loading with blur placeholder
  - DO NOT render gallery as a single viewport-locked screen — it must be scrollable and show all items

## SERVICES PAGE (/services) — NEW PAGE:
  - `// WHAT_I_OFFER` eyebrow + "Services" headline
  - Intro paragraph about professional services offered
  - Service cards grid (2 cols desktop, 1 col mobile):
    Each card has: icon (Lucide), service title, description, list of deliverables, CTA "Get in Touch" button
  - Services to include:
    1. AI/ML Engineering — model training, fine-tuning, inference optimization
    2. Backend API Development — FastAPI, REST, async services
    3. Full Stack Development — Next.js frontend + FastAPI backend
    4. LLM Integration — RAG pipelines, LangChain, vector stores
    5. MLOps & Infrastructure — GPU clusters, CI/CD, Kubernetes
    6. Technical Consulting — architecture review, code audits, roadmapping
  - Process Section below cards: numbered steps (01 Discovery → 02 Planning → 03 Execution → 04 Delivery)
  - CTA strip at bottom: "Ready to collaborate?" with email + hire me button

## PROJECTS PAGE (/projects):
  - `// PROJECT_INDEX` eyebrow + "Projects" headline
  - Search input + filter tabs: All | AI | Machine Learning | NLP | FastAPI | Next.js | Full Stack
  - Numbered project list (01, 02...) with: title, description, tech chips, GitHub + Demo icon links
  - Clicking a project navigates to /projects/[slug]

## PROJECT DETAIL PAGE (/projects/[slug]):
  MDX-driven. Fields: Title, Overview, Problem, Solution, Architecture, Features, Screenshots, Challenges, Learnings, GitHub URL, Demo URL.
  Layout: sidebar (TOC + links) + main content area

## ABOUT PAGE (/about):
  - Personal story section
  - Education cards
  - Full experience timeline
  - Skills breakdown
  - Certifications
  - Interests/hobbies chips

## RESUME PAGE (/resume):
  - Quick stats: Projects | Skills | Years Experience | Education
  - Embedded PDF viewer (iframe or react-pdf)
  - "Download Resume" + "Download CV" buttons
  - Full timeline of experience inline below

## BLOG PAGE (/blog):
  - `// ML_OBSERVABILITY_LABS` eyebrow + "Insights & Research" headline
  - Search + category filter tabs: All | AI | Machine Learning | FastAPI | Next.js | Tutorials | Career
  - Blog card grid: thumbnail, category chip, date, title, excerpt, "Read" link
  - /blog/[slug]: reading time, table of contents, syntax highlighting (Shiki or Prism), share buttons, related articles

## CONTACT PAGE (/contact):
  - Form fields: Name, Email, Subject, Message
  - Client validation + honeypot field (hidden)
  - POST to FastAPI /api/contact
  - Rate limiting indicator
  - Success state (green confirmation) + Error state (red message)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANIMATIONS (Framer Motion)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Page transitions: fade + slight Y slide on route change
- Sections: staggered fade-in-up on scroll enter (useInView)
- Hero stats card: animate numbers counting up on mount
- Cards: subtle scale + border glow on hover
- Skill bars: animated fill on scroll enter
- Timeline dots: sequential reveal on scroll
- All animations: easeOut, duration 0.4–0.6s, NO jarring motion
- Respect prefers-reduced-motion

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
SEO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Metadata API in each page (title, description, OG image, Twitter card)
- Canonical URLs
- JSON-LD structured data (Person schema on home, Article on blog posts)
- /sitemap.ts (auto-generated)
- /robots.ts
- /rss/route.ts (RSS feed from blog MDX)
- Target: Lighthouse Performance >95, SEO 100, Accessibility >95

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ACCESSIBILITY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Semantic HTML (header, main, nav, section, article, footer)
- ARIA labels on all interactive elements
- Keyboard navigation + visible focus rings (primary color)
- Skip to main content link
- Alt text on all images
- WCAG 2.1 AA contrast ratios

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTENT SYSTEM (MDX)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
lib/mdx.ts must export:
  getAllBlogs()        → sorted by date desc
  getBlogBySlug(slug) → parsed MDX + frontmatter
  getAllProjects()     → with filter/search support
  getProjectBySlug(slug)

Blog frontmatter schema:
  title, slug, date, category, tags[], excerpt, thumbnail, readingTime

Project frontmatter schema:
  title, slug, date, category, tags[], description, thumbnail, github, demo, featured: boolean

Seed at least 2 example blog posts and 2 projects as .mdx files with realistic AI/ML content.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
FASTAPI BACKEND
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
main.py:
  - GET /health → { status: "ok", timestamp }
  - POST /api/contact → validates ContactSchema, sends email, returns { success: true, message }
  - CORS: allow origins from ALLOWED_ORIGINS env var
  - Rate limiting: 5 requests/hour per IP on /api/contact

ContactSchema (Pydantic v2):
  name: str (1–100 chars)
  email: EmailStr
  subject: str (1–200 chars)
  message: str (10–2000 chars)
  honeypot: str = "" (if non-empty, silently discard)

email.py:
  - Async SMTP send using aiosmtplib
  - Template: HTML email with all contact fields
  - Config from env: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, TO_EMAIL

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ENV FILES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

frontend/.env.example:
  NEXT_PUBLIC_API_URL=http://localhost:8000
  NEXT_PUBLIC_SITE_URL=https://yoursite.com
  NEXT_PUBLIC_GA_ID=

backend/.env.example:
  SMTP_HOST=smtp.gmail.com
  SMTP_PORT=587
  SMTP_USER=your@email.com
  SMTP_PASS=yourpassword
  TO_EMAIL=your@email.com
  ALLOWED_ORIGINS=http://localhost:3000,https://yoursite.com

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
README (docs/README.md)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Include:
  - Project overview
  - Local dev setup (frontend + backend)
  - Deployment guide (Vercel + Render/Railway)
  - How to add blog posts and projects (MDX)
  - Environment variable reference
  - Customization guide (name, colors, content)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CRITICAL CONSTRAINTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1. TypeScript strict mode across all frontend files — no `any` types
2. All pages are full standalone routes, not viewport-locked views
3. Gallery page MUST be scrollable with masonry grid + lightbox — not just a single-screen component
4. Services page is a new addition — add it to the navbar and sitemap
5. No database — all content from MDX files or static data
6. $0 deployment cost — Vercel free tier (frontend) + Render free tier (backend)
7. Mobile-first CSS — all layouts responsive at 320px minimum
8. Framer Motion animations only — no CSS keyframe hacks
9. next-themes for dark/light toggle — default dark
10. All components are modular, reusable, and typed with proper TypeScript interfaces
11. No placeholder "Lorem Ipsum" — all sample content must be realistic AI/ML/dev themed
12. Code must be clean, well-commented, and production-deployable without modification

Generate the complete codebase now. Output every file with full content.
