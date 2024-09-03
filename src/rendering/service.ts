import React from "react";
import { IComponent } from "./interfaces";
import { Components } from "./constants";

export function createPage(data?: IComponent): React.ReactNode {
    if (!data) return null;

    function createComponent(item: IComponent): React.ReactNode {
        const { type, data } = item;
        const { id, children, content, ...rest } = data;
        
        return React.createElement(
            Components[type] as any,
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

    return renderer(data);
}