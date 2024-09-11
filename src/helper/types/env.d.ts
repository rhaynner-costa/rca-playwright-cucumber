export { };

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            BROWSER: "chrome" | "firefox" | "webkit",
            ENV: "qa" | "prod" | "test",
            BASEURL: string,
            HEAD: "true" | "false"
        }
    }

}