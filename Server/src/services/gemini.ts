import { config } from "../config";
import {GoogleGenAI} from "@google/genai";
import { TransformMode, ResultLength } from "../types";
const apiKey = config.geminiApiKey;
if(!apiKey){
    throw new Error("Api Key is Missing");
}

const genAI = new GoogleGenAI({apiKey});

function buildPrompt ( text: string, mode: TransformMode, length: ResultLength ): string {
  
        const lengthRef = () => {
            switch(length){
                case 'bullet': return 'plain bullet points using a dash (-) for each point. No bold text, no markdown, no intro sentence. Just the bullets';
                case 'short': return 'short paragraph';
                case 'detailed': return 'detailed way';
            }
        }

        if(mode == 'explain'){
            return `Explain the following text in very simple, plain language anyone can understand. Avoid jargon,use short sentences:\n${text}\nin${lengthRef()}`;
        }else{
            return `Summarize the following text without missing out on essential details making it easier to understand by anyone:\n \n${text}\nin${lengthRef()}`;
        }
        
    }
    export async function transformText(text:string, mode:TransformMode, length: ResultLength): Promise<string> {
        console.log("API KEY:", process.env.GEMINI_API_KEY ? "loaded ✓" : "MISSING ✗");
        const prompt = buildPrompt(text,mode,length);
        const response = await genAI.models.generateContent({
            model: 'gemini-3.1-flash-lite',
            contents: prompt
        });
        return response.text ?? '';
    }
