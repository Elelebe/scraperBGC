<h1 align = "center">Scraper de Pokémon</h1>
<img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png' width = 120%>
<p align = "center">Uma busca simples e prática para informações sobre Pokémons.</p>

## 📑 Índice
* [🔎 Scraper de Pokémon](#scraper-de-pokémon)
* [📑 Índice](#-índice)
* [💻 Sobre o Projeto](#-sobre-o-projeto)
* [⚠️ Pré-Requisitos](#%EF%B8%8F-pré-requisitos)
* [⚙️ Rodando o Servidor](#%EF%B8%8F-rodando-o-servidor)
* [🖊️ Autor](#%EF%B8%8F-autor)
* [📝 Licença](#-licença)

<h2>💻 Sobre o Projeto</h2>
 
> O arquivo foi criado com o intuito de pesquisar informações sobre Pokémons de forma concisa e direta. 🎯
<p>Ao inserir o nome do Pokémon...</p>

<ul>
 <li>
  <input type = "text">'pokemon-name'</input>
 </li>
</ul>
            
<p>O arquivo traz as seguintes informações:</p>
 
 <ul>
  <li>
   <p>Nome em japonês;</p>
  </li>
  <li>
   <strong>Tipo(s);</strong>
  </li>
  <li>
   <p>Geração;</p>
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
 
 <img src = 'https://www.pngplay.com/wp-content/uploads/10/Charmander-Pokemon-PNG-Free-File-Download.png' width = 40% height = 40%>
 
Por exemplo:
<ul>
 <li>
  <input type = "text">'Charmander'</input>
 </li>
</ul>
<p>O Pokémon 'Charmander' 🔥 sairá com as seguintes informações:</p>

| Pokémon (Japonês) | Tipo(s) | Geração | Categoria | Altura | Peso | Distribuição de gênero |
| --- | --- | --- | --- | --- | --- | --- |
| Charmander (ヒトカゲ Hitokage) | Fogo | Primeira Geração | Pokémon Lagarto | 0,6 m | 8,5kg | 87,5% ♂ — 12,5% ♀ |
 
 <h2>⚠️ Pré-Requisitos</h2>

<p>Antes de começar, você precisará obrigatoriamente instalar o 

<a href = 'https://nodejs.org/en/download/'>
 <img src = 'https://img.shields.io/badge/node-js-brightgreen'>
 </a>
 , o 
 <a href = 'https://www.win-rar.com/start.html?&L=9'>
  <img src = 'https://img.shields.io/badge/Win-RAR-AF00FF'>
 </a>
 e o
 <a href = 'https://code.visualstudio.com'>
  <img src = 'https://img.shields.io/badge/VS-Code-blue'>
 </a>.<p>
 
 <h2>⚙️ Rodando o servidor</h2>

Para instalar e passar a usar o projeto,

1. **Clique em <a href = https://github.com/Elelebe/scraperBGC/archive/refs/heads/main.zip>baixar</a> para baixá-lo;**
 
2. **Extraia o arquivo;**

```shell
Para extraí-lo, aperte-o com o botão direito e selecione "Extrair Tudo..."
```

3. **Abra o arquivo 'index' com VSCode;**

```shell
Para abrí-lo com VSCode, aperte-o com o botão direito e selecione "Abrir com Code"
```

4. **Escreva o nome do Pokémon (na linha 10 do código) onde está escrito:**

```shell
const pokemon = 'pokemon-name'

OBS¹: o programa rodará apenas com o nome correto do Pokémon.
Letras maiúsculas e minúsculas também podem influenciar.
```
por exemplo:
```shell
const pokemon = 'Pikachu'

OBS²: é essencial manter o nome do Pokémon entre aspas.
```

5. **Aperte F5 e selecione a opção 'NodeJS'.**
```shell
O resultado sairá na aba "Terminal"
```

<img src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-md.png' width = 50% height = 35%>
<img src = 'https://i.pinimg.com/originals/9a/68/71/9a68716efc331fcc84e3a4ce5f23d18d.png' width = 50% height = 35%>

<h2>🖊️ Autor</h2>

[<img src='https://avatars.githubusercontent.com/u/54039202?v=4' width = 300><br><sub>Leonardo Lopes Braga</sub>](https://github.com/Elelebe)

<h2>📝 Licença</h2>

Licenciado pelo [MIT License](./LICENSE).
