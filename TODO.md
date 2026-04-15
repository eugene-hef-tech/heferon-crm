# Heferon CRM Build Plan - Google Antigravity Build Queue

This document is the complete build specification for Antigravity. Every endpoint, every field, every trigger, every expected behaviour is defined here.

---

## PRIORITY 0 - PROJECT SETUP

✅ **DONE: Research completed**
✅ **DONE: STACK.md created**
✅ **DONE: RESEARCH.md created**
✅ **DONE: Scaffold files created**

- [ ] Initialize Next.js 14 project
  ```bash
  npx create-next-app@latest heferon-crm --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-git
  ```
- [ ] Install dependencies:
  ```bash
  npm install @supabase/supabase-js @supabase/auth-helpers-nextjs @prisma/client @dnd-kit/core @dnd-kit/sortable recharts @anthropic-ai/sdk clsx tailwind-merge date-fns
  npm install -D prisma typescript @types/react @types/node
  ```
- [ ] Set up Supabase project
- [ ] Initialize Prisma schema
- [ ] Configure Tailwind theme (dark mode #0C0F26, gradients #4ECDE4 -> #6853DB, Roboto font)

---

## PRIORITY 1 - DATA MODEL

### Prisma Schema

**User Model:**
- `id` UUID @id @default(uuid())
- `name` String
- `email` String @unique
- `role` Enum (OWNER, BD_SA, BD_UK_US, SETTER)
- `market` Enum (SA, UK, US, ALL)
- `avatar` String?
- `createdAt` DateTime @default(now())

**Deal Model:**
- `id` UUID @id @default(uuid())
- `title` String
- `stage` Enum (LEAD_CAPTURE, MQL, SQL, DISCOVERY, PROPOSAL, NEGOTIATION, CLOSED_WON, CLOSED_LOST)
- `market` Enum (SA, UK, US)
- `currency` Enum (ZAR, GBP, USD)
- `value` Decimal
- `dealType` Enum (DIAGNOSTIC, CUSTOM)
- `diagnosticLocked` Boolean @default(false)
- `assignedToId` UUID?
- `contactId` UUID?
- `companyId` UUID?
- `source` Enum (CLAY, LINKEDIN, REFERRAL, INBOUND, OTHER)
- `probability` Int?
- `closeDate` DateTime?
- `lastActivityAt` DateTime?
- `createdAt` DateTime @default(now())
- `updatedAt` DateTime @updatedAt
- `notes` String?
- `utmSource` String?
- `utmMedium` String?
- `utmCampaign` String?
- `isWon` Boolean @default(false)
- `isLost` Boolean @default(false)

**Contact Model:**
- `id` UUID @id @default(uuid())
- `firstName` String
- `lastName` String
- `email` String @unique
- `phone` String?
- `whatsapp` String?
- `linkedinUrl` String?
- `position` String?
- `companyId` UUID?
- `market` Enum (SA, UK, US)
- `leadSource` Enum (CLAY, LINKEDIN, REFERRAL, INBOUND, OTHER)
- `assignedToId` UUID?
- `sequenceStatus` Enum (NOT_STARTED, ACTIVE, REPLIED, OPTED_OUT) @default(NOT_STARTED)
- `lastOutboundTouch` DateTime?
- `createdAt` DateTime @default(now())
- `updatedAt` DateTime @updatedAt
- `notes` String?

**Company Model:**
- `id` UUID @id @default(uuid())
- `name` String
- `industry` String?
- `size` String?
- `market` Enum (SA, UK, US)
- `website` String?
- `linkedinUrl` String?
- `revenueEstimate` Decimal?
- `currency` Enum (ZAR, GBP, USD)
- `assignedToId` UUID?
- `createdAt` DateTime @default(now())
- `updatedAt` DateTime @updatedAt
- `notes` String?

**Activity Model:**
- `id` UUID @id @default(uuid())
- `type` Enum (CALL, EMAIL, LINKEDIN_MESSAGE, WHATSAPP, MEETING, DISCOVERY_CALL, PROPOSAL_SENT, FOLLOW_UP, NOTE)
- `direction` Enum (INBOUND, OUTBOUND)
- `subject` String
- `description` String?
- `dealId` UUID?
- `contactId` UUID?
- `companyId` UUID?
- `userId` UUID?
- `dueDate` DateTime?
- `completedAt` DateTime?
- `createdAt` DateTime @default(now())

**Notification Model:**
- `id` UUID @id @default(uuid())
- `userId` UUID
- `type` Enum (DISCOVERY_BOOKED, DIAGNOSTIC_PROPOSED, STALE_DEAL_7D, STALE_DEAL_14D, NEW_LEAD, DEAL_STAGE_CHANGE)
- `title` String
- `body` String
- `dealId` UUID?
- `contactId` UUID?
- `isRead` Boolean @default(false)
- `createdAt` DateTime @default(now())

---

## PRIORITY 2 - DEALS PIPELINE

### Kanban View `/deals`

- [ ] Market filter buttons: All | SA | UK | US
- [ ] Columns match pipeline stages EXACTLY
- [ ] Deal cards show:
  - Company name
  - Contact name
  - Deal value with currency symbol (R / £ / $)
  - Deal health indicator:
    - Green: <3 days since last activity
    - Amber: 3-7 days since last activity
    - Red: >7 days since last activity
  - Market colour code
- [ ] Drag and drop between stages
- [ ] Stage change automatically logs Activity
- [ ] Deal move to DISCOVERY triggers notification to Eugene
- [ ] Deal of type DIAGNOSTIC auto-locks value: R18500 / £2500 / $3500

### Deal Detail View `/deals/[id]`

- [ ] All fields editable
- [ ] Activity timeline
- [ ] Contact + Company links
- [ ] Stage history
- [ ] Generate Discovery Brief button

---

## PRIORITY 3 - CONTACTS & COMPANIES

### Contacts List `/contacts`

- [ ] Table view with all fields
- [ ] Filter by market, sequence status
- [ ] Search by name, email, company
- [ ] Create new contact form

### Contact Detail `/contacts/[id]`

- [ ] All fields including LinkedIn URL, WhatsApp number
- [ ] Linked deals list
- [ ] Activity timeline

### Companies `/companies`

- [ ] List and detail views
- [ ] Linked contacts list
- [ ] Linked deals list

---

## PRIORITY 4 - ACTIVITIES

- [ ] Activity feed sorted by date
- [ ] Filter by type, user, market
- [ ] Upcoming activities view
- [ ] Create new activity form with all 9 activity types
- [ ] Timeline view on all record pages

---

## PRIORITY 5 - DASHBOARD

### `/dashboard`

- [ ] 3 pipeline value cards: ZAR total / GBP total / USD total
- [ ] Deals by stage chart (all + per market)
- [ ] Team activity this week: calls, emails, LinkedIn per person
- [ ] Hot deals table: highest value at Discovery+
- [ ] Stale deals table: 7+ days amber, 14+ days red
- [ ] Weekly leaderboard: Miquel / Conrad / US Setter

---

## PRIORITY 6 - NOTIFICATIONS

- [ ] In-app notification centre
- [ ] Real-time via Supabase Realtime
- [ ] Notification rules:
  - Eugene: Discovery Booked, Diagnostic Proposed, stale 7d, new inbound
  - Miquel: SA pipeline updates, new SA leads
  - Conrad: UK/US pipeline updates, new UK/US leads

---

## PRIORITY 7 - API ENDPOINTS

All endpoints require authentication except webhooks (signed):

- [x] `POST /api/outbound/clay-webhook`
- [x] `POST /api/sequences/instantly-reply-webhook`
- [x] `POST /api/automations/n8n-endpoints`
- [x] `POST /api/ai-brief/discovery-brief`
- [x] `POST /api/scoring/lead-score`
- [ ] `GET /api/deals`
- [ ] `POST /api/deals`
- [ ] `PATCH /api/deals/[id]`
- [ ] `DELETE /api/deals/[id]`
- [ ] `GET /api/contacts`
- [ ] `POST /api/contacts`
- [ ] `PATCH /api/contacts/[id]`
- [ ] `DELETE /api/contacts/[id]`
- [ ] `GET /api/companies`
- [ ] `POST /api/companies`
- [ ] `PATCH /api/companies/[id]`
- [ ] `DELETE /api/companies/[id]`
- [ ] `GET /api/activities`
- [ ] `POST /api/activities`
- [ ] `GET /api/notifications`
- [ ] `PATCH /api/notifications/[id]/read`

---

## PRIORITY 8 - SEED DATA

Create 15 example deals across all markets and stages:
- 5 SA deals
- 5 UK deals
- 5 US deals
- Across all 8 stages

---

## NON-NEGOTIABLE RULES

✅ Eugene closes every deal: NO deal moves past DISCOVERY stage without Eugene assigned
✅ Diagnostic pricing fixed: R18500 / £2500 / $3500 - NEVER editable
✅ Pipeline stages match Bitrix24 EXACTLY
✅ All three markets run independently - no currency conversion
✅ Dark theme ONLY - #0C0F26 background
✅ Mobile first responsive design