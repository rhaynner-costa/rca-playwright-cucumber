import { Given, When, Then } from "@cucumber/cucumber"
import '../steps/commonSteps'
import { pageFixture } from "../../hooks/pageFixture";

Given('Eu estou na página home', async function () {
    await pageFixture.page.getByText("Este é seu sistema para administrar seu ecommerce.").isVisible();

});

When('Eu clicar no botão Cadastrar Produtos na barra de navegação', async function () {
    await pageFixture.page.locator("[data-testid='cadastrar-produtos']").click()

});

Then('Eu devo acessar o cadastro de produto', async function () {
    await pageFixture.page.getByText("Cadastro de Produtos").isVisible();

});

Then('Eu preencher o campo Nome do produto com {string}', async function (nomeProduto) {
    await pageFixture.page.locator("[data-testid='nome']").fill(nomeProduto);

});

Then('Eu preencher o campo Preço com {string}', async function (preco) {
    await pageFixture.page.locator("[data-testid='preco']").fill(preco);

});

Then('Eu preencher o campo Descrição com {string}', async function (descricao) {
    await pageFixture.page.locator("[data-testid='descricao']").fill(descricao);

});

Then('Eu preencher o campo Quantidade com {string}', async function (quantity) {
    await pageFixture.page.locator("[data-testid='quantity']").fill(quantity);

});

When('Eu clicar no botão Cadastrar', async function () {
    await pageFixture.page.locator("[data-testid='cadastarProdutos']").click();
    
});

Then('Eu devo ser redirecionado para a lista de produtos', async function () {
  await pageFixture.page.getByText("Lista dos Produtos").isVisible();

});