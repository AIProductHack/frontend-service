import React from "react";
import { IComponent } from "./interfaces";

type ComponentJson = {
    data: IComponent[];
    css?: string;
}

class JsonParser {
    component?: IComponent[];

    private sanitiseInput(text: string): string {
        return text.trim().replace("*", "");
    }

    private parseJson(text: string): void {
        const componentData = JSON.parse(text) as ComponentJson;
        const style = parseCSS((componentData.css !== undefined) ? componentData.css : "");
        console.log(style);
        // const style = componentData.css;
        componentData.data.forEach(element => {
            const componentStyle = style.filter(
                (item) => item.selector.replace(".", "") === element.properties.className
            );
            if (componentStyle.length > 0) {
                element.properties.style = componentStyle[0].properties;
            };
            
        });
        this.component = componentData.data;
        console.log(this.component);
    }

    getComponent(text: string): IComponent[] | undefined {
        text = this.sanitiseInput(text);
        this.parseJson(text);
        return this.component;
    }
}

export interface CSSRule {
    selector: string;
    properties: { [key: string]: string };
}

export function parseCSS(css: string): CSSRule[] {
    const cssRules: CSSRule[] = [];

    const ruleRegex = /([^{]+)\{([^}]+)\}/g;
    let match: RegExpExecArray | null;

    while ((match = ruleRegex.exec(css)) !== null) {
        const selectors = match[1].trim().split(',').map(selector => selector.trim());
        const propertiesString = match[2].trim();

        const properties: { [key: string]: string } = {};
        propertiesString.split(';').forEach(property => {
            const [key, value] = property.split(':');
            if (key && value) {
                properties[key.trim()] = value.trim();
            }
        });

        selectors.forEach(selector => {
            cssRules.push({ selector, properties });
        });
    }

    return cssRules;
}


export default JsonParser;