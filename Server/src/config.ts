import 'dotenv/config'; 

export const config = {
    geminiApiKey: process.env.GEMINI_API_KEY ?? '',
    PORT: process.env.PORT ?? 3000,
    nodeEnv: process.env.NODE_ENV ?? "development",
};