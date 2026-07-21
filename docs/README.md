#  Portfolio

A production-ready personal portfolio with a dark-mode-first Next.js frontend and a FastAPI contact backend.

## Local Development

Install and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

Install and run the backend:

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

## Deployment

Deploy the frontend to Vercel on the free tier. Set `NEXT_PUBLIC_API_URL` to the backend URL and `NEXT_PUBLIC_SITE_URL` to the final domain.

Deploy the backend to Render or Railway on the free tier. Set SMTP credentials and `ALLOWED_ORIGINS` to include the frontend domain.

## Adding Content

Add blog posts in `frontend/content/blog` with frontmatter fields: `title`, `slug`, `date`, `category`, `tags`, `excerpt`, `thumbnail`, and `readingTime`.

Add projects in `frontend/content/projects` with frontmatter fields: `title`, `slug`, `date`, `category`, `tags`, `description`, `thumbnail`, `github`, `demo`, and `featured`.

## Environment Variables

Frontend:

- `NEXT_PUBLIC_API_URL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID`

Backend:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `TO_EMAIL`
- `ALLOWED_ORIGINS`

## Customization

Update profile details, services, skills, gallery entries, education, and timeline data in `frontend/lib/data.ts`. Design tokens live in `frontend/tailwind.config.ts`.
