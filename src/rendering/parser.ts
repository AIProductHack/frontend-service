import { IComponent } from "./interfaces";


class JsonParser {
    component?: IComponent[];

    private sanitiseInput(text: string): string {
        return text.trim().replace("*", "");
    }

    private parseJson(text: string): void {
        this.component = JSON.parse(text);
    }

    getComponent(text: string): IComponent[] | undefined {
        text = this.sanitiseInput(text);
        this.parseJson(text);
        return this.component;
    }
}

export default JsonParser;