
# Desafio Front-End - Ebytr

## Introdução

Essa é parte do desafio técnico da Ebytr reservada para o desenvolvimento do **front-end** que foi feita para atender a arquitetura da stack [MERN](https://www.mongodb.com/mern-stack), como requisitado. Neste trabalho foi, primeiramente, contruído um **Mockup** para o *desgin* da plataforma chamada "To Do List" da Ebytr, que se encontra na pasta public em pdf. Desenvolver o *desgin* facilitou na componentização, na hieraquização e organização do código, bem como na estilização de cada parte densenvolvida da aplicação front-end.

Foi criada uma tela de **Login** que vai servir para autenticação dos usuários ou colaboradores cadastrados para terem acesso ao acompanhamento das atividades. Foi, também, desenvolvida a **Home**, a tela principal que vai englobar o progresso das atividades e a lista de tarefas que podem ser ordenadas por ordem alfabética, pelo status e pela data de criação. E, por fim, foram construídas a tela de **erro 404** e a tela de **Loading**. A primeira para tratar o erro gerado por digitar a URL incorretamente e a segunda para "mascarar" o carregamento das páginas, ambas com o objetivo de melhorar a **experiência do usuário**. 

Todas as telas foram feitas, primeiramente, de forma estática para então obter dados a partir da conexão com a **API** criada no **back-end**, para preencher cada estrutura dinâmicamente. É importante dizer que alguns testes foram realizados para garantir o funcionamento e melhor manutenção do código.

### As ferramentas principais utilizadas foram:

[React](https://reactjs.org/)<br>
[Next](https://nextjs.org/)<br>
[Vercel](https://vercel.com/)<br>
[ESLint](https://eslint.org/)<br>
[Tailwind.css](https://tailwindcss.com/)<br>

---

## Uso do projeto localmente

### Clone do repositório

Após cada um dos passos a seguir, haverá um exemplo do comando a ser digitado para fazer o que está sendo pedido, caso tenha dificuldades e o exemplo não seja suficiente, não hesite em me contatar em _eduardawiltiner@gmail.com_.

1. Abra o terminal e crie um diretório no local de sua preferência com o comando **mkdir**:
```javascript
  mkdir frontend-ebytr
```

2. Entre no diretório que acabou de criar e depois clone o projeto:
```javascript
  cd frontend-ebytr
  git clone https://github.com/dudawiltiner/desafio-frontend-ebytr.git
```

### Instalação das dependências

3. Entre no diretório criado após a clonagem do repositório.
```javascript
  cd desafio-frontend-ebytr
```

4. Instale todas as dependências, usando o CLI **npm**.
```javascript
  npm install
```
### Debug da aplicação

5. Abra no ambiente de desenvolvimento de sua preferência. No caso de uso do VSC, digite o comando **code .** na raiz do diretório clonado.
```javascript
  code .
```

4. Rode a aplicação com o node.js, usando o CLI **npm**.
```javascript
  npm run dev
```

### Realizar testes na aplicação

5. Rode os testes da aplicação com o node.js, usando o CLI **npm**.
```javascript
  npm run test
```
## Link para o deploy da Plataforma:
https://desafioebytr.vercel.app/

OBS:Lembrando que para acessar a **Home** da plataforma deve possuir um cadastro no banco de dados.
