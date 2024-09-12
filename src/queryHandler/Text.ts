import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import axios from "axios";


class TextQueryHandler extends QueryHandler {
    constructor(query: Query) {
        super(query);
        this.processQuery();
    }

    async processQuery(): Promise<void> {
        let backendUrl: string = process.env.BACKEND_API;
        if (typeof this.content !== 'string') {
            console.log("Invalid input type");
            return;
        }
        let data = await axios.post(`${backendUrl}/query/text?text=${this.content}`)
        .then(function(response) {
            if (response.status !== 200) {
                console.log("Error quering API");
            }
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
        this.response = data;
    }

    getRawResponse(): ReactNode {
        return this.response;
    }

    getRenderedResponse(): ReactNode {
        return this.response;
    }
}

export default TextQueryHandler;
