import { IComponent } from "../rendering/interfaces";


export interface IComponentProps {
    json: string,
    style?: string
}

export class ComponentReceiver {
    readonly props: IComponentProps;
    component?: IComponent[];
    styles?: string;

    constructor(props: IComponentProps) {
        this.props = props;
        this.parseComponent();
        this.parseStyles();
    }

    parseComponent(): void {
        this.component = JSON.parse(this.props.json);
    }

    parseStyles(): void {
        this.styles = this.props.style;
    }

    getComponent(): IComponent[] | undefined {
        if (this.component === undefined) {
            console.log("Component cannot be parsed");
            return;
        }
        return this.component;
    }

    getStyle(): string | undefined {
        if (this.styles === undefined) {
            console.log("Styles cannot be parsed");
            return;
        }
        return this.styles;
    }
}