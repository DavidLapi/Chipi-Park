// Componente para mostrar errores

import React from 'react';
import { AlertCircle, X } from 'lucide-react';

const ErrorMessage = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-4 mb-4 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
      <div className="flex-1">
        <p className="text-red-800 text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-red-500 hover:text-red-700 transition"
        >
          <X className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ErrorMessage;