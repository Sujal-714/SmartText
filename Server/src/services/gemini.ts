import {GoogleGenAI} from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;
if(!apiKey){
    throw new Error("Api Key is Missing");
}

const genAI = new GoogleGenAI({apiKey});

type TransformMode = 'summarize' | 'explain';
type ResultLength = 'short' | 'bullet' | 'detailed';