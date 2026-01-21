// Servicio de pedidos

import api from "../axiosConfig";

const orderServices = {
    // Obtener todos los pedidos del usuario
    getOrders: async () => {
        try {
            const response = await api.get('/orders/')
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

  // Obtener un pedido por ID
  getOrderById: async (id) => {
    try {
      const response = await api.get(`/orders/${id}/`)
      return { success: true, data: response.data }
    } catch (error) {
      return { success: false, error: error.response?.data }
    }
  },

    // Crear nuevo pedido
    createOrder: async (orderData) => {
        try {
            const response = await api.post('/orders/', orderData)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },

    // Cancelar pedido
    cancelOrder: async (id) => {
        try {
            const response = await api.patch(`/orders/${id}/cancel/`)
            return { success: true, data: response.data }
        } catch (error) {
            return { success: false, error: error.response?.data }
        }
    },
}

export default orderServices

