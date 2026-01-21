// Componente de pantalla de carga

import React from 'react'

const Loading = ({ size = 'md', fullScreen = false, text = 'Cargando...' }) => {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-12 h-12 border-4',
    lg: 'w-16 h-16 border-4',
  }

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className={`
          ${sizes[size]}
          border-blue-600 border-t-transparent
          rounded-full animate-spin
        `}
      />
      {text && <p className="text-slate-600 text-sm">{text}</p>}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
        {spinner}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center py-12">
      {spinner}
    </div>
  )
}

export default Loading