import { IComponent } from "../rendering/interfaces";

const text: IComponent = {
    type: "Typography",
    data: {
        id: "test_1",
        variant: "Body1",
        color: "black",
        content: "test text button"
    }
}

export const button: IComponent = {
    type: "Button",
    data: {
        id: "test_2",
        size: "m",
        variant: "primary",
        fill: "solid",
        content: "test test test test",
        children: [
            text
        ]
    }
}