import { ReactNode } from "react";
import QueryHandler, { QueryInput } from "./Abstract";
import { IComponent } from "../rendering/interfaces";


class ImageQueryHandler extends QueryHandler {
    constructor() {
        super();
    }

    acceptInput(query: QueryInput): void {
    }

    getRawResponse(): IComponent[] | undefined {
        return;
    }

    getRenderedResponse(): ReactNode {
        return;
    }
}