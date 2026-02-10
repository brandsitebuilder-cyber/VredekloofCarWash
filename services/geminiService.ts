
import { GoogleGenAI, Type } from "@google/genai";
// Fix: Import Recommendation type from types.ts
import { Recommendation } from "../types";

// Fix: Correctly initialize GoogleGenAI with named parameter and exclusive use of process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Fix: Added explicit return type Promise<Recommendation | null> for better type safety
export const getAIRecommendation = async (userDescription: string): Promise<Recommendation | null> => {
  // Fix: Using gemini-3-flash-preview as recommended for basic text tasks with structured output.
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `The user says their car condition is: "${userDescription}". Based on this, recommend the best package (basic, premium, or executive) and explain why.`,
    config: {
      systemInstruction: "You are a professional car detailing consultant. Be concise and persuasive. Suggest one of the following packages: 'basic', 'premium', or 'executive'. Also suggest one extra service like 'Engine Bay Clean' or 'Ceramic Coating'.",
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          packageId: { type: Type.STRING, description: 'One of: basic, premium, executive' },
          reasoning: { type: Type.STRING, description: 'Concise explanation for the choice.' },
          suggestedAddons: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ['packageId', 'reasoning', 'suggestedAddons']
      }
    }
  });

  try {
    // Fix: Access response text property directly and handle potential empty responses to avoid parsing errors.
    const text = response.text;
    if (!text) {
      console.warn("Gemini API returned an empty response.");
      return null;
    }
    return JSON.parse(text.trim()) as Recommendation;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return null;
  }
};
