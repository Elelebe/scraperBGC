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

<img src = 'https://lh3.googleusercontent.com/v_v0pzO6UiFDMwAunPx4Pviovx4v5yKnCdNEJ3arcHU6KtuBMCNTujL53ZXr-tg4t0VedZJHFvIWPrnINtSMc9BVAm2VqWhX1MtJ5-8BYEbAZEStOrPMBh9-2ZfgPWJDBrJNcEIbfrDydo8T6sqvoLz-m5BdamILTMs0Wuh5AK8mgbZ9IXBdvcNdG8neJvjrFxD0myu7mG4UT6izVyvWWsfAcbElrNZVpp5hKI-0BC4b7c2Z6lX3Jw9qn8jiBlSK96mrObsHDUtRPrjbASNQDhiJjiC-REg6myjr_bCOR0s2POQzzY6sGvuyxjwKtnj5wWLdKOpQrRpp3iK83yIq5c5kLiGcFRTZ8tUoCogOd9FDfBkGEyNb5O4a5lB17EB6af6hWmR5cXGnRdDabkxL89xc_6Wa21bOxV5PsihXF2gYieEb75TvNW-oSh_i3PYCNiRuVsZ2gwXYUABATNZpb3YCCpNSQ9rAU3HPeNNVHsGjmneK4APMOc9z-VTx_FLDrpjKW-E1Etf3LhUygGR0cdpIQuU0oqFMl6HhNvJKUbP_0gdsDwzqf1esXAAxS8hvTrii8dNzF71sPreL56fL6gPebkzNnWkBTzKEJ9otMRXeIx03HKkojF6s1luLDWogpyiunKo0ZM78qtC2SumPQtpe69W9GPbO_rUcEbwmFR7HnAZh3t_IEShyvMjMuHz7qNvi-OL8RKmzRTa4RRxZb09avt4LhYaEBY1N7PqoadipTupQslrLmIv8-i2JVeP2PD_vCXT7AxjGqUNXHtlvnmHzlqDLMaifjKmlXBBH7ICkpoi_M_2Il9d8XlgZ9fvoSRjtY44K9OH08LtFquDYPU32L3v1UWpfxDUMz0WJKGihDimQ6qPIHNpuQEFTQzKz8pLDhPdMMxLrTVyfuPWV_ynL45Q2KnDitIE37anoHzDrfrsdpg=w733-h579-no?authuser=0'>

>Site sujeito a erros por causa de dados incompletos!<br>
>Talvez o seu Pokémon não saia com os dados conforme o esperado.

<img src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-md.png' width = 40% height = 15%>

<h2>🖊️ Autor</h2>

[<img src='https://avatars.githubusercontent.com/u/54039202?v=4' width = 300><br><sub>Leonardo Lopes Braga</sub>](https://github.com/Elelebe)

<h2>📝 Licença</h2>

Licenciado pelo [MIT License](./LICENSE).
