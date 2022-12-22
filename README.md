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

por exemplo:
```shell
const pokemon = 'Squirtle'

OBS: é essencial manter o nome do Pokémon entre aspas.
```

5. **Aperte a opção 'Run and Debug' (F5 ou Ctrl+Shift+D) e selecione a opção 'NodeJS'.**

<img src = 'https://lh3.googleusercontent.com/uTzCRbZdTnkv7rJxFFjVJALUCX1rAqGiRXdmeLl76UP818V3qmteMZeciaR1EJekPH4jCvTYYv__tQ84igWyqNTTRkrdQIhvDtmQuTOkDXcTvCCmYISM2fuBK9ZTQ_0kuf69T6iIjH1Aw7e7CBKJpV60GI9u89_AcDqm18bwNlVTLPDOujMNt-gpzTZBdD4gr87QEdPuzBaeI_35Q6LO_jqkUfa7yoewVNqml_DC55rwiCE0Jysv69mqD1MZN9ikXgXbTSZYbwDDJ_EPEPRwfxMq59v-V7z7iBeHsf1_WdGppB3-0AHzZNvkDJe53rRjHwVBlvk7eXa4STWfStVVCz2e_tyqDANKtLkgFFzN3pj1TSBFAzbSY0zzAgIZS1a9R5xNAYH7lBV0wK0r6f4VX-nAxonf3ABTsM7vbH1qNUPf_v19PLcLN8wfRi4BGhKcKqPBF_GbsmmhoFMhuqKs0LDNpBgtIm3om3mrVsEfwNPABU3ac7_0V86eP7eod92QHHCLtOJRq_7lXi4FUEAp2NCASdhtDF0vVcSgKSu5sppQezLQlJGrfaSrsnFswlbBrQ6OFxoVzpadArKPzX4_LD0H5QWOMEaEJDVYJSb1J2ggJxt6jK9-mmDmgYejZJdOT9dx22SQyw_OzDBUYfR6OKsPO_mAxMZqJrqj-9FlokxFUPSmXVxcRIhZT3YZnyOYfGgg3x70De7hyZ0kYz0AbpokF4boITPzhFsWyxQOBmEftDlPOoYr1oG6b-kNXF3mxhIJSYPxgKapyLu_ku_6bs_fZD1Bm_QEgPw7-J60tDEblPg-rmY11zY-Kpymq_ESnlUyuucxD1c4-UIs_HUWLYaMJ5yEbFObbjKpPu0e2Ul7vtQyEKQd0Po7wuROIPHDcPomaiioS_SUgzTQrzqSc1vodRFXCJGasP_9pKXAvZwdJg=w755-h156-no?authuser=0'>

>Site sujeito a erros por causa de dados incompletos!<br>
>Talvez o seu Pokémon não saia com os dados conforme o esperado.

<img src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-md.png' width = 40% height = 15%>

<h2>🖊️ Autor</h2>

[<img src='https://avatars.githubusercontent.com/u/54039202?v=4' width = 300><br><sub>Leonardo Lopes Braga</sub>](https://github.com/Elelebe)

<h2>📝 Licença</h2>

Licenciado pelo [MIT License](./LICENSE).
