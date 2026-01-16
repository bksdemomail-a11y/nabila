
import { GoogleGenAI, Type } from "@google/genai";

export const generateFunnyAdviceBatch = async (): Promise<string[]> => {
  const apiKey = process.env.API_KEY || (window as any).process?.env?.API_KEY;
  
  if (!apiKey) {
    console.warn("API_KEY is missing. Using fallback advices.");
    return getFallbackAdvices();
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 30 extremely unique, hilarious, and varied marriage advice/quotes strictly in Bangla for a couple named Nabila (the bride) and Spiderman (the groom). The wedding is on January 30th. Use ONLY Bangla characters (except for the names: নাবিলা and স্পাইডারম্যান). Tone should be funny and teasing (mojak). Focus on domestic life, Spiderman's web, Nabila's temper, and household chores.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advices: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ["advices"],
        },
      },
    });

    const data = JSON.parse(response.text);
    return data.advices || getFallbackAdvices();
  } catch (error) {
    console.error("Error generating advice:", error);
    return getFallbackAdvices();
  }
};

function getFallbackAdvices() {
  return [
    "নাবিলা, স্পাইডারম্যানের জালে কিন্তু শেষমেশ আটকে গেলে!",
    "স্পাইডারম্যান, বিয়ের পর দেয়াল না বেয়ে বাজারের থলে বইতে হবে কিন্তু!",
    "নাবিলা, স্পাইডারম্যানকে ভালো ভালো পিঠা বানিয়ে খাওয়াবে তো?",
    "আর মাত্র কয়েকদিন, নাবিলা এখন থেকেই আয়নার সামনে বেশি সময় দিচ্ছে!",
    "নাবিলা রাগ করলে স্পাইডারম্যান কি দেয়াল বেয়ে পালাবে?",
    "স্পাইডারম্যানের জালের চেয়েও শক্তিশালী হলো নাবিলার ভালোবাসা!",
    "বিয়ের পর স্পাইডারম্যানের সব পাওয়ার চলে যাবে নাবিলার হাতে!"
  ];
}
