Feature: Gerenciamento de produtos

  Background:
    Given Eu esteja logado no ServerRest com as seguintes credenciais:
      | USUARIO | Deangelo.Ullrich@hotmail.com |
      | SENHA   | teste123                     |
    And Eu estou na página home

  Scenario: Cadastrar um produto
    When Eu clicar no botão Cadastrar Produtos na barra de navegação
    Then Eu devo acessar o cadastro de produto
    And Eu preencher o campo Nome do produto com "Produto X"
    And Eu preencher o campo Preço com "12"
    And Eu preencher o campo Descrição com "Produto de teste"
    And Eu preencher o campo Quantidade com "10"
    # When Eu clicar no botão Cadastrar
    # Then Eu devo ser redirecionado para a lista de produtos
