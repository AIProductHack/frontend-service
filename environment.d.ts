declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BACKEND_API: string;
        }
    }
}

export {};