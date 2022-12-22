<h1 align = "center">🔎 Buscando Pokémons</h1>
<img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/640px-International_Pok%C3%A9mon_logo.svg.png' width = 120%>
<p align = "center">Uma busca simples e prática para informações sobre Pokémons.</p>

## 📑 Índice
* [🔎 Buscando Pokémons](#-buscando-pokémons)
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

| Nome do Pokémon (Japonês) | Tipo(s) | Geração | Categoria | Altura | Peso | Distribuição de gênero |
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

2. **Extraia a pasta compactada;**

```shell
Para extraí-la, aperte-a com o botão direito e selecione "Extrair Tudo..."
```

3. **Abra a nova pasta e, após isso, o arquivo 'index' com VSCode;**

```shell
Para abrí-lo com VSCode, aperte-o com o botão direito e selecione "Abrir com Code"
```

4. **Escreva o nome do Pokémon (na linha 10 do código) onde está escrito:**

```shell
const pokemon = 'pokemon-name'
```

   **por exemplo:**
```shell
const pokemon = 'Squirtle'

OBS: é essencial manter o nome do Pokémon entre aspas.
```

5. **Aperte a opção 'Run and Debug' (F5 ou Ctrl+Shift+D) e selecione a opção 'NodeJS'.**

<img src = 'https://lh3.googleusercontent.com/jnImpls-4xxtT1WQ5IWWasf0_yoyLmjdkkjKwrKCrJAu-af8l571VI1xjqn5NzoBQjaBBu9sNwKkMFAgchKADpzvuVHI_OQU9CCJs0xvNEr43X2OqSPrLgQRFIxBD8fbf_WGfg9Q1xRhDi8EePFeIi6sbdUVKxwdlfTnrgullfqsqj5LCdZD0UfixD0agj3AqQa4S-bPluMMwfyrHjzHayWIz2hGULxZrfiM1Qby2-Z0ffFw5RHqjO1DZvEVXgDB22g9yff2tclI70m0jWfHEimR_c-pBOHR3n49k8vx_oRohunyXjbHLtiDxFX8IQTjxUX8kDAPtfhlnDYYXKvPtsPHdsgMNz2DXTMUSzZIcG2mF-6zxDTciBSXtJzG7t14tEmHYKwzA3bLcrC66QZAszQoGKpy4cQNyIvT4iQ2uWkL7SVTQHqHYqPwBueIHI-3PTDvX76YYeRz1xaicL8Zw5neRkh-FORJ7iSs7fZ6nuflHDY9lzIaDphMSpMNt7lVas5wTNF_VLzF8sLjjix1AZYwi2EncS3OafVyLY2kqVG5PruRd7r8IAgsX0PEZzX9nhzXydUT5m0z5VM34Xz1kFaOERUQe8TfHDcRmA1iGf5grw1b6_5MTToXqXn2bzw1j1QrbmgKCQx5vqFM7VgHht4iWIyLN1bOjvDshSaoaTYEjJKtM6qQXLp4lZZzLLERTcbS6cB1-4moF_N2-iRda2-8Qy0HaKkJEjE9wJ_s3Y7i8RIyTS9COaM5jT_5-o-J_VmZQAPA6TTtIE5cxHXV7r2ljD6ZGoyT6tRIyxOVBGVMx1CKyWO_poiKn9yHeYCvU-09U50Jg5xfOnqDGo28Q6lZRhmLAGWqpuu5YD7rILq5IMIkxzLVeerH-iKtRQFFDtcBhNCj1Tfk6r6l3kEchept_mVCYf0O8vGmCE5mbinEiw=w760-h599-no?authuser=0'>

>Site sujeito a erros por causa de dados incompletos!<br>
>Talvez o seu Pokémon não saia com os dados conforme o esperado.

<img src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-md.png' width = 40% height = 15%>

<h2>🖊️ Autor</h2>

[<img src='https://avatars.githubusercontent.com/u/54039202?v=4' width = 300><br><sub>Leonardo Lopes Braga</sub>](https://github.com/Elelebe)

<h2>📝 Licença</h2>

Licenciado pelo [MIT License](./LICENSE).
