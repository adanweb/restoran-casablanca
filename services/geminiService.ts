import { GoogleGenAI, Type } from "@google/genai";
import { MenuItem } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getMealRecommendations = async (personNames: string[], menu: MenuItem[], t: any) => {
  const foodItems = menu.map(item => item.name);

  const prompt = t.gemini.prompt
    .replace('{foodItems}', JSON.stringify(foodItems))
    .replace('{personNames}', JSON.stringify(personNames));

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              meal: { type: Type.STRING }
            },
            required: ['name', 'meal']
          }
        }
      }
    });

    const jsonText = response.text.trim();
    const result = JSON.parse(jsonText);
    return result;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw new Error(t.challenge.error.apiError);
  }
};