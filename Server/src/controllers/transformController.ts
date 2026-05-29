import {Request,Response} from 'express';
import { TransformRequest,TransformResponse } from '../types';
import { transformText } from '../services/gemini';
import { TransformMode,ResultLength } from '../types';

export const transformTextRes = async(req: Request<{},{},{text: string,mode: TransformMode,length: ResultLength}>, res: Response)=>{
 
    const {text,mode,length} = req.body as TransformRequest;
    if(!text || !mode || !length){
        return res.status(400).json({error: "text, mode and length are required"});
    }
    try {
    const result = await transformText(text,mode,length);
    const response: TransformResponse= {result};
    res.json({response});
        
} catch (error) {
     console.error(error);
    res.status(500).json({error: "Failed to Transform Text"});
    
}
}