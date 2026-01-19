// AuthContext.jsx
// Context de Autenticación de usuario

import React, { createContext, useState, useEffect } from 'react'
import api from '../api/axiosConfig'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // Cargar usuario al iniciar
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('access_token');
            if (token) {
                try {
                    const response = await api.get('/users/me/');
                    setUser(response.data);
                } catch (error) {
                    console.error('Error loading user:', error);
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                }
            }
            setLoading(false);
        };

            loadUser();
    }, []);

    // Login
    const login = async (email, password) => {
        try {
            const response = await api.post('/auth/login/', { email, password });
            const { access, refresh } = response.data;
      
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            // Obtener datos del usuario
            const userResponse = await api.get('/users/me/');
            setUser(userResponse.data);

            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data?.detail || 'Error al iniciar sesión' 
            };
        }
    };

    // Register
    const register = async (userData) => {
        try {
            const response = await api.post('/auth/register/', userData);
            const { tokens, user: newUser } = response.data;
      
            localStorage.setItem('access_token', tokens.access);
            localStorage.setItem('refresh_token', tokens.refresh);
            setUser(newUser);

            return { success: true };
        } catch (error) {
            return { 
                success: false, 
                error: error.response?.data || 'Error al registrarse' 
            };
        }
    };

    // Logout
    const logout = async () => {
        try {
            const refreshToken = localStorage.getItem('refresh_token');
            await api.post('/auth/logout/', { refresh: refreshToken });
        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            setUser(null);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
  );
}
