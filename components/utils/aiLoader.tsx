export async function createGeminiChat(apiKey: string) {
  const { GoogleGenAI } = await import('@google/genai');
  return new GoogleGenAI({ apiKey });
}