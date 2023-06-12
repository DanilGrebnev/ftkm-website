export const globalVariables = {
    get API_PORT() {
        return 8089
    },

    get URL_PRODUCTION() {
        return `https://vstu.mitlp.ru/`
    },

    get URL_DEVELOPMENT() {
        return `http://localhost:${this.API_PORT}/`
    },

    get URL() {
        return this.URL_PRODUCTION
    },

    get limit() {
        return 5
    },
}
