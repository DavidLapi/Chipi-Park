// Constantes que se usarán en toda la app

// URLs
export const API_BASE_URL = 'http://localhost:8000/api'
export const FRONTEND_URL = 'http://localhost:5173'

// Tipos de productos
export const PRODUCT_TYPES = {
  JUEGO_MESA: 'juego_mesa',
  VIDEOJUEGO: 'videojuego',
  PELUCHE: 'peluche',
}

export const PRODUCT_TYPE_LABELS = {
  juego_mesa: 'Juego de Mesa',
  videojuego: 'Videojuego',
  peluche: 'Peluche',
}

// Estados de pedidos
export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
}

export const ORDER_STATUS_LABELS = {
  pending: 'Pendiente',
  processing: 'Procesando',
  shipped: 'Enviado',
  delivered: 'Entregado',
  cancelled: 'Cancelado',
}

// Roles de usuario
export const USER_ROLES = {
  USER: 'user',
  ADMIN: 'admin',
}

// Configuración de paginación
export const ITEMS_PER_PAGE = 20

// Ratings
export const RATING_OPTIONS = [1, 2, 3, 4, 5]

// Mensajes
export const MESSAGES = {
  ERROR_GENERIC: 'Ha ocurrido un error. Por favor, intenta de nuevo.',
  SUCCESS_ADD_CART: 'Producto añadido al carrito',
  SUCCESS_REMOVE_CART: 'Producto eliminado del carrito',
  SUCCESS_LOGIN: 'Inicio de sesión exitoso',
  SUCCESS_REGISTER: 'Registro exitoso',
  SUCCESS_LOGOUT: 'Sesión cerrada',
  ERROR_LOGIN: 'Error al iniciar sesión',
  ERROR_REGISTER: 'Error al registrarse',
  CONFIRM_LOGOUT: '¿Estás seguro de que quieres cerrar sesión?',
  CONFIRM_DELETE: '¿Estás seguro de que quieres eliminar este elemento?',
}