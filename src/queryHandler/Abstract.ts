import { ReactNode } from "react";


export interface Query {
    userId?: string;
    content: string | Uint32Array;
}

abstract class QueryHandler {
    userId?: string;
    content: string | Uint32Array;
    response?: ReactNode;

    constructor(query: Query) {
        if (query.userId !== undefined) {
            this.userId = query.userId;
        }
        this.content = query.content;
    }

    abstract processQuery(): Promise<void>;

    abstract getRawResponse(): ReactNode;

    abstract getRenderedResponse(): ReactNode;
}

export default QueryHandler;
