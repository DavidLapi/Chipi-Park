// Formatear precio
export const formatPrice = (price) => {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

// Formatear fecha
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

// Formatear fecha corta
export const formatDateShort = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date)
}

// Truncar texto
export const truncateText = (text, maxLength = 100) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

// Generar slug
export const generateSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
};

// Validar email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Calcular rating promedio
export const calculateAverageRating = (reviews) => {
  if (!reviews || reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return (sum / reviews.length).toFixed(1)
}

// Verificar si hay stock
export const hasStock = (product) => {
  return product.stock > 0
}

// Obtener badge de producto (Nuevo, Hot, Sale)
export const getProductBadge = (product) => {
  const createdDate = new Date(product.created_at)
  const now = new Date()
  const daysDiff = Math.floor((now - createdDate) / (1000 * 60 * 60 * 24))
  
  // Si es de hace menos de 7 días
  if (daysDiff < 7) return { text: 'Nuevo', color: 'bg-blue-500' }
  
  // Si tiene descuento (puedes añadir lógica de descuento)
  // if (product.discount > 0) return { text: 'Sale', color: 'bg-red-500' };
  
  // Si tiene muchas ventas o rating alto
  if (product.average_rating >= 4.5) return { text: 'Top', color: 'bg-green-500' }
  
  return null
};

// Debounce para búsquedas
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    };
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  };
};

// Scroll to top
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}