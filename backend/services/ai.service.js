const { GoogleGenAI } = require("@google/genai");
const cleanJson = require("../utils/cleanJson");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function extractCRMData(records) {
  const prompt = `
You are an expert CRM data migration assistant.

Convert the given CSV records into the following JSON schema.

Return ONLY a JSON array.

Schema:

{
  "created_at":"",
  "name":"",
  "email":"",
  "country_code":"",
  "mobile_without_country_code":"",
  "company":"",
  "city":"",
  "state":"",
  "country":"",
  "lead_owner":"",
  "crm_status":"",
  "crm_note":"",
  "data_source":"",
  "possession_time":"",
  "description":""
}

Rules:

1. Detect column names automatically.
2. Normalize emails.
3. Remove country code from phone numbers.
4. Extract country code separately.
5. Guess company if obvious.
6. Fill crm_status using:
   GOOD_LEAD_FOLLOW_UP
   DID_NOT_CONNECT
   BAD_LEAD
   SALE_DONE
7. Fill missing fields with "".
8. Skip only completely unusable rows.
9. Return ONLY valid JSON.

CSV Records:
${JSON.stringify(records)}
`;

  const response = await ai.models.generateContent({
    model: "models/gemini-3-flash-preview",
    contents: prompt,
  });

  const cleaned = cleanJson(response.text);

  return JSON.parse(cleaned);
}

module.exports = {
  extractCRMData,
};
