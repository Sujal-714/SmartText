import { useState } from "react";
import { transformText } from "./api/client";
import type { TransformMode,TransformResponse,ResultLength} from "./types/types";
import { TextInput } from "./components/TextInput";
import { ModeSelector } from "./components/ModeSelector";
import { OutputPanel } from "./components/OutputPanel";
import { LengthSelector } from "./components/LengthSelector";

function App(){
  const [text,setText]=useState('');
  const [mode,setMode]=useState<TransformMode>('summarize');
  const [length,setLength]=useState<ResultLength>('bullet');
  const [result,setResult]=useState<TransformResponse>({
    result: "",
  });
  const [loading,setLoading]=useState(false);

  async function handleTransfrom(){
    setLoading(true);
    const data: TransformResponse = await transformText(text,mode,length);
    setResult(data);
     setLoading(true);
  
  }

  return(
    <>
    <TextInput value={text} onChange={setText} />
    <ModeSelector value={mode} onChange={setMode} />
    <LengthSelector value={length} onChange={setLength} />
    <button onClick={handleTransfrom}>Transform</button>
    <OutputPanel output={result} loading={loading} />
    </>
  )


}

export default App;