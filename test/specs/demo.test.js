import Page from '../pageobjects/page.js'


describe('Eduki demo', ()=> {
    it('should filter by .pdf format for downloading', async() => {
        const width = 1920
        const height = 1080

        browser.setWindowSize(width, height)

        await Page.open('de')

        // Open the Bestseller page
        const navBestseller = await  $('=Bestseller')
        await navBestseller.click()

        // Select the Download format
        const filterDownload = await  $('#f-Download')
        await filterDownload.click()

        // Select the .PDF format
        const filterPDF = await  $('#ft-pdf')
        await filterPDF.click()

        // Check filters are selected
        const selectedFilterDownload = await  $('//li[@class="selected-filter"][1]/span[@class="f-title"]')
        await expect(selectedFilterDownload).toHaveText('Download')
        const selectedFilterPDF = await  $('//li[@class="selected-filter"][2]/span[@class="f-title"]')
        await expect(selectedFilterPDF).toHaveText('pdf')

        await browser.pause(5000)
    })
})