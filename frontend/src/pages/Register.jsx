/**
 * Página Register
 * Propósito: Registro de usuario nuevo 
 */

import React from 'react'

import { Link } from 'react-router'

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

function Register() {
  return (
    <div>
      <Header />
      {/**Cuerpo de página */}
      <main class="flex-1 relative flex items-center justify-center p-6">
        {/*<!-- Abstract Background Pattern -->*/}
        <div class="absolute inset-0 toy-pattern pointer-events-none"></div>
        {/*<!-- Registration Card Container -->*/}
        <div class="max-w-350 w-full grid md:grid-cols-2 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] relative z-10">
        {/*<!-- Visual Side -->*/}
          <div class="hidden md:flex flex-col justify-center p-12 bg-primary/10 dark:bg-primary/5 border-r border-gray-100 dark:border-slate-800">
            <div class="mb-8">
              <div class="w-16 h-16 bg-accent-peach rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent-peach/20">
                <span class="material-symbols-outlined text-white text-3xl">celebration</span>
              </div>
              <h2 class="text-3xl font-black text-[#121517] dark:text-white mb-4 leading-tight">¡Únete a la mayor aventura de juego!</h2>
              <p class="text-[#657b86] dark:text-gray-400 text-lg">Crea tu cuenta hoy y obtén acceso exclusivo a lanzamientos limitados y descuentos especiales en toda la tienda.</p>
            </div>
            <div class="space-y-4">
              <div class="flex items-center gap-3">
                <div class="size-6 bg-accent-mint rounded-full flex items-center justify-center text-white">
                  <span class="material-symbols-outlined text-sm">check</span>
                </div>
                <span class="text-sm font-medium text-[#121517] dark:text-gray-300">Envíos gratis en tu primera compra</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="size-6 bg-accent-mint rounded-full flex items-center justify-center text-white">
                  <span class="material-symbols-outlined text-sm">check</span>
                </div>
                <span class="text-sm font-medium text-[#121517] dark:text-gray-300">Puntos Fun Zone por cada compra</span>
              </div>
            </div>
          <div class="mt-12 rounded-2xl overflow-hidden aspect-video relative group">
            <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
            <img alt="Niño jugando con bloques" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Niño feliz jugando con bloques de colores" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_jQHtRnA0tvovB-WmzGlSDT-xR1zSpuXoZQnoAa2ercfy_cEr8ZufZuZyIhRju-CXLkeaLNwWT6lSPD71tguam5BVXSwbrjAW_igF6pegWS0lr8ymsY5BYAn7ufbYwhzbnt5EYxnSIc4lccxXlD0wVq-1_30iyThrvZ4ZWQ7xtXn-OndonU6aK-TUvi3VVYSRac_1pdg-opHvBdPGK4f0rYMUTw9zrq1KvtkXMcNkgYgNkzK8HmCAuANMM2U1ryAFRjDzENzi2sc4"/>
            <div class="absolute bottom-4 left-4 text-white">
              <p class="text-xs font-bold uppercase tracking-widest opacity-80">Nueva Colección</p>
              <p class="text-lg font-bold">Bloques de Construcción 2024</p>
            </div>
          </div>
        </div>
        {/*<!-- Form Side -->*/}
        <div class="p-8 md:p-12 flex flex-col justify-center">
          <div class="mb-8">
            <h3 class="text-2xl font-black text-[#121517] dark:text-white">Regístrate</h3>
            <p class="text-[#657b86] dark:text-gray-400">Completa tus datos para empezar.</p>
          </div>
          <form class="space-y-5">
            {/*<!-- Nombre Completo --> */}
            <div class="flex flex-col gap-1.5">
              <label class="text-[#121517] dark:text-gray-200 text-sm font-bold">Nombre Completo</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">person</span>
                <input class="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#dce2e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#121517] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="Ej. Juan Pérez" type="text" required/>
              </div>
            </div>
            {/*<!-- Correo Electrónico --> */}
            <div class="flex flex-col gap-1.5">
              <label class="text-[#121517] dark:text-gray-200 text-sm font-bold">Correo Electrónico</label>
              <div class="relative">
                <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail</span>
                <input class="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#dce2e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#121517] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="juan@ejemplo.com" type="email" required/>
              </div>
            </div>
            {/*<!-- Contraseñas -->*/}
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex flex-col gap-1.5">
                <label class="text-[#121517] dark:text-gray-200 text-sm font-bold">Contraseña</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">lock</span>
                  <input class="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#dce2e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#121517] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="••••••••" type="password" required/>
                </div>
              </div>
            <div class="flex flex-col gap-1.5">
              <label class="text-[#121517] dark:text-gray-200 text-sm font-bold">Confirmar</label>
                <div class="relative">
                  <span class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">key</span>
                  <input class="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#dce2e5] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#121517] dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none" placeholder="••••••••" type="password" required/>
                </div>
              </div>
            </div>
            {/*<!-- Checkbox -->*/}
            <div class="flex items-start gap-3 py-2">
              <input class="mt-1 size-5 rounded border-gray-300 dark:border-slate-700 text-primary focus:ring-primary cursor-pointer" id="terms" type="checkbox" required/>
              <label class="text-sm text-[#657b86] dark:text-gray-400 leading-snug cursor-pointer select-none" for="terms">
                  Acepto los <a class="text-primary font-bold hover:underline" href="#">términos y condiciones</a> y la política de privacidad.
              </label>
            </div>
            {/*<!-- Buttons -->*/}
            <div class="w-full flex items-center justify-around">
              <button class="w-50 bg-primary hover:bg-primary/90 text-blue-500 font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                Crear Cuenta
                <span class="material-symbols-outlined">arrow_forward</span>
              </button>
              <button class="w-50 bg-primary hover:bg-primary/90 text-blue-500 font-bold py-4 rounded-xl shadow-lg shadow-primary/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="reset">
                Limpiar
                <span class="material-symbols-outlined">Autorenew</span>
              </button>
            </div>
            
            {/*<!-- Footer link -->*/}
            <div class="text-center pt-4">
              <p class="text-sm text-[#657b86] dark:text-gray-400">
                ¿Ya tienes una cuenta? 
                <Link to="/login">
                  <span class="text-primary font-bold hover:underline ml-1">Inicia sesión</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default Register