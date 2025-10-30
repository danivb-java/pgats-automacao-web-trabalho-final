# pgats-automacao-web-trabalho-final

Trabalho Final da Disciplina Automação de Testes na Camada de Interface (Web) da Pós-Graduação em Automação de Testes, utilizando Cypress com arquitetura modular (Page Object Model), dados dinâmicos com Faker.js e integração completa com GitHub Actions.

# Test Cases Implementados
✅ Test Case 1: Register User
✅ Test Case 2: Login User with correct email and password
✅ Test Case 3: Login User with incorrect email and password
✅ Test Case 4: Logout User
✅ Test Case 5: Register User with existing email
✅ Test Case 6: Contact Us Form
✅ Test Case 8: Verify All Products and product detail page
✅ Test Case 9: Search Product
✅ Test Case 10: Verify Subscription in home page
✅ Test Case 15: Place Order: Register before Checkout

Site testado: Automation Exercise

# Tecnologias Utilizadas
Cypress 13.17.0 - Framework de testes E2E
@faker-js/faker 8.3.1 - Geração de dados dinâmicos realistas
cypress-mochawesome-reporter 4.0.2 - Relatórios HTML profissionais
Page Object Model (POM) - Arquitetura modular e reutilizável
CSS Selectors - Seletores robustos e maintíveis
GitHub Actions - Pipeline CI/CD automatizada

# Como Executar
Pré-requisitos
Node.js 18+
npm

# Instalar dependências
npm install

# Relatórios
Mochawesome Reporter Configurado:
Relatórios HTML ricos e interativos gerados automaticamente
Screenshots capturados em caso de falhas
Vídeos completos das execuções (modo headless)

# Como Acessar os Relatórios:
- Os relatórios são gerados automaticamente após a execução em:
cypress/reports/
- Para executar e visualizar os relatórios
npm run test:report

# Pipeline GitHub Actions
Configuração Automática (.github/workflows/main.yml):
Triggers: Execução automática em push e pull request
Ambiente: Ubuntu latest com Node.js 18.x
Artefatos: Upload automático de relatórios, screenshots e vídeos
- Funcionalidades da Pipeline:
✅ Instalação automática de todas as dependências
✅ Execução dos 10 Test Cases obrigatórios
✅ Geração de relatórios HTML profissionais
✅ Upload de artefatos para download posterior
✅ Notificações de resultados via GitHub
✅ Histórico completo de todas as execuções

# Sobre este Trabalho Final:
Este projeto foi desenvolvido como Trabalho Final da disciplina de Automação Web, demonstrando domínio completo de:

# Cypress para automação E2E
Arquitetura modular (Page Object Model)
Integração com ferramentas modernas (Faker.js, Mochawesome)
Pipeline CI/CD com GitHub Actions
Boas práticas de desenvolvimento e testing
📄 Licença
MIT License - Este projeto foi desenvolvido exclusivamente para fins educacionais como Trabalho Final do curso PGATS.


