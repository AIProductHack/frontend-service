import React from "react";
import { IComponent } from "../rendering/interfaces";
import { IComponentProps, ComponentReceiver} from "./ComponentReceiver";
import { createPage } from "../rendering/service";


type ProcessMode = 'json' | 'text'


class QueryProcessor {
    mode: ProcessMode;

    constructor(mode: ProcessMode) {
        this.mode = mode;
    }

    sanitiseInput(text: string): string {
        // todo: add more sanitising logic
        return text.replace("*", "");
    }

    getComponent(props: IComponentProps): IComponent[] | undefined {
        const receiver: ComponentReceiver = new ComponentReceiver(props);
        return receiver.getComponent();
    }

    renderResponse(components: IComponent[] | undefined): React.ReactNode { 
        return createPage(components);
    }

    processInput(text: string): IComponent[] | undefined {
        switch (this.mode) {
            case 'json': {
                const props: IComponentProps = { json: text };
                const components: IComponent[] | undefined = this.getComponent(props);
                return this.renderResponse(components);
            }
            case 'text': {
                console.log("text");
                break;
            }
            default: {
                console.log("pupa");
                break;
            }
        }
    }
}

export default QueryProcessor;