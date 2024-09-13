import {IComponent} from "../rendering/interfaces"

export const alert: IComponent = {
    title: "Alert",
    properties: {
        id: "test1",
        title: "Успешно сохранено",
        severity: "success",
        content: "test alert"
    }
}