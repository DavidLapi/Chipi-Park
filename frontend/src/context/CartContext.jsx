// Context para manejar el carrito de compras

import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext() 

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])
    const [cartCount, setCartCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)

    // Cargar carrito del localStorage al montar
    useEffect(() => {
        const savedCart = localStorage.getItem('cart')
        if (savedCart) {
            const items = JSON.parse(savedCart)
            setCartItems(items)
            calculateTotals(items)
        }
    }, [])

    // Guardar carrito en localStorage cuando cambia
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
        calculateTotals(cartItems)
    }, [cartItems])

    // Calcular totales
    const calculateTotals = (items) => {
        const count = items.reduce((total, item) => total + item.quantity, 0)
        const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    
        setCartCount(count)
        setCartTotal(total)
    }

    // Añadir producto al carrito
    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            // Verificar si el producto ya existe
            const existingItem = prevItems.find(item => item.id === product.id);
      
            if (existingItem) {
                // Incrementar cantidad
                return prevItems.map(item =>
                    item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                )
            } else {
                // Añadir nuevo producto
                return [...prevItems, { ...product, quantity }]
            }
        })
    }

    // Actualizar cantidad de un producto
    const updateQuantity = (productId, quantity) => {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }
    
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId
                ? { ...item, quantity }
                : item
            )
        )
    }

    // Eliminar producto del carrito
    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId))
    }

    // Vaciar carrito
    const clearCart = () => {
        setCartItems([])
    }

    // Verificar si un producto está en el carrito
    const isInCart = (productId) => {
        return cartItems.some(item => item.id === productId)
    }

    // Obtener cantidad de un producto en el carrito
    const getItemQuantity = (productId) => {
        const item = cartItems.find(item => item.id === productId)
        return item ? item.quantity : 0
    }

    const value = {
        cartItems,
        cartCount,
        cartTotal,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        isInCart,
        getItemQuantity,
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
