const puppeteer = require('puppeteer')
const fs = require('fs').promises;

async function start(){
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    
    
    //Digite aqui o nome do Pokémon:
    const pokemon = 'pokemon-name';
    

    await page.goto('https://pokemon.fandom.com/pt-br/wiki/Pokédex_Nacional')

    await page.waitForSelector(".global-navigation__search.global-navigation__icon")
    const search = await page.$(".global-navigation__search.global-navigation__icon")
    await page.evaluate(search => search.click(), search)

    await page.waitForSelector(".SearchInput-module_input__LhjJF")
    await page.type(".SearchInput-module_input__LhjJF",pokemon, {delay: 0})
    //await page.waitForTimeout(1000);
    await page.keyboard.press('Enter')

    await page.waitForSelector(".mw-search-exists a")
    //await page.waitForTimeout(1000);

    const search2 = await page.$(".mw-search-exists a")

    await Promise.all([
        page.evaluate(search2 => search2.click(), search2),
        page.waitForNavigation(),
    ]) 
    
    /*A exemplo do Charizard, alguns Pokémons evoluídos não foram reconhecidos nos dados da tabela por conta de megaevoluções.
    Por isso, preferi mostrar o primeiro parágrafo de informações para revelar o(s) seu(s) tipo(s).*/
    const nometipo = await page.$eval('#mw-content-text > div > p:nth-child(3)', el => el.textContent)
    const nome = await page.$eval('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(1) > td > table > tbody > tr > td:nth-child(2)', el => el.textContent)
    const categoria = await page.$eval('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(3) > td:nth-child(1)', el => el.textContent)
    const altura = await page.$eval('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td:nth-child(1)', el => el.textContent)
    const peso = await page.$eval('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(5) > td:nth-child(2)', el => el.textContent)
    const genero = await page.$eval('#mw-content-text > div > table:nth-child(2) > tbody > tr:nth-child(3) > td > table > tbody > tr:nth-child(9) > td', el => el.textContent)

    console.log("\n"+nometipo)
    console.log("\nCategoria: "+categoria+"Altura: "+altura+"Peso: "+peso+"Distribuição de Gênero: "+genero)

    await browser.close()
}

start()
