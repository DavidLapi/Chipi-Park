// Servicio de categorias

import api from "../axiosConfig";

const categoryService = {
    // Obtener todas las categorías
    getCategories: async () => {
        try {
            const response = await api.get('/categories/')
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Obtener una categoría por ID
    getCategoryById: async (id) => {
        try {
            const response = await api.get(`/categories/${id}/`)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Crear categoría (Admin)
    createCategory: async (categoryData) => {
        try {
            const response = await api.post('/categories/', categoryData)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },
}

export default categoryService