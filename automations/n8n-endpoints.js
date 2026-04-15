/**
 * HEFERON CRM - N8N ENDPOINTS
 * 
 * Endpoints for n8n workflow triggers
 * 
 * 1. DEAL STAGE CHANGE TRIGGER
 *    Endpoint: POST /api/automations/n8n/deal-stage-change
 *    Triggers when any deal is moved between stages
 *    Payload: { dealId, oldStage, newStage, dealValue, contact, company, assignedTo }
 * 
 * 2. STALE DEAL TRIGGER
 *    Endpoint: POST /api/automations/n8n/stale-deal
 *    Triggers when deal has no activity for 7+ days (amber) / 14+ days (red)
 *    Payload: { dealId, daysSinceActivity, dealValue, contact, company, assignedTo }
 * 
 * 3. WEEKLY PIPELINE SUMMARY TRIGGER
 *    Endpoint: POST /api/automations/n8n/weekly-summary
 *    Runs every Sunday 18:00 UTC+2
 *    Payload: {
 *      totalPipelineValue: { ZAR, GBP, USD },
 *      dealsByStage: [ stageName, count, value ],
 *      teamActivity: { Miquel, Conrad, US_Setter },
 *      newDealsThisWeek: number,
 *      dealsWonThisWeek: number,
 *      dealsLostThisWeek: number
 *    }
 * 
 * 4. NEW LEAD TRIGGER
 *    Endpoint: POST /api/automations/n8n/new-lead
 *    Triggers when new lead enters pipeline
 *    Payload: { dealId, contact, company, source, market, assignedTo }
 * 
 * 5. DISCOVERY BOOKED TRIGGER
 *    Endpoint: POST /api/automations/n8n/discovery-booked
 *    Triggers when deal moves to Discovery stage
 *    Payload: { dealId, contact, company, discoveryDate, assignedTo }
 * 
 * All endpoints require API key authentication
 * All return 200 OK with success status
 */