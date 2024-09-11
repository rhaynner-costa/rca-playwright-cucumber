import { chromium, firefox, LaunchOptions, webkit } from '@playwright/test'

const options: LaunchOptions = {
    headless: false,
    args: ['--start-maximized'],

}

export const invokeBowser = () => {
    const browserType = process.env.BROWSER;

    switch (browserType) {
        case "chrome":
            return chromium.launch(options);
        case "firefox":
            return firefox.launch(options);
        case "webkit":
            return webkit.launch(options);

        default:
            throw new Error(`O Browser ${browserType} não é suportado`);

    }

}