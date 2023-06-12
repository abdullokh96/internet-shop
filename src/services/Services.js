import axios from 'axios'

axios.defaults.baseURL = 'https://dummyjson.com'

// ? Данные котегории

const getCategories = () => {
    return axios.get('/products/categories')
}

const allProducts = () => {
    return axios.get('/products')
}

export const services = {
    getCategories,
    allProducts
}