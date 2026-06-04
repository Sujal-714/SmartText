import type { TransformResponse } from "../types/types";

export function OutputPanel({output,loading}: {output: TransformResponse, loading: boolean }){

    return(
        <>
        {loading && <div>Loading...</div>}
         {!loading && <div>{output.result}</div>}
        </>
    )
}