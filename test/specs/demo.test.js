import DeutschPage from '../pageobjects/deutsch.page.js'
import BestsellerPage from '../pageobjects/bestseller.page.js'


describe('Eduki demo', ()=> {
    it('should filter by .pdf format for downloading', async() => {
        await browser.maximizeWindow()

        await DeutschPage.open()
        await DeutschPage.openBestsellerPage()

        await BestsellerPage.selectFilterDownload()
        await BestsellerPage.selectFilterPDF()

        // Check filters are selected
        await expect(BestsellerPage.filterDownloadSelected).toBeDisplayed()
        await expect(BestsellerPage.filterPDFSelected).toBeDisplayed()
    })
})