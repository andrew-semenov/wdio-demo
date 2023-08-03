export default class Page {
    open(path) {
        return browser.url(`https://eduki.com/${path}`)
    }
}
