import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.EXPO_PUBLIC_GEMINI_API_KEY 
});

export const fetchChatResponse = async (message: string): Promise<string> => {
  try {
    const timeoutDuration = 15000; // 15-second timeout
    let timeoutHandle: NodeJS.Timeout;

    const timeoutPromise = new Promise<never>((_, reject) => {
      timeoutHandle = setTimeout(() => {
        reject(new Error("Request timed out. Please try again."));
      }, timeoutDuration);
    });

    const responsePromise = ai.models.generateContent({
      model: "gemini-2.0-flash", 
      contents: message,
    });

    const response = await Promise.race([responsePromise, timeoutPromise]);
    clearTimeout(timeoutHandle!);

    if (!response.text) {
      throw new Error("Empty response from the API");
    }
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error instanceof Error ? error : new Error("Failed to get response");
  }
};

export const cleanPrompt = (prompt: string): string =>
  prompt.trim().replace(/\s+/g, " ");

export const generateId = (): string =>
  Math.random().toString(36).substring(2, 9);
