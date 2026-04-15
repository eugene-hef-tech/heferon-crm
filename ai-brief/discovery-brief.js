/**
 * HEFERON CRM - AI DISCOVERY BRIEF GENERATOR
 * 
 * Endpoint: POST /api/ai-brief/discovery-brief
 * 
 * Called before Eugene joins a discovery call
 * Pulls contact + company + deal history from CRM
 * Sends to Claude API
 * Returns structured brief
 * 
 * Expected Request Body:
 * {
 *   "dealId": "uuid"
 * }
 * 
 * Logic:
 * 1. Fetch Deal, Contact, Company records
 * 2. Fetch all Activity history for this deal
 * 3. Build context prompt with all data
 * 4. Call Claude 3 Opus API with system prompt:
 *    "You are Eugene's sales assistant. Analyze this prospect data
 *     and create a 1-page discovery call brief. Include:
 *     - Company intel summary
 *     - Likely pain points based on industry/size
 *     - Diagnostic pitch angle
 *     - Previous touch history
 *     - Recommended next steps
 *     - 3 opening questions"
 * 5. Save generated brief to Deal record
 * 6. Return structured JSON response
 * 
 * Response:
 * {
 *   "success": true,
 *   "brief": {
 *     "companySummary": "string",
 *     "painPoints": ["string"],
 *     "pitchAngle": "string",
 *     "previousTouches": ["string"],
 *     "openingQuestions": ["string"],
 *     "recommendedSteps": ["string"]
 *   }
 * }
 */