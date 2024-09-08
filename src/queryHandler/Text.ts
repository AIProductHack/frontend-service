import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import { IComponent } from "../rendering/interfaces";


class TextQueryHandler extends QueryHandler {

    constructor(query: Query) {
        super(query);
    }

    processQuery(): ReactNode {
        return;
    }

    getRawResponse(): ReactNode {
        return;
    }

    getRenderedResponse(): ReactNode {
        return;
    }
}

export default TextQueryHandler;