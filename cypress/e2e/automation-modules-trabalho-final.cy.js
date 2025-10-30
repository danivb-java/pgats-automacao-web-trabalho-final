

import userData from '../fixtures/example.json'
import menu from '../modules/menu'
import login from '../modules/login'
import cadastro from '../modules/cadastro';
import contato from '../modules/contato'
import produtos from '../modules/produtos'
import carrinho from '../modules/carrinho';
import checkout from '../modules/checkout';
import pagamento from '../modules/pagamento';
import subscription from '../modules/subscription';

describe('Automation Exercise - Final Exam', () => {
  beforeEach(() => {
    cy.viewport(400, 700)
    cy.visit('https://automationexercise.com/')
    menu.navegarParaLogin()
  })


  it('CT01 - Cadastrar um usuario', () => {
    login.preencherFormularioDePreCadastro() 
    cadastro.preencherFormularioDeCadastroCompleto()
    cy.url().should('includes', 'account_created') 
    cy.get('b').contains('Account Created!')
    }) 


  it('CT02 - Fazer login de usuario com e-mail e senha corretos', () => {
    login.preencherFormularioDeLogin(userData.user, userData.password)
    cy.get('i.fa-user').parent().should('contain', userData.name)
    cy.get(':nth-child(9) > a')
  });


  it('CT03 - Fazer login de usuario com e-mail e senha incorretos', () => {
    login.preencherFormularioDeLogin(userData.user, `54321`)   
    cy.get(`.login-form > form > p`).should('contain', 'Your email or password is incorrect!')
  });


  it('CT04 - Fazer logout de usuario', () => {
    login.preencherFormularioDeLogin(userData.user, userData.password)
    menu.efetuarLogout()
    cy.url().should('contain', 'login')
    cy.contains('Login to your account')
    cy.get('a[href="/logout"]').should('not.exist')
    cy.get('a[href="/login"]').should('contain', 'Signup / Login')
  });


  it('CT05 - Cadastrar usuario com e-mail existente no sistema', () => {
    login.preencherFormularioDePreCadastroExistente(userData.name, userData.user)
    cy.get('.signup-form > form > p').should('contain', 'Email Address already exist!')
    });


  it('CT06 - Enviar de formulario de contato (Contact Us) com upload de arquivo', () => {
    contato.preencherFormularioDeContato(userData.name, userData.email, userData.subject, userData.password)
    cy.get('.status').should('be.visible')
    cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.')
  });


  it('CT08 - Verificar todos os produtos e a página de detalhes do produto', () => {
    menu.navegarParaProduto()

    cy.url().should('include', '/products')
    cy.get('.title.text-center').should('be.visible')
    cy.get('.title.text-center').should('contain', 'All Products')
    cy.get('.features_items').should('be.visible')

    produtos.visualisarPrimeiroProduto()
    cy.get('.product-details').should('be.visible')
    
    cy.get('.product-information h2').should('be.visible')
    cy.get('.product-information p:contains("Category:")').should('be.visible')
    cy.get('.product-information span span').should('be.visible')
    cy.get('.product-information p:contains("Availability:")').should('be.visible')
    cy.get('.product-information p:contains("Condition:")').should('be.visible')
    cy.get('.product-information p:contains("Brand:")').should('be.visible')

  });


  it('CT09 - Pesquisar produto', () => {
    menu.navegarParaProduto()

    cy.url().should('include', '/products')
    cy.get('.title.text-center').should('be.visible')
    cy.get('.title.text-center').should('contain', 'All Products')

    const productName = 'Men Tshirt';
    produtos.pesquisarProduto(productName)
    cy.get('.title').should('be.visible')
    cy.get('.title').contains("Searched Products")
    cy.get('.productinfo > p').should('contain.text', productName)

  });


  it('CT10 - Verificar assinatura na home page', () => {
    subscription.scrollSubscription()
    cy.get('.single-widget > h2').should('be.visible')
    cy.get('.single-widget > h2').should('contain.text', "Subscription")

    subscription.cadastrarEmail(userData.user)
    cy.get('.alert-success').should('be.visible')
    cy.get('.alert-success').should('contain', 'You have been successfully subscribed!')

  });


  it('CT15 - Fazer o pedido e se registrar antes de finalizar a compra', () => {
    const user = login.preencherFormularioDePreCadastro() 
    cadastro.preencherFormularioDeCadastroCompleto()

    cy.get('b').contains('Account Created!')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains(`Logged in as ${user.firstName} ${user.lastName}`).should('be.visible')

    produtos.adicionarProduto();
    produtos.irParaCarrinho();

    carrinho.verificarCartaoPagamento();
    carrinho.prosseguirCheckout();

    checkout.verificarEnderecoRevisarPedido();
    checkout.digitarComentarioFazerPedido('Por favor, enviar com urgência.');

    pagamento.detalhesPagamento(userData.cardData);
    pagamento.pagamentoConfirmado();
    pagamento.verificarMensagemSucesso();

  });

});