import MaterialPage from '../pageobjects/material.page.js'
import BasketPage from '../pageobjects/basket.page.js'


describe('Add to basket', () => {
    it('should validate material in the basket(title, price, author)', async () => {
        await browser.maximizeWindow()

        await MaterialPage.open('895228/wir-wachsen-gemeinsam-kooperatives-poster-2023-wachstumsdenken')
        await MaterialPage.open('895228/wir-wachsen-gemeinsam-kooperatives-poster-2023-wachstumsdenken')
        // await MaterialPage.open()

        // await browser.pause(100000)

        const title = await MaterialPage.getTitle()
        console.log('Title: ============= ', title)
        const price = await MaterialPage.getPrice()
        console.log('price: ============= ', price)
        const author = await MaterialPage.getAuthor()
        console.log('author: ============= ', author)
        await MaterialPage.addToBasket()
        await MaterialPage.openBasketFromDialog()


        let basketUrl = await browser.getUrl()
        console.log('basketUrl: ============= ', basketUrl)
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        console.log(await browser.navigateTo(`${basketUrl}?cartTest=0`))
        console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++')
        

        let basketUrlCartTest = await browser.getUrl()
        console.log('basketUrlCartTest: ============= ', basketUrlCartTest)

        await expect(BasketPage.title).toBeDisplayed()
        await expect(BasketPage.title).toHaveText(title)
        await expect(BasketPage.price).toBeDisplayed()
        await expect(BasketPage.price).toHaveText(price)
        await expect(BasketPage.author).toBeDisplayed()
        await expect(BasketPage.author).toHaveText(author)

        // await browser.pause(300000)
    })
})