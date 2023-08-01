# Advice Generator

## Você pode ver o projeto em funcionamento [AQUI](https://advice-generator-turinos.vercel.app/)

## :dart: Proposta:
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;O objetivo desse projeto foi aprofundar um pouco mais meus conhecimentos nas últimas tecnologias que aprendi (Next.js e TypeScript).  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Trata-se de um aplicativo que gera randomicamente um conselho para o usuário. O projeto está em inglês, porque os conselhos da API vêm nessa língua, porém se você clonar esse repositório, pode adicionar a tradução automática usando a "Cloud Translation API", que é a API de tradução da Google.

## Traduzindo a aplicação:

O consumo da API já está implementado no projeto, basta que você vá ao site e pegue uma key seguindo os passo abaixo:

1 - Acesse o Google Cloud Console por esse link [https://console.cloud.google.com](https://console.cloud.google.com/welcome?project=advice-generator-394616).  
2 - Se você ainda não tiver uma conta do Google Cloud, será necessário criar uma e fazer login no console.  
3 - No Console do Google Cloud, clique no seletor de projetos no canto superior esquerdo e, em seguida, clique em "Criar projeto".  
4 - Dê um nome ao projeto, selecione a organização (se aplicável) e clique em "Criar".  
5 - Aguarde alguns instantes enquanto o projeto é criado e ativado.  
6 - Uma vez que o projeto esteja criado e ativado, clique no seletor de projetos novamente e selecione o projeto que você acabou de criar.  
7 - No painel de navegação à esquerda, clique em "APIs e Serviços" e, em seguida, em "Biblioteca".  
8 - Na página "Biblioteca de APIs", procure por "Cloud Translation API" ou "API de Tradução do Google Cloud".  
9 - Clique no resultado da pesquisa e, em seguida, clique no botão "Ativar" para habilitar a API para o seu projeto.  
10 - Após ativar a API, volte ao painel de navegação à esquerda e clique em "Credenciais".  
11 - Clique em "Criar credenciais" e selecione "Chave de API".  
12 - Uma janela será aberta mostrando sua chave de API recém-criada. Copie essa chave para usá-la em suas solicitações para a API de Tradução do Google Cloud.  
13 - Por fim, colocar a sua chave no arquivo "translate.ts" como valor da constante "GOOGLE_TRANSLATE_API_KEY".  
    
A API é paga então preferi não usá-la, mas é bem simples de usar se você preferir seus conselhos em português.

## 🛠 Tecnologias utilizadas:

+ Next.js
+ TypeScript
+ Styled components
+ Context API

## ☑️ Para rodar você precisará:

 + Editor de código de sua preferência (recomendado VS code)
 + Git
 + Gerenciador de pacotes Yarn ou NPM

## 📝 Procedimentos de instalação

Clone este repositório usando o comando:

```
https://github.com/TurinoS/advice-generator.git
```

Na pasta do projeto instale as dependências com uso do npm ou yarn

```
npm install

ou

yarn install
```
Inicie o projeto com

```
npm run dev

ou

yarn dev
```

ou usar o link para o projeto [https://advice-generator-turinos.vercel.app/](https://advice-generator-turinos.vercel.app/)

## 😎 Minhas redes

+ Linkedin - [paulo-turino](https://www.linkedin.com/in/paulo-turino/)
+ Instagram - [@paulo_turino](https://www.instagram.com/paulo_turino/)
+ GitHub - [TurinoS](https://github.com/TurinoS)
