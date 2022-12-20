<h1 align = "center">Scraper de Pokémon</h1>
<img src = 'https://i0.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1'>
<p align = "center">Uma busca simples e prática para informações sobre Pokémons.</p>

<h2>📑 Índice</h2> 
* [Scraper de Pokémon](#-scraper-de-pokémon)
* [Índice](#-índice)
* [Sobre o Projeto](#-sobre-o-projeto)
* [Pré-Requisitos](#-pré-requisitos)
* [Rodando o Servidor](#-rodando-o-servidor)
* [Autor](#-autor)
* [📝 Licença](#-licença)

<h2>💻 Sobre o Projeto</h2>
 
<p>O arquivo foi criado com o intuito de pesquisar informações sobre Pokémons de forma concisa e direta.</p>
<p>Ao inserir o nome do Pokémon...</p>

<ul>
 <li>
  <input type = "text">'pokemon-name'</input>
 </li>
</ul>
            
<p>O arquivo traz as seguintes informações:<p>
 
 <ul>
  <li>
   <p>Tipo(s);</p>
  </li>
  <li>
   <p>Categoria;</p>
  </li>
  <li>
   <p>Altura;</p>
  </li>
  <li>
   <p>Peso;</p>
  </li>
  <li>
   <p>Distribuição de gênero.</p>
  </li>
 </ul>
 
<p>Por exemplo:</p>

<ul>
 <li>
  <input type = "text">'Charmander'</input>
 </li>
</ul>

<p>Informações sobre o Charmander:</p>
<ul>
  <li>
   <p>Tipo(s): Fogo</p>
  </li>
  <li>
   <p>Categoria: Pokémon Lagarto</p>
  </li>
  <li>
   <p>Altura: 0,6 m</p>
  </li>
  <li>
   <p>Peso: 8,5 kg</p>
  </li>
  <li>
   <p>Distribuição de Gênero: 87,5% ♂ — 12,5% ♀</p>
  </li>
 </ul>
 
 <h2>⚠️ Pré-Requisitos</h2>

<p>Antes de começar, você precisará instalar o 

<a href = 'https://nodejs.org/en/download/'>
 <img src = 'https://img.shields.io/badge/node-js-brightgreen'>
 </a>
 , o 
 <a href = 'https://git-scm.com'>
  <img src = 'https://img.shields.io/badge/Git-v2.39.0-orange'>
 </a>
 e o
 <a href = 'https://code.visualstudio.com'>
  <img src = 'https://img.shields.io/badge/VS-Code-blue'>
 </a>.<p>
 
 <h2>⚙️ Rodando o servidor</h2>

Para instalar e passar a usar o projeto, você deverá abrir o 'Git CMD' e:

1. **Inicializar o repositório;**

  ```shell
  git init elelebe
  ```
  
2. **Clonar este repositório <a href = https://github.com/Elelebe/scraperBGC/archive/refs/heads/main.zip>ou baixá-lo</a> em caso de erro;**

 ```shell
 git clone https://github.com/Elelebe/scraperBGC.git
 ```
 
3. **Extrair o arquivo em caso de *download;***

4. **Instalar as dependências;**

```shell
npm install puppeteer
```
5. **Abrir o 'index' (botão direito) com VSCode;**

6. **Escrever o nome do Pokémon na linha onde está escrito:**

```shell
const pokemon = 'pokemon-name'
```
por exemplo:
```shell
const pokemon = 'Pikachu'
```

7. **Apertar F5 e selecionar a opção 'NodeJS'.**
<br></br>
***⚠️⚠️***
***O PROGRAMA RODARÁ APENAS COM O NOME CORRETO DO POKÉMON, CASO O SITE TENHA OS DADOS CONTIDOS***
***⚠️⚠️***

<h2>🖊️ Autor</h2>

[<img src='https://avatars.githubusercontent.com/u/54039202?v=4' width = 300><br><sub>Leonardo Lopes Braga</sub>](https://github.com/Elelebe)

<h2>📝 Licença</h2>

[MIT License](./LICENSE).
