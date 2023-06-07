export const globalVariables = {
    get API_PORT() {
        return 8089
    },

    get URL() {
        return `http://localhost:${this.API_PORT}/`
    },

    get limit() {
        return 5
    },
}
