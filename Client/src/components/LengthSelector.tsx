import type { ResultLength } from "../types/types";

export function LengthSelector({value,onChange}: {value:ResultLength; onChange: (v: ResultLength)=> void}){
    return(
        <>
        <label>
<input type="radio"
name='transformlength'
value='short'
checked={value =='short'}
onChange={() => onChange('short')}
/>
Short
</label>
<label>
<input type="radio"
name='transformlength'
value='bullet'
checked={value =='bullet'}
onChange={() => onChange('bullet')}
/>
Bullet
</ label>
<label>
<input type="radio"
name='transformlength'
value='detailed'
checked={value =='detailed'}
onChange={() => onChange('detailed')}
/>
Detailed
</ label>
 </>
 )
}