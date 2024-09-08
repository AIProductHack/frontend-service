import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import { IComponent } from "../rendering/interfaces";


class ImageQueryHandler extends QueryHandler {
    constructor(query: Query) {
        super(query);
    }

    processQuery(): void {
        return;
    }

    getRawResponse(): ReactNode {
        return;
    }

    getRenderedResponse(): ReactNode {
        return;
    }
}

export default ImageQueryHandler;