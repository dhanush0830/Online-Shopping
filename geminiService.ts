
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getShoppingAssistantResponse = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: `You are a helpful and witty shopping assistant for Nexus Marketplace. 
        You help users find products, compare prices, and give style advice. 
        Keep your responses short, conversational, and helpful. 
        Mention products like "Ultraboost Running Shoes" or "Wireless Noise Cancelling Headphones" if relevant.`,
      }
    });

    const response = await chat.sendMessage({ message: userPrompt });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a bit of trouble connecting to my brain right now. Can we try again in a moment?";
  }
};
