# Heferon CRM Tech Stack

## CHOSEN STACK: Next.js 14 + Supabase + Prisma + Tailwind CSS

---

## STACK CHOICE REASONING

| Concern | Choice | Justification |
|---------|--------|---------------|
| **Framework** | Next.js 14 (App Router) | - Full-stack in single repository<br>- API Routes for all webhooks/integrations<br>- Server Side Rendering for fast mobile load<br>- Vercel zero-config deployment<br>- Edge functions for low-latency webhooks<br>- Excellent TypeScript support |
| **Database** | Supabase (PostgreSQL) | - Real-time subscriptions BUILT-IN<br>- Row Level Security for permission handling<br>- Full PostgreSQL relational engine<br>- Generous free tier, hosted<br>- Auth built-in<br>- Multi-region deployment options |
| **ORM** | Prisma | - Type-safe schema definitions<br>- Auto-generated migrations<br>- Excellent Supabase PostgreSQL compatibility<br>- Query builder with auto-complete<br>- Studio for database browsing |
| **Auth** | Supabase Auth | - JWT authentication<br>- Integrates natively with RLS<br>- Email / Magic Link / Social providers<br>- No additional service required |
| **Real-time** | Supabase Realtime | - WebSocket subscriptions on database changes<br>- Live pipeline updates across all users<br>- No extra pub/sub service needed |
| **Styling** | Tailwind CSS | - Fastest way to implement brand design<br>- Dark mode support out of the box<br>- Mobile-first responsive layouts<br>- Zero runtime overhead<br>- Perfect for the dark/cyan/purple brand |
| **Drag & Drop** | @dnd-kit/core | - Best modern React DnD library<br>- Accessible, performant<br>- Touch support for mobile<br>- Keyboard navigation |
| **Deployment** | Vercel | - Zero-config Next.js deployment<br>- Edge functions<br>- Instant previews for every commit<br>- Global CDN |
| **Integrations** | Next.js API Routes | - Clay webhook endpoint<br>- Instantly.ai reply webhook<br>- n8n trigger endpoints<br>- Claude API integration |
| **AI** | Anthropic Claude API | - Best for long context discovery briefs<br>- Best reasoning capabilities<br>- Official SDK via `@anthropic-ai/sdk` |
| **Notifications** | Supabase Realtime + In-App | - Real-time notification centre<br>- No external service required |
| **Charts** | Recharts | - Lightweight React-native charts<br>- Good for dashboard metrics<br>- Customisable styling |

---

## ALTERNATIVES NOT CHOSEN

| Technology | Reason for rejection |
|------------|----------------------|
| **Rails / Django** | Slower development, worse JS ecosystem for real-time |
| **Firebase** | No relational SQL, harder complex reporting queries |
| **Plain Express** | No SSR, more frontend setup required |
| **Remix** | Smaller ecosystem, less Vercel native |
| **MongoDB** | Relational data (Deals → Contacts → Companies → Activities) requires SQL |
| **Hasura** | Overkill, Supabase does everything needed natively |

---

## PACKAGE LIST

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@supabase/auth-helpers-nextjs": "^0.10.0",
    "@supabase/supabase-js": "^2.42.0",
    "@prisma/client": "^5.12.0",
    "@dnd-kit/core": "^6.1.0",
    "@dnd-kit/sortable": "^8.0.0",
    "recharts": "^2.12.0",
    "@anthropic-ai/sdk": "^0.19.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "date-fns": "^3.6.0"
  },
  "devDependencies": {
    "prisma": "^5.12.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.57.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.12.0"
  }
}
```

---

## ENVIRONMENT VARIABLES

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
DATABASE_URL=

# Third Party Integrations
ANTHROPIC_API_KEY=
SLACK_WEBHOOK_URL=

# App Configuration
NEXT_PUBLIC_APP_URL=http://localhost:3000