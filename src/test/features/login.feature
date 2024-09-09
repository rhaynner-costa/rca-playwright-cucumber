Feature: User Autentication tests

  Background:
    Given O usuario navega para a pagina de login do ServerRest
   
  Scenario: Login do usuario com as credenciais validas
    And O usuario digita o email como "Deangelo.Ullrich@hotmail.com"
    And O usuario digita a senha como "teste123"
    When Quando o usuario clicar no botão de login
    Then O usuario deve estar na pagina home

  Scenario: Login do usuario com as credenciais invalidas
    And O usuario digita o email como "UserTeste@teste.com"
    And O usuario digita a senha como "teste"
    When Quando o usuario clicar no botão de login
    Then O usuario visualizar o alerta "Email e/ou senha inválidos"
