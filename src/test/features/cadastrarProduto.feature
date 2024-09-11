Feature: Gerenciamento de produtos

  Background:
    Given O usuario navega para a pagina de login do ServerRest
    And E faz o login no ServerRest com as seguintes credenciais:
      | USUARIO | testesserverrest@qeteste.com |
      | SENHA   | teste123                     |
    And Ele está na página home

  Scenario: Cadastrar um produto
    When O usuário clicar no botão Cadastrar Produtos na barra de navegação
    Then O usuário deve acessar a página de cadastro de produto
    And O usuário preenche o campo Nome do produto com "Produto X"
    And O usuário preenche o campo Preço com "12"
    And O usuário preenche o campo Descrição com "Produto de teste"
    And O usuário preenche o campo Quantidade com "10"
    # When O usuário clicar no botão "Cadastrar"
    # Then O usuário será redirecionado para a lista de produtos
