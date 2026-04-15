# Heferon CRM Research

## BITRIX24 RESEARCH

### GitHub Repositories

**github.com/bitrix24:**
- `b24restdocs` - Official REST API documentation source
- `b24jssdk` - JavaScript SDK for REST API calls
- `b24ui` - UI component library
- `b24phpsdk` - PHP SDK
- `framework3-prototype` - Framework prototype
- `app-template-automation-rules` - Template for automation rule apps

**github.com/bitrix-tools:**
- `crest` - Tiny PHP SDK for REST calls
- `env-docker` - Docker environment
- `cli` - CLI tooling
- `b24-rest-docs` - Additional REST docs
- `framework-docs` - Framework documentation
- `bitrix24-dev-hub` - Developer hub

---

### DEAL FIELDS

| Field | Type | Description |
|-------|------|-------------|
| ID | integer | Deal ID |
| TITLE | string | Deal title |
| TYPE_ID | crm_status | Deal type |
| CATEGORY_ID | crm_category | Sales funnel/pipeline |
| STAGE_ID | crm_status | Current stage |
| STAGE_SEMANTIC_ID | string | Stage group (in_process/won/lost) |
| PROBABILITY | integer | Win probability % |
| CURRENCY_ID | crm_currency | Currency |
| OPPORTUNITY | double | Deal value/amount |
| COMPANY_ID | crm_company | Associated company |
| CONTACT_ID | crm_contact | Primary contact |
| BEGINDATE | date | Start date |
| CLOSEDATE | date | Expected close date |
| ASSIGNED_BY_ID | user | Responsible person |
| SOURCE_ID | crm_status | Lead source |
| LAST_ACTIVITY_TIME | datetime | Last activity timestamp |
| UTM_SOURCE/MEDIUM/CAMPAIGN | string | Tracking parameters |

---

### CONTACT FIELDS

ID, HONORIFIC, NAME, SECOND_NAME, LAST_NAME, PHOTO, BIRTHDATE, TYPE_ID, SOURCE_ID, POST (position), COMMENTS, ASSIGNED_BY_ID, COMPANY_IDS, PHONE (multi), EMAIL (multi), WEB (multi), IM (multi), LAST_ACTIVITY_TIME, custom fields.

---

### COMPANY FIELDS

ID, TITLE, COMPANY_TYPE, LOGO, ADDRESS fields (physical + legal), BANKING_DETAILS, INDUSTRY, EMPLOYEES, CURRENCY_ID, REVENUE, ASSIGNED_BY_ID, CONTACT_ID, PHONE/EMAIL/WEB/IM (multi), LAST_ACTIVITY_TIME.

---

### ACTIVITY TYPES

- Call / Email (system types)
- Custom activity types (registered via API)
- Universal activities (todo-style)
- Configurable activities (timeline entries)
- No native WhatsApp, LinkedIn, or Discovery Call types

---

### PIPELINE STAGES

**Heferon Live Bitrix24 Stages (Exact Order):**
1. ✅ **Lead Capture / New Lead**
2. ✅ **Marketing Qualified Lead**
3. ✅ **Sales Qualified Lead**
4. ✅ **Discovery / Needs Analysis**
5. ✅ **Proposal / Solution Presentation**
6. ✅ **Negotiation / Review**
7. ✅ **Closed Won**
8. ✅ **Closed Lost**

---

### WEBHOOK EVENTS

- `onCrmDealAdd`
- `onCrmDealUpdate`
- `onCrmDealDelete`
- Webhook trigger for automation rules

---

## FEATURE GAPS (BITRIX24 vs HEFERON CRM)

| Gap | Bitrix24 | Heferon CRM |
|-----|----------|-------------|
| Multi-market pipeline view | ❌ Single pipeline | ✅ SA/UK/US color-coded |
| Currency per deal in Kanban | ❌ One currency | ✅ ZAR/GBP/USD per card |
| Deal health indicator | ❌ None | ✅ Green/amber/red status |
| AI lead scoring | ❌ None | ✅ Automatic scoring |
| Discovery call brief | ❌ None | ✅ Claude API generation |
| WhatsApp logging | ❌ Not native | ✅ Native activity type |
| LinkedIn logging | ❌ Not native | ✅ Native activity type |
| Diagnostic product lock | ❌ Free-text | ✅ Fixed pricing lock |
| Eugene closer enforcement | ❌ No rule | ✅ Hard rule at Discovery+ |
| Instantly.ai integration | ❌ Weak | ✅ Webhook → stage update |
| Clay enrichment webhook | ❌ Manual import | ✅ Auto contact+deal |
| n8n workflow triggers | ❌ Limited | ✅ Full trigger suite |
| Slack alerts | ❌ Not native | ✅ Reply / stale alerts |
| Weekly leaderboard | ❌ None | ✅ Activity board |
| Mobile UX | ❌ Clunky | ✅ Mobile-first |
| Stale deal surfacing | ❌ Manual | ✅ Auto-flagged 7/14 days |
| Per-market reporting | ❌ Combined | ✅ ZAR/GBP/USD separate |
| Performance | ❌ Slow | ✅ Fast purpose-built |

---

## LIVE BITRIX24 OBSERVATIONS

- No market segmentation in Kanban view
- No deal health/staleness indicators on cards
- No LinkedIn or WhatsApp fields natively
- Activity feed is cluttered and hard to scan
- No AI features
- Automation rules are basic (stage-change triggers only)