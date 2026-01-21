// AuthContext.jsx
// Context de Autenticación de usuario

import React, { createContext, useState, useEffect } from 'react'
import authService from '../api/services/authService';
import api from '../api/axiosConfig'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    // Cargar usuario al iniciar
    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('access_token')

            if (token) {
                const result = await authService.getCurrentUser()

                if (result.success) {
                    setUser(response.data)
                    setIsAuthenticated(true)
                } else {
                    // Token inválido, limpiar
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('refresh_token')
                }
            }
            setLoading(false)
        }

        loadUser()
    }, [])

    // Login
    const login = async (email, password) => {
        const result = await authService.login(email, password)
      
        if (result.success) {
            const { access, refresh } = result.data

            // Guardar tokens
            localStorage.setItem('access_token', access);
            localStorage.setItem('refresh_token', refresh);

            // Obtener datos del usuario
            const userResult = await authService.getCurrentUser() 

            if (userResult.success) {
                setUser(userResult.data)
                setIsAuthenticated(true)
            }
        } 

        return result
    };

    // Register
    const register = async (userData) => {
        const result= await authService.register(userData)

        if (result.success) {
            const { tokens, user: newUser } = result.data;
      
            // Guardar tokens
            localStorage.setItem('access_token', tokens.access);
            localStorage.setItem('refresh_token', tokens.refresh);
      
            setUser(newUser);
            setIsAuthenticated(true);
        }
        
        return result
        
    };

    // Logout
    const logout = async () => {
        const refreshToken = localStorage.getItem('refresh_token');

        if (refreshToken) {
            await authService.logout(refreshToken)
        }
            
        // Limpiar estado
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
        setIsAuthenticated(false)
    }

    // Actualizar perfil
    const updateProfile = async (userData) => {
        if (!user) return { success: false, error: 'No hay usuario autenticado' }
    
        const result = await authService.updateProfile(user.id, userData)
    
        if (result.success) {
            setUser(result.data)
        }
    
        return result
    }

    const value = {
        user, 
        loading, 
        isAuthenticated,
        login, 
        register, 
        logout,
        updateProfile,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
  );
}
