/**
 * Página Login
 * Propósito: Iniciar sesión de usuario registrado
 */

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import React, {useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(email, password);

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  return (
    <div>
      <Header />
        {/**Cuerpo de página */}
        <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-500 bg-white dark:bg-gray-900 shadow-2xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div className="w-full h-32 bg-primary flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="grid grid-cols-4 gap-4 p-4">
                  <span className="material-symbols-outlined text-white text-4xl">toys</span>
                  <span className="material-symbols-outlined text-white text-4xl">rocket_launch</span>
                  <span className="material-symbols-outlined text-white text-4xl">cruelty_free</span>
                  <span className="material-symbols-outlined text-white text-4xl">extension</span>
                </div>
              </div>
              <div className="relative z-10 bg-white dark:bg-gray-900 p-4 rounded-full shadow-lg">
                <span className="material-symbols-outlined text-primary text-5xl">smart_toy</span>
              </div>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <h1 className="text-gray-900 dark:text-white text-2xl font-bold leading-tight">¡Qué bueno verte de nuevo!</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm">Ingresa a tu cuenta de Chipi Park</p>
              </div>

              {error && (
                <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                  {error}
                </div> 
              )}

              <form className="space-y-6">
                <div className="flex flex-col gap-2">
                  <label className="text-gray-900 dark:text-gray-200 text-sm font-semibold">Correo Electrónico</label>
                  <input className="flex w-full rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-14 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="ejemplo@correo.com" type="email"/>
                </div>
                <div class="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-900 dark:text-gray-200 text-sm font-semibold">Contraseña</label>
                    <a className="text-primary text-xs font-bold hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div className="relative group">
                    <input className="flex w-full rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-14 px-4 pr-12 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="********" type="password"/>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-primary">
                        <span className="material-symbols-outlined">visibility</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-around">
                    <button className="w-100 rounded-xl h-14 bg-primary text-blue-500 text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" type="submit">
                      Iniciar Sesión
                    </button>
                    <button className="w-100 rounded-xl h-14 bg-primary text-blue-500 text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" type="reset">
                      Limpiar
                    </button>
                  </div>
              </form>
              {/*<!-- Divider -->*/}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white dark:bg-gray-900 px-4 text-gray-500">¿Nuevo por aquí?</span>
              </div>
            </div>
            {/*<!-- Registration Link -->*/}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                  ¿No tienes una cuenta? 
                  <Link to="/register"><span class="text-primary font-bold hover:underline ml-1">Regístrate aquí</span></Link>
              </p>
            </div>
            </div>
          </div>
        </main>
      <Footer />  
    </div>
  )
}

export default Login