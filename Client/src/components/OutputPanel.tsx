import type { TransformResponse } from "../types/types";

export function OutputPanel({output,loading}: {output: TransformResponse | null, loading: boolean }){

    return(
        <>
        {loading && <div>Loading...</div>}
         {!loading && output &&
         (<div>{output.result}</div>)}
        </>
    )
}