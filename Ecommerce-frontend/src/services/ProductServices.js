
import axios from 'axios'
const REST_API_BASE_URL = 'http://localhost:1010/'

export const listProducts = () =>axios.get(REST_API_BASE_URL);