import { Given, When, Then } from "@cucumber/cucumber"
import '../steps/commonSteps'
import { pageFixture } from "../../hooks/pageFixture";

import { expect } from "@playwright/test"

Given('O usuario digita o email como {string}', async function (string) {
  await pageFixture.page.locator("[data-testid='email']").fill(string);

});

Given('O usuario digita a senha como {string}', async function (string) {
  await pageFixture.page.locator("[data-testid='senha']").fill(string);

});

When('Quando o usuario clicar no botão de login', async function () {
  await pageFixture.page.locator("[data-testid='entrar']").click();

});

Then('O usuario deve estar na pagina home', async function () {
  const barraNavegacaoHome = pageFixture.page.locator("[id='navbarTogglerDemo01']");
  await expect(barraNavegacaoHome).toBeVisible();

});

Then('O usuario visualizar o alerta {string}', async function (alert) {
  await expect(pageFixture.page.getByText(alert), `O Alerta ${alert} nao foi mostrado`).toBeVisible();

});
