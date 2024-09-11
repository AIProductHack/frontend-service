import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import axios from "axios";


class TextQueryHandler extends QueryHandler {

    constructor(query: Query) {
        super(query);
    }

    processQuery(): ReactNode {
        backendUrl: string = process.env.BACKEND_API;
        const response = axios.post(`${backendUrl}/accept_text`,


        )
    }

    getRawResponse(): ReactNode {
        return;
    }

    getRenderedResponse(): ReactNode {
        return;
    }
}

export default TextQueryHandler;
