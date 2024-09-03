import {IComponent} from "../rendering/interfaces"

export const alert: IComponent = {
    type: "Alert",
    data: {
        id: "test1",
        title: "Успешно сохранено",
        severity: "success",
        content: "test alert"
    }
}