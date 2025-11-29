import axios from 'axios'

const API_BASE_URL = 'https://menu-api.onrender.com/api'

// Create axios instance with better error handling
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Add request interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message)
    return Promise.reject(error)
  }
)

export const getMenu = async () => {
  try {
    const response = await api.get('/menu')
    console.log('Menu data loaded successfully:', response.data.length, 'categories')
    return response.data
  } catch (error) {
    console.error('Error fetching menu:', error)
    // Return sample data for demo if API is down
    return [
      {
        id: 1,
        name: "ÇáãŞÈáÇÊ",
        description: "ãŞÈáÇÊ áĞíĞÉ áÈÏÁ æÌÈÊß",
        products: [
          {
            id: 1,
            name: "ÓáØÉ íæäÇäíÉ",
            description: "ÓáØÉ ØÇÒÌÉ ãÚ ÇáÎÖÇÑ æÇáÒíÊæä æÇáÌÈäÉ ÇáÈíÖÇÁ",
            price: 25,
            is_available: true,
            images: []
          },
          {
            id: 2,
            name: "ÍãÕ ÈÇáØÍíäÉ",
            description: "ÍãÕ ØÇÒÌ ãÚ ÇáØÍíäÉ æÒíÊ ÇáÒíÊæä",
            price: 18,
            is_available: true,
            images: []
          }
        ]
      },
      {
        id: 2,
        name: "ÇáæÌÈÇÊ ÇáÑÆíÓíÉ",
        description: "æÌÈÇÊ ÑÆíÓíÉ ÔåíÉ æãÔÈÚÉ",
        products: [
          {
            id: 3,
            name: "ÔÇæÑãÇ áÍã",
            description: "ÔÇæÑãÇ áÍã ãÔæíÉ ãÚ ÇáÎÖÇÑ æÇáÕáÕÇÊ",
            price: 35,
            is_available: true,
            images: []
          },
          {
            id: 4,
            name: "ßÈÉ ãŞáíÉ",
            description: "ßÈÉ ãŞáíÉ ãŞÑãÔÉ ãÚ ÇááÍã æÇáÊæÇÈá",
            price: 28,
            is_available: true,
            images: []
          }
        ]
      }
    ]
  }
}

export const getSettings = async () => {
  try {
    const response = await api.get('/settings')
    return response.data
  } catch (error) {
    console.error('Error fetching settings:', error)
    return {
      siteName: "ãØÚãäÇ ÇáÑÇÆÚ",
      logo: null,
      primaryColor: "#3b82f6",
      secondaryColor: "#1e40af",
      backgroundColor: "#f8fafc"
    }
  }
}
