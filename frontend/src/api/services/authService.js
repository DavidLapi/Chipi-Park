// authService
// Servicio de autenticación

import api from "../axiosConfig";

const authService = {
  // Registro de usuario
  register: async (userData) => {
    try {
        const response = await api.post('/auth/register/', userData)
        return { success: true, data: response.data }
    } catch (error) {
        return{
            success: false,
            error: error.response?.data || 'Error al registrarse'
        }
    }
  },

  // Login
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login/', { email, password })
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.detail || 'Credenciales inválidas' 
      }
    }
  },
  // Logout
    logout: async (refreshToken) => {
        try {
            await api.post('/auth/logout/', { refresh: refreshToken });
            return { success: true };
        } catch (error) {
            console.error('Logout error:', error);
            return { success: false };
        }
    },

    // Obtener usuario actual
    getCurrentUser: async () => {
        try {
        const response = await api.get('/users/me/');
        return { success: true, data: response.data };
        } catch (error) {
            return { success: false, error: error.response?.data };
        }
    },

    // Actualizar perfil
    updateProfile: async (userId, userData) => {
        try {
            const response = await api.patch(`/users/${userId}/`, userData);
            return { success: true, data: response.data };
        } catch (error) {
            return { success: false, error: error.response?.data };
        }
    },
}

export default authService