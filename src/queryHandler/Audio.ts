import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";


class AudioQueryHandler extends QueryHandler {
    constructor(query: Query) {
        super(query);
        this.processQuery();
    }

    async processQuery(): Promise<void> {
        return;
    }
    getRawResponse(): ReactNode {
        return;
    }

    getRenderedResponse(): ReactNode {
        return;
    }
}

export default AudioQueryHandler;