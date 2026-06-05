import type { TransformMode, ResultLength, TransformResponse} from "../types/types";

const BASEURL = import.meta.env.VITE_API_URL || 'http://localhost:3000';
export async function transformText(Text: string, Mode: TransformMode, Length: ResultLength): Promise<TransformResponse>{


    const response = await fetch(`${BASEURL}/transform/`,{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({text: Text, mode: Mode, length: Length })
    })
    if(!response.ok){
        throw new Error(`Request failed: ${response.status}`);
    }
    const data =await response.json();
    console.log(data);
    return data.response;

}