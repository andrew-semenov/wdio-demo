import Page from "./page.js";

class DeutschPage extends Page {
    get navBestseller() {
        return $('=Bestseller')
    }

    async openBestsellerPage() {
        await this.navBestseller.click()
    }
    open() {
        return super.open('de');

    }
}

export default new DeutschPage()
