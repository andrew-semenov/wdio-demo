import Page from "./page.js";

class BestsellerPage extends Page {
    get filterDownload() {
        return $('#f-Download')
    }

    get filterPDF() {
        return $('#ft-pdf')
    }

    get filterDownloadSelected() {
        return $('//li[@class="selected-filter"][1]/span[@class="f-title"]')
    }

    get filterPDFSelected() {
        return $('//li[@class="selected-filter"][2]/span[@class="f-title"]')
    }

    async selectFilterDownload() {
        await this.filterDownload.click()
    }

    async selectFilterPDF() {
        await this.filterPDF.click()
    }
}

export default new BestsellerPage()
