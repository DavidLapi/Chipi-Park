// Servicio de producto

import api from "../axiosConfig";

const productService = {
    // Obtener todos los productos (con filtros opcionales)
    getProducts: async (params = {}) => {
        try {
            const response = await api.get('/products/', { params })
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },
    // Obtener un producto por ID
    getProductById: async (id) => {
        try {
            const response = await api.get(`/products/${id}/`)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Obtener productos destacados
    getFeaturedProducts: async () => {
        try {
            const response = await api.get('/products/featured/')
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Buscar productos
    searchProducts: async (query) => {
        try {
            const response = await api.get('/products/', {
                params: { search: query }
            });
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Crear producto (Admin)
    createProduct: async (productData) => {
        try {
            const response = await api.post('/products/', productData)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Actualizar producto (Admin)
    updateProduct: async (id, productData) => {
        try {
            const response = await api.patch(`/products/${id}/`, productData)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Eliminar producto (Admin)
    deleteProduct: async (id) => {
        try {
            await api.delete(`/products/${id}/`)
            return { success: true }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },
}

export default productService