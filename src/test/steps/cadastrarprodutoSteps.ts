import { Given, When, Then } from "@cucumber/cucumber"
import '../steps/commonSteps'
import { pageFixture } from "../../hooks/pageFixture";

Given('E faz o login no ServerRest com as seguintes credenciais:', async function (dataTable) {
    // Converte a tabela em um objeto de chave-valor
    const credenciais = dataTable.rowsHash() as { [key: string]: string };
    const usuario = credenciais['USUARIO'];
    const senha = credenciais['SENHA'];
    await pageFixture.page.locator("[data-testid='email']").fill(usuario);
    await pageFixture.page.locator("[data-testid='senha']").fill(senha);
    await pageFixture.page.locator("[data-testid='entrar']").click();
});

Given('Ele está na página home', async function () {
    await pageFixture.page.getByText("Este é seu sistema para administrar seu ecommerce.").isVisible();

});

When('O usuário clicar no botão Cadastrar Produtos na barra de navegação', async function () {
    await pageFixture.page.locator("[data-testid='cadastrar-produtos']").click()

});

Then('O usuário deve acessar a página de cadastro de produto', async function () {
    await pageFixture.page.getByText("Cadastro de Produtos").isVisible();

});

Then('O usuário preenche o campo Nome do produto com {string}', async function (nomeProduto) {
    await pageFixture.page.locator("[data-testid='nome']").fill(nomeProduto);

});

Then('O usuário preenche o campo Preço com {string}', async function (preco) {
    await pageFixture.page.locator("[data-testid='preco']").fill(preco);

});

Then('O usuário preenche o campo Descrição com {string}', async function (descricao) {
    await pageFixture.page.locator("[data-testid='descricao']").fill(descricao);

});

Then('O usuário preenche o campo Quantidade com {string}', async function (quantity) {
    await pageFixture.page.locator("[data-testid='quantity']").fill(quantity);

});

When('O usuário clicar no botão "Cadastrar"', async function () {
    await pageFixture.page.locator("[data-testid='cadastarProdutos']").click();

});

Then('O usuário será redirecionado para a lista de produtos', async function () {
    await pageFixture.page.getByText("Lista dos Produtos").isVisible();

});