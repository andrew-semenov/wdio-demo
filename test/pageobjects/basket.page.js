import Page from "./page.js";

class Basket extends Page {
    get title() {
        return $('div.description div b')
    }

    get price() {
        return $('div.price b')
    }

    get author() {
        return $('div.author-name')
    }
}

export default new Basket()
