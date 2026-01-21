// Servicio de Reseñas

import api from "../axiosConfig";

const reviewService =  {
    // Obtener reseñas de un producto
    getProductReviews: async (productId) => {
        try {
            const response = await api.get('/reviews/', {
                params: { product: productId }
            });
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Crear reseña
    createReview: async (reviewData) => {
        try {
            const response = await api.post('/reviews/', reviewData)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Actualizar reseña
    updateReview: async (id, reviewData) => {
        try {
            const response = await api.patch(`/reviews/${id}/`, reviewData)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Eliminar reseña
    deleteReview: async (id) => {
        try {
            await api.delete(`/reviews/${id}/`)
            return { success: true }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },
}

export default reviewService