Feature: User Autentication tests

  Background:
    Given O usuario navega para a pagina de login do ServerRest

  Scenario: Login do usuario com as credenciais validas
    And O usuario digita o email como "pamelakshlerin@pwlab-feijo.com"
    And O usuario digita a senha como "BY53x2gbW9ej"
    When Quando o usuario clicar no botão de login
    Then Deve mostrar a mensagem que o Email e senha é invalido

  Scenario: Login do usuario com as credenciais invalidas
    And O usuario digita o email como "UserTeste@teste.com"
    And O usuario digita a senha como "teste"
    When Quando o usuario clicar no botão de login
    Then O usuario deve logar na aplicação
