/**
 * HEFERON CRM - AI LEAD SCORING ENGINE
 * 
 * Endpoint: POST /api/scoring/lead-score
 * 
 * Calculates lead score based on:
 * - Market fit
 * - Engagement depth
 * - Company size
 * - Response speed
 * - Sequence activity
 * 
 * Runs:
 * - Every hour for all active deals
 * - When new activity is logged
 * - When deal stage changes
 * 
 * Score Parameters:
 * +30%: Market (US = +20, UK = +15, SA = +10)
 * +25%: Company size (Enterprise > Mid-market > SMB)
 * +20%: Response time (replied within 24h = +20)
 * +15%: Sequence engagement (opened, clicked)
 * +10%: Deal value
 * 
 * Scoring Scale: 0-100
 * 
 * Response:
 * {
 *   "success": true,
 *   "dealId": "uuid",
 *   "score": 85,
 *   "scoreBreakdown": {
 *     "marketFit": 20,
 *     "companySize": 25,
 *     "responseSpeed": 20,
 *     "engagement": 12,
 *     "dealValue": 8
 *   },
 *   "rank": "TOP_10_WEEKLY"
 * }
 * 
 * Surfaces top 10 highest scoring leads to Eugene each Monday
 */