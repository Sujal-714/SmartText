import type { TransformMode } from "../types/types";

export function ModeSelector({value,onChange}: {value:TransformMode; onChange: (v: TransformMode)=> void}){
    return(
        <>
        <label>
<input type="radio"
name='transformMode'
value='summarize'
checked={value =='summarize'}
onChange={() => onChange('summarize')}
/>
Summarize
</label>
<label>
<input type="radio"
name='transformMode'
value='explain'
checked={value =='explain'}
onChange={() => onChange('explain')}
/>
Explain
</ label>
 </>
 )
}