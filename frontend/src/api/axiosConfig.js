/* 
    Archivo de configuración de Axios
    Conecta Backend con el Frontend
*/

import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para añadir el token a cada peticion
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptor para manejar errores y refresh token
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Si el token expiró (401) y no hemos reintentado aún
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post('http://localhost:8000/api/auth/refresh/', {
                    refresh: refreshToken,
                });

                const { access } = response.data;
                localStorage.setItem('access_token', access);

                // Reintentar la petición original con el nuevo token
                originalRequest.headers.Authorization = `Bearer ${access}`;
                return api(originalRequest);

            } catch (refreshError) {
                // Si el refresh falla, logout
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;