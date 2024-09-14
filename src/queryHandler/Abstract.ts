import { ReactNode } from "react";


export interface Query {
    userId?: string;
    model: string;
    content: string | Uint32Array;
}

abstract class QueryHandler {
    userId?: string;
    content: string | Uint32Array;
    model: string;
    response?: ReactNode;

    constructor(query: Query) {
        if (query.userId !== undefined) {
            this.userId = query.userId;
        }
        this.content = query.content;
        this.model = query.model;
    }

    abstract processQuery(): Promise<void>;

    abstract getRawResponse(): ReactNode;

    abstract getRenderedResponse(): ReactNode;
}

export default QueryHandler;
