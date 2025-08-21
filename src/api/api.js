import axios from 'axios'

const api = axios.create({
  // Using proxy to avoid CORS issues when in development mode
  baseURL: '/api/cnb/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/',
  headers: {
    'Accept': 'text/plain, text/*, */*',
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
  }
})

export default api