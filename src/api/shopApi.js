import axios from 'axios'

export const shopApi = axios.create({
    baseURL: 'https://fakestoreapi.com'
})