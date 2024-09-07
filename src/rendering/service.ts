import React from "react";
import { IComponent } from "./interfaces";
import { Components } from "./constants";

export function createPage(data?: Array<IComponent>): React.ReactNode {
    if (!data) return null;

    function createComponent(item: IComponent): React.ReactNode {
        const { title, properties } = item;
        const { id, children, content, ...rest } = properties;
        
        return React.createElement(
            Components[title] as any,
            {
                ...rest,
                id,
                key: id,
            } as any,
            content,
            Array.isArray(children)
                ? children.map(renderer)
                : renderer(null),
        );
    }

    function renderer(config: IComponent | null): React.ReactNode {
        if (!config) return null;
        return createComponent(config);
    }

    return data.map(createComponent);
}