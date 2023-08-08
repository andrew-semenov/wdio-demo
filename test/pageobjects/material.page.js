import Page from "./page.js";

class AddToBasket extends Page {
    get inDenWarenkorb() {
        return $('button.custom-button.add-to-cart-btn')
    }

    get zumWarenkorb() {
        return $('//div[@class="modal-footer"]/button[2]')
    }

    get title() {
        return $('h1.title b')
    }

    get price() {
        return $('span.current-price')
    }

    get author() {
        return $('a.public-name')
    }

    async addToBasket() {
        await this.inDenWarenkorb.click()
    }

    async getTitle() {
        await this.title.waitForDisplayed()
        return this.title.getText()
    }

    async getPrice() {
        await this.price.waitForDisplayed()
        return this.price.getText()
    }

    async getAuthor() {
        await this.author.waitForDisplayed()
        return this.author.getText()
    }

    async openBasketFromDialog() {
        await this.zumWarenkorb.click()
    }

    open(material) {
        return super.open('de/material/' + material);
        // return super.open('de/material/17537/vorlagen-und-hintergruenden');
    }
}

export default new AddToBasket()
