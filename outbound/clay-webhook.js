/**
 * HEFERON CRM - CLAY WEBHOOK
 * 
 * Endpoint: POST /api/outbound/clay-webhook
 * 
 * Receives enriched prospect data from Clay
 * Creates Contact + Deal automatically
 * Assigns to correct BD by market
 * 
 * Expected Request Body:
 * {
 *   "firstName": "string",
 *   "lastName": "string",
 *   "email": "string",
 *   "phone": "string",
 *   "whatsapp": "string",
 *   "linkedinUrl": "string",
 *   "position": "string",
 *   "company": {
 *     "name": "string",
 *     "industry": "string",
 *     "size": "string",
 *     "market": "SA | UK | US",
 *     "website": "string",
 *     "linkedinUrl": "string",
 *     "revenueEstimate": "number"
 *   },
 *   "source": "CLAY | LINKEDIN | REFERRAL | INBOUND | OTHER",
 *   "utmSource": "string",
 *   "utmMedium": "string",
 *   "utmCampaign": "string"
 * }
 * 
 * Logic:
 * 1. Validate request signature
 * 2. Check if Contact already exists (by email)
 * 3. Create Company if doesn't exist
 * 4. Create Contact if doesn't exist
 * 5. Assign BD: SA = Miquel, UK/US = Conrad
 * 6. Create Deal with stage "Lead Capture / New Lead"
 * 7. Create Activity log entry
 * 8. Return 200 OK with dealId, contactId, companyId
 * 
 * Response:
 * {
 *   "success": true,
 *   "dealId": "uuid",
 *   "contactId": "uuid",
 *   "companyId": "uuid"
 * }
 * 
 * Error Responses:
 * 400: Invalid request body
 * 401: Invalid signature
 * 500: Server error
 */