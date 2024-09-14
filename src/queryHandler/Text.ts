import React, { ReactNode } from "react";
import QueryHandler, { Query } from "./Abstract";
import { createPage } from "../rendering/service";
import { IComponent } from "../rendering/interfaces";
import { parseCSS } from "../rendering/parser";

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
            const { data, css } = res;
            const style = parseCSS(css);
            // const style = componentData.css;
            data.forEach((element: IComponent) => {
                const componentStyle = style.filter(
                    (item) => item.selector.replace(".", "") === element.properties.className
                );
                if (componentStyle.length > 0) {
                    element.properties.style = componentStyle[0].properties;
                };

            });
            // const style = cssToJson(css) as React.CSSProperties;
            const components: IComponent[] = data;
            return components;
        })
        .catch(error => {
            console.log(error);
            return [];
        });
}

class TextQueryHandler extends QueryHandler {
    constructor(query: Query) {
        super(query);
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
