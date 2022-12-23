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
 <a href = 'https://code.visualstudio.com/Download'>
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

<img src = 'https://camo.githubusercontent.com/05de083d395cbd61315f627a2b37ad89e9054566ae6e23ba970ee27a633595a7/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f765f7630707a4f36556946444d7741756e5078345076696f7678347635794b6e43644e454a336172634855364b7475424d434e54756a4c35335a58722d74673474305665645a4a484676495750726e494e74534d63394256416d325671576858314d744a352d3842594562415a4553744f72504d4268392d325a666750574a4442724a4e6345496266724479646f3854367371766f4c7a2d6d354264616d494c544d733057756835414b386d67625a394958426476634e6447386e654a766a72467844306d7975376d4734555436697a56797657577366416362456c724e5a56707035684b492d30424334623763325a366c58334a7739716e386a69426c534b39366d724f6273484455745250726a6241534e514468694a6a69432d524567366d796a725f62434f52307332504f517a7a59367347767579786a774b746e6a3577574c644b4f70517252707033694b38337949713563356b4c6947634652545a3874556f436f674f6439464466426b4745794e62354f3461356c42313745423661663668576d52356358476e52644461626b784c383978635f3657613231624f78563550736968584632675969654562373554764e572d6f53685f69335059434e69527556735a326777585955414241544e5a706233594343704e535139724155334850654e4e564873476a6d6e654b3441504d4f63397a2d5654785f464c4472706a4b572d4531457466334c6855796747523063647049517555306f71464d6c3648684e764a4b5562505f3067647344777a716631657358414178533868765472696938644e7a463731735072654c3536664c36675065626b7a4e6e576b42547a4b454a396f744d52586549783033484b6b6f6a463673316c754c44576f67707969756e4b6f305a4d37387174433253756d5051747065363957394750624f5f7255634562776d465237486e415a6833745f4945536879764d6a4d75487a37714e76692d4f4c38524b6d7a525461345252785a623039617674344c685961454259314e3750716f6164697054757051736c724c6d4976382d69324a5665503250445f764358543741786a4771554e5848746c766e6d487a6c71444c4d6169666a4b6d6c584242483749436b706f695f4d5f32496c396438586c675a3966766f53526a745934344b394f4830384c744671754459505533324c337631555770667844554d7a30574a4b47696844696d5136715049484e707551454654517a4b7a38704c446850644d4d784c7254567966755057565f796e4c343551324b6e44697449453337616e6f487a44726672736470673d773733332d683537392d6e6f3f61757468757365723d30'>

>Site sujeito a erros por causa de dados incompletos!<br>
>Talvez o seu Pokémon não saia com os dados conforme o esperado.

<img src = 'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1998567/coding-svg-clipart-md.png' width = 40% height = 15%>

<h2>🖊️ Autor</h2>

[<img src='https://avatars.githubusercontent.com/u/54039202?v=4' width = 300><br><sub>Leonardo Lopes Braga</sub>](https://github.com/Elelebe)

<h2>📝 Licença</h2>

Licenciado pelo [MIT License](./LICENSE).
