import { globalVariables } from '@globalVariables'
import axios from 'axios'

const instance = axios.create({
    baseURL: globalVariables.URL,
})

export { instance as axios }
