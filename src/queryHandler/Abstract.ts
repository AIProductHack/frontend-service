import { ReactNode } from "react";
import { IComponent } from "../rendering/interfaces";


export interface QueryInput {
    userId?: string;
    content: string | Uint32Array;
}

abstract class QueryHandler {
    abstract acceptInput(query: QueryInput): void;

    abstract getRawResponse(): IComponent[] | undefined;

    abstract getRenderedResponse(): ReactNode;
}

export default QueryHandler;