import { Given, When, Then } from '@cucumber/cucumber';
import { pageFixture } from '../../hooks/pageFixture';


Given('O usuario navega para a pagina de login do ServerRest', async function () {
    await pageFixture.page.goto(process.env.BASEURL);

});

Given('Eu esteja logado no ServerRest com as seguintes credenciais:', async function (dataTable) {
    await pageFixture.page.goto(process.env.BASEURL);
    // Converte a tabela em um objeto de chave-valor
    const credenciais = dataTable.rowsHash() as { [key: string]: string };
    const usuario = credenciais['USUARIO'];
    const senha = credenciais['SENHA'];
    await pageFixture.page.locator("[data-testid='email']").fill(usuario);
    await pageFixture.page.locator("[data-testid='senha']").fill(senha);
    await pageFixture.page.locator("[data-testid='entrar']").click();

});