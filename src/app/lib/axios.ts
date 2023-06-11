import { globalVariables } from '@globalVariables'
import axios from 'axios'

const instance = axios.create({
    baseURL: globalVariables.URL,
    headers: {
        authorization: 'Bearer ' + localStorage.getItem('token'),
    },
})

export { instance as axios }
