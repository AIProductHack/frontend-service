import QueryHandler, { Query } from "./Abstract";
import JsonQueryHandler from "./Json";
import TextQueryHandler from "./Text";
import AudioQueryHandler from "./Audio";
import ImageQueryHandler from "./Image";

export enum QueryMode {
    json,
    text,
    audio,
    image,
}

class QueryHandlerFactory {
    mode: QueryMode;

    constructor(mode: QueryMode) {
        this.mode = mode;
    }

    getHandler(query: Query): QueryHandler {
        switch (this.mode) {
            case QueryMode.json: {
                return new JsonQueryHandler(query);
            };
            case QueryMode.text: {
                return new TextQueryHandler(query);
            }
            case QueryMode.audio: {
                return new AudioQueryHandler(query);
            };
            case QueryMode.image: {
                return new ImageQueryHandler(query);
            }
        }
    }
}

export default QueryHandlerFactory;