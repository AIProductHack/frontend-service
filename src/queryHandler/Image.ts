import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";


class ImageQueryHandler extends QueryHandler {
    constructor(query: Query) {
        super(query);
        this.processQuery();
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