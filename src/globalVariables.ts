export const globalVariables = {
    get API_PORT() {
        return 3001
    },
    get URL() {
        return `http://127.0.0.1:${this.API_PORT}/`
    },

    get limit() {
        return 5
    },
}
