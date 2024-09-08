import QueryHandler, { Query } from "./Abstract";
import JsonQueryHandler from "./Json";
import TextQueryHandler from "./Text";
import AudioQueryHandler from "./Audio";
import ImageQueryHandler from "./Image";

type QueryMode = 
    | 'json'
    | 'text'
    | 'audio'
    | 'image'

class QueryHandlerFactory {
    mode: QueryMode;

    constructor(mode: QueryMode) {
        this.mode = mode;
    }

    getHandler(query: Query): QueryHandler {
        switch (this.mode) {
            case 'json': {
                return new JsonQueryHandler(query);
            };
            case 'text': {
                return new TextQueryHandler(query);
            }
            case 'audio': {
                return new AudioQueryHandler(query);
            };
            case 'image': {
                return new ImageQueryHandler(query);
            }
        }
    }
}

export default QueryHandlerFactory;