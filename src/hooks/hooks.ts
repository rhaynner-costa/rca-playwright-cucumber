import { Before, After, BeforeAll, AfterAll, Status } from '@cucumber/cucumber'
import { Browser, Page, BrowserContext } from '@playwright/test'
import { pageFixture } from './pageFixture'
import { invokeBowser } from '../helper/browsers/browserManger';
import { getEnv } from '../helper/env';

let page: Page;
let browser: Browser;
let context: BrowserContext;

BeforeAll(async function () { 
    getEnv();
    browser = await invokeBowser();

});

Before(async function () {
    context = await browser.newContext();
    pageFixture.page = await browser.newPage();
    //pageFixture.page = page;

});

After(async function ({ pickle, result }) {
    console.log(result?.status);
    //scrrenshot 
    if (result?.status == Status.FAILED) {
        const img = await pageFixture.page.screenshot({ path: `./test-result/screenshots/${pickle.name}.png`, type: "png" });
        await this.attach(img, "image/png");

    }
    await pageFixture.page.close();
    await context.close();

});

AfterAll(async function () {
    await browser.close();

});