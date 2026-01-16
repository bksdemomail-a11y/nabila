
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const generateFunnyAdviceBatch = async (): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 30 extremely unique, hilarious, and varied marriage advice/quotes strictly in Bangla for a couple named Nabila (the bride) and Spiderman (the groom). The wedding is on January 30th. Use ONLY Bangla characters (except for the names which can be in Bangla: নাবিলা and স্পাইডারম্যান). Tone should be funny, teasing, and lighthearted (mojak). Focus on domestic life, cooking, Spiderman's web, Nabila's temper, and household chores. Examples: 'নাবিলা, স্পাইডারম্যানকে কিন্তু ভালো ভালো রান্না করে খাওয়াবা!', 'স্পাইডারম্যান, জালের বদলে এখন থেকে বাজারের থলে বইতে হবে!', 'নাবিলা রাগ করলে স্পাইডারম্যান কি দেয়াল বেয়ে পালাবে?'. Ensure all 30 are distinct and funny.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            advices: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Array of 30 unique funny Bangla advices",
            },
          },
          required: ["advices"],
        },
      },
    });

    const data = JSON.parse(response.text);
    return data.advices || [];
  } catch (error) {
    console.error("Error generating advice:", error);
    return [
      "নাবিলা, স্পাইডারম্যানের জালে কিন্তু শেষমেশ আটকে গেলে!",
      "স্পাইডারম্যান, বিয়ের পর দেয়াল না বেয়ে বাজারের থলে বইতে হবে কিন্তু!",
      "নাবিলা, স্পাইডারম্যানকে ভালো ভালো পিঠা বানিয়ে খাওয়াবে তো?",
      "আর মাত্র কয়েকদিন, নাবিলা এখন থেকেই আয়নার সামনে বেশি সময় দিচ্ছে!",
      "স্পাইডারম্যান ছেলেটা আসলে হীরের টুকরো, নাবিলা একদম রাগ করবে না ওর ওপর।"
    ];
  }
};
