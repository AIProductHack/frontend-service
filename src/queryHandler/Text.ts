import { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import { createPage } from "../rendering/service";
import { IComponent } from "../rendering/interfaces";
import { Typography } from "@mui/material";
import { error } from "console";

async function getResponse(text: string): Promise<IComponent[]> {
    const headers: Headers = new Headers();
    headers.set('Accept', 'application/json');
    // const backendUrl: string = process.env.BACKEND_API;
    const backendUrl = "http://127.0.0.1:8080";
    const request: RequestInfo = new Request(`${backendUrl}/query/text?text=${text}`, {
        method: "POST",
        headers: headers
    });
    return fetch(request)
        .then(res => res.json())
        .then(res => {
            return res.data as IComponent[];
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

class TextQueryHandler extends QueryHandler {
    constructor(query: Query) {
        super(query);
        this.processQuery();
    }

    async processQuery(): Promise<void> {
        if (typeof this.content !== 'string') {
            return;
        }
        const data = await getResponse(this.content);
        this.response = createPage(data);
    }

    getRawResponse(): ReactNode {
        return this.response;
    }

    getRenderedResponse(): ReactNode {
        return this.response;
    }
}

export default TextQueryHandler;
