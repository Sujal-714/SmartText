export type TransformMode = 'summarize' | 'explain';
export type ResultLength = 'short' | 'bullet' | 'detailed';

//Transform Request Type
export type TransformRequest = {
    text: string;
    mode: TransformMode;
    length: ResultLength;
}

export type TransformResponse = {
    result: string;
}

