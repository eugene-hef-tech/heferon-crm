/**
 * HEFERON CRM - INSTANTLY.AI REPLY WEBHOOK
 * 
 * Endpoint: POST /api/sequences/instantly-reply-webhook
 * 
 * Fires when a prospect replies to cold email sequence
 * Updates deal stage to First Contact Made
 * Creates activity log entry
 * Fires Slack alert to Eugene
 * 
 * Expected Request Body:
 * {
 *   "lead_id": "string",
 *   "email": "string",
 *   "first_name": "string",
 *   "last_name": "string",
 *   "company_name": "string",
 *   "campaign_id": "string",
 *   "campaign_name": "string",
 *   "reply_snippet": "string",
 *   "reply_body": "string",
 *   "reply_type": "POSITIVE | NEUTRAL | NEGATIVE | OUT_OF_OFFICE",
 *   "reply_date": "ISO 8601 string",
 *   "sender_email": "string"
 * }
 * 
 * Logic:
 * 1. Find Contact by email
 * 2. Find associated Deal
 * 3. Update Deal stage to "Sales Qualified Lead"
 * 4. Update Contact sequence status to REPLIED
 * 5. Create Activity log entry (type: EMAIL, direction: INBOUND)
 * 6. Post Slack notification to #sales channel:
 *    - Prospect name, company, reply snippet
 *    - Direct link to Deal in CRM
 *    - Reply type indicator
 * 7. Send in-app notification to Eugene
 * 8. Return 200 OK
 * 
 * Response:
 * {
 *   "success": true,
 *   "dealId": "uuid",
 *   "contactId": "uuid"
 * }
 * 
 * Error Responses:
 * 404: Contact not found
 * 400: Invalid request
 */