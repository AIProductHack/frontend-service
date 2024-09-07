import { IComponent } from "../rendering/interfaces";


interface IProps {
    json: string,
    style?: string
}

class ComponentReceiver {
    readonly props: IProps;
    component?: IComponent;
    styles?: string;

    constructor(props: IProps) {
        this.props = props;
        this.parseComponent();
    }

    parseComponent(): void {
        this.component = JSON.parse(this.props.json);
    }

    parseStyles(): void {
        this.styles = this.props.style;
    }

    getComponent(): IComponent | undefined {
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

export default ComponentReceiver;