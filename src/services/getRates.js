import api from "../api/api"

const getRates = async () => {
  try {
    const response = await api.get('/daily.txt')
    // Check Response status
    if (response.status !== 200) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }
    
    return response.data
  } catch (error) {
    throw new Error(`Error fetching rates: ${error.message}`)
  }
}

export default getRates