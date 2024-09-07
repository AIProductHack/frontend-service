import { ReactNode } from "react";
import QueryHandler, { QueryInput } from "./Abstract";
import { IComponent } from "../rendering/interfaces";


class JsonQueryHandler extends QueryHandler {
    constructor() {
        super();
    }

    private sanitiseInput(text: string) {
        return text.trim().replace("*", "");
    }

    acceptInput(query: QueryInput): void {
        if (typeof (query.content) !== 'string') {
            return;
        }
        var text = this.sanitiseInput(query.content);
    }

    getRawResponse(): IComponent[] | undefined {
        return;
    }

    getRenderedResponse(): ReactNode {
        return;
    }
}