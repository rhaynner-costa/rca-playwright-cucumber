import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';


Given('O usuario navega para a pagina de login do ServerRest', async function () {
    await pageFixture.page.goto(process.env.BASEURL);

});