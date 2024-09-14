import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import JsonParser from "../rendering/parser";
import { createPage } from "../rendering/service";


class JsonQueryHandler extends QueryHandler {
    parser: JsonParser;

    constructor(query: Query) {
        super(query);
        this.parser = new JsonParser();
        this.processQuery();
    }

    async processQuery(): Promise<void> {
        if (typeof(this.content) !== 'string') {
            return;
        }
        var components = this.parser.getComponent(this.content);
        this.response = createPage(components);
    }

    getRawResponse(): ReactNode {
        return;
    }

    getRenderedResponse(): ReactNode {
        return this.response;
    }
}

export default JsonQueryHandler;