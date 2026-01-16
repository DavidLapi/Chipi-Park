/**
 * Página Login
 * Propósito: Iniciar sesión de usuario registrado
 */

import React from 'react'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { Link } from 'react-router'

function Login() {
  return (
    <div>
      <Header />
        {/**Cuerpo de página */}
        <main class="relative z-10 flex-1 flex items-center justify-center px-4 py-12">
          <div class="w-full max-w-500 bg-white dark:bg-gray-900 shadow-2xl rounded-xl overflow-hidden border border-gray-100 dark:border-gray-800">
            <div class="w-full h-32 bg-primary flex items-center justify-center relative overflow-hidden">
              <div class="absolute inset-0 opacity-20">
                <div class="grid grid-cols-4 gap-4 p-4">
                  <span class="material-symbols-outlined text-white text-4xl">toys</span>
                  <span class="material-symbols-outlined text-white text-4xl">rocket_launch</span>
                  <span class="material-symbols-outlined text-white text-4xl">cruelty_free</span>
                  <span class="material-symbols-outlined text-white text-4xl">extension</span>
                </div>
              </div>
              <div class="relative z-10 bg-white dark:bg-gray-900 p-4 rounded-full shadow-lg">
                <span class="material-symbols-outlined text-primary text-5xl">smart_toy</span>
              </div>
            </div>
            <div class="p-8">
              <div class="text-center mb-8">
                <h1 class="text-gray-900 dark:text-white text-2xl font-bold leading-tight">¡Qué bueno verte de nuevo!</h1>
                <p class="text-gray-500 dark:text-gray-400 mt-2 text-sm">Ingresa a tu cuenta de Fun Zone</p>
              </div>
              <form class="space-y-6">
                <div class="flex flex-col gap-2">
                  <label class="text-gray-900 dark:text-gray-200 text-sm font-semibold">Correo Electrónico</label>
                  <input class="flex w-full rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-14 px-4 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="ejemplo@correo.com" type="email"/>
                </div>
                <div class="flex flex-col gap-2">
                  <div class="flex justify-between items-center">
                    <label class="text-gray-900 dark:text-gray-200 text-sm font-semibold">Contraseña</label>
                    <a class="text-primary text-xs font-bold hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                  </div>
                  <div class="relative group">
                    <input class="flex w-full rounded-xl text-gray-900 dark:text-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 h-14 px-4 pr-12 placeholder:text-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none" placeholder="********" type="password"/>
                      <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-primary">
                        <span class="material-symbols-outlined">visibility</span>
                      </div>
                    </div>
                  </div>
                  <div class="w-full flex items-center justify-around">
                    <button class="w-100 rounded-xl h-14 bg-primary text-blue-500 text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" type="submit">
                      Iniciar Sesión
                    </button>
                    <button class="w-100 rounded-xl h-14 bg-primary text-blue-500 text-lg font-bold shadow-lg shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all" type="reset">
                      Limpiar
                    </button>
                  </div>
              </form>
              {/*<!-- Divider -->*/}
              <div class="relative my-8">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                </div>
              <div class="relative flex justify-center text-sm">
                <span class="bg-white dark:bg-gray-900 px-4 text-gray-500">¿Nuevo por aquí?</span>
              </div>
            </div>
            {/*<!-- Registration Link -->*/}
            <div class="text-center">
              <p class="text-gray-600 dark:text-gray-400 text-sm">
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