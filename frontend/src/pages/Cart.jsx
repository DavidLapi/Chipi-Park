/**
 * Página Cart
 * Propósito: Carrito de compras
 */

import React from 'react'

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import { Link } from 'react-router'

function Cart() {
  return (
    <div>
      <Header />
      <main class="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav class="flex items-center gap-2 mb-8 text-sm font-medium text-[#89617f]">
          <Link to='/'>
            <a class="hover:text-primary" href="#">Inicio</a>
          </Link>
          <span class="material-symbols-outlined text-sm">chevron_right</span>
          <span class="text-[#181116] dark:text-white">Tu Carrito</span>
        </nav>
        {/* Page Heading */}
        <div class="mb-10">
          <h1 class="text-4xl font-black mb-2 tracking-tight">Tu Carrito</h1>
          <p class="text-[#89617f]">Tienes 0 artículos listos para la diversión.</p>
        </div>
        <div class="flex flex-col lg:flex-row gap-10">
          {/* Product List Column */}
          <div class="flex-1 space-y-6">
            {/* Product Card 1 */}
            <div class="group bg-white dark:bg-[#2d1a2a] rounded-xl p-5 soft-shadow border border-transparent hover:border-primary/20 transition-all flex flex-col sm:flex-row items-center gap-6">
              <h1 className='text-xl text-black'>No hay productos seleccionados por el momento...</h1>
            </div>
            {/* Product Card 2 
            <div class="group bg-white dark:bg-[#2d1a2a] rounded-xl p-5 soft-shadow border border-transparent hover:border-primary/20 transition-all flex flex-col sm:flex-row items-center gap-6">
              <div class="relative size-32 bg-[#f4f0f3] dark:bg-[#3d2438] rounded-lg overflow-hidden shrink-0">
                <div class="w-full h-full bg-cover bg-center" data-alt="Catan board game box art with island" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD9qLV6GKB-LyO2qIUguPx-rr7fszBTFgYVA5Y6r7bXcNC1GVOgS6KvjDF9uf4QpsyRnUkzSypIwaWvh7lqgrfwfeYCpygBS5mAXvLhYs7sRbnx9ozQnADHq-sY_3LMVbyw2w13V3k5xV7W2K4UuPaQa_B7_K0xvau0iRSdICtH787qamW185JVGIdOgR759E3XUzT2I9bAhzMyYm3YxAYQ0Rt0ZZOgrHInW-e0lqfOWCpXJtzTXw_8UeAH8EF4IKRm0gHnzJSFhtwM');"></div>
              </div>
              <div class="flex-1 text-center sm:text-left">
                <div class="flex flex-wrap items-center gap-2 mb-1 justify-center sm:justify-start">
                  <span class="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded">En Stock</span>
                </div>
                <h3 class="text-lg font-bold">Catan: El Juego de Tablero</h3>
                <p class="text-sm text-[#89617f] mb-4">Estrategia y Diversión para la familia</p>
                <div class="flex items-center justify-center sm:justify-start gap-3">
                  <span class="text-xl font-black text-primary">$45.00</span>
                </div>
              </div>
              <div class="flex flex-col items-center sm:items-end justify-between gap-4 h-full shrink-0">
                <button class="text-[#89617f] hover:text-red-500 transition-colors">
                  <span class="material-symbols-outlined">delete</span>
                </button>
                <div class="flex items-center gap-3 bg-[#f4f0f3] dark:bg-[#3d2438] p-1 rounded-lg">
                  <button class="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-[#4d3047] transition-all">
                    <span class="material-symbols-outlined text-lg">remove</span>
                  </button>
                  <span class="w-8 text-center font-bold">1</span>
                  <button class="size-8 flex items-center justify-center rounded-md hover:bg-white dark:hover:bg-[#4d3047] transition-all">
                    <span class="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
              </div>
            </div>
            */}
            {/* Footer Actions */}
            <div class="flex justify-start pt-4">
              <Link to='/catalog'>
              <a class="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all" href="#">
                <span class="material-symbols-outlined">arrow_back</span>
                Continuar Comprando
              </a>
              </Link>
            </div>
          </div>
          {/* Order Summary Column */}
          <aside class="w-full lg:w-100">
            <div class="sticky top-28 bg-white dark:bg-[#2d1a2a] rounded-xl p-8 soft-shadow border border-[#f4f0f3] dark:border-[#3d2438]">
              <h2 class="text-2xl font-extrabold mb-8 tracking-tight">Resumen</h2>
              <div class="space-y-4 mb-8">
                <div class="flex justify-between text-[#89617f]">
                  <span>Subtotal</span>
                  <span class="font-semibold text-[#181116] dark:text-white">0.00€</span>
                </div>
                <div class="flex justify-between text-[#89617f]">
                  <span>Envío</span>
                  <span class="font-semibold text-green-500">GRATIS</span>
                </div>
                <div class="flex justify-between text-[#89617f]">
                  <span>Impuestos (Est.)</span>
                  <span class="font-semibold text-[#181116] dark:text-white">0.00€</span>
                </div>
                <div class="pt-4 border-t border-[#f4f0f3] dark:border-[#3d2438] flex justify-between items-end">
                  <span class="text-lg font-bold">Total</span>
                  <span class="text-3xl font-black text-primary">0.00€</span>
                </div>
              </div>
              <div class="space-y-4">
                <button class="w-full bg-primary text-white py-4 rounded-full font-bold text-lg hover:brightness-110 active:scale-[0.98] transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                  Finalizar Compra
                  <span class="material-symbols-outlined">arrow_forward</span>
                </button>
                <div class="flex items-center justify-center gap-4 py-4">
                  <div class="flex items-center gap-1 grayscale opacity-50">
                    <span class="material-symbols-outlined text-lg text-blue-600">security</span>
                    <span class="text-[10px] font-bold uppercase">Pago Seguro</span>
                  </div>
                  <div class="h-4 w-px bg-[#f4f0f3]"></div>
                  <div class="flex gap-2">
                    <span class="material-symbols-outlined text-gray-400">credit_card</span>
                    <span class="material-symbols-outlined text-gray-400">account_balance_wallet</span>
                  </div>
                </div>
              </div>
              <div class="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
                <p class="text-xs text-[#89617f] text-center leading-relaxed">
                  ¡Felicidades! Tu pedido califica para <span class="font-bold text-primary">Envío Prioritario gratuito</span>. Tiempo estimado: 2-3 días hábiles.
                </p>
              </div>
            </div>
          </aside>
        </div>
        {/* Featured / You might like section 
        <section class="mt-24">
          <h2 class="text-2xl font-black mb-8">También te podría gustar</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Mini Card 1 
            <div class="group cursor-pointer">
              <div class="aspect-square rounded-xl bg-[#f4f0f3] dark:bg-[#3d2438] overflow-hidden mb-3 relative">
                <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="LEGO creative building bricks" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBN2_OJT3rojTMGKDs7Cf5G1iq-EMOn1bJb7ibGggTsBUj0PkztHacAQFG0xj5sUK7w5pqm99HrrjPUaK1FaT250_8gohDinZp95RxXp7XfZeUc6D3-Zs0rTw3Ur4pgj45qZ_9GXiUsAzmCFsoPBrg3t5TgYWEKsAyNMpQWEABP5cDMAaXJveQ-_jQdICmsxEaVf6yDqVX-Wco4c9lzY52yMP7EWQyQXE4ZHUOst4rgmQTQsK5gGZwJbjoKHXeVvfbt-iDWZc-fHV82');"></div>
                <button class="absolute bottom-2 right-2 size-8 bg-white dark:bg-[#181116] rounded-full flex items-center justify-center shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span class="material-symbols-outlined text-lg">add</span>
                </button>
              </div>
              <p class="text-sm font-bold group-hover:text-primary transition-colors">LEGO Classic Brick Box</p>
              <p class="text-xs text-primary font-bold">$29.99</p>
            </div>
            {/* Mini Card 2 
            <div class="group cursor-pointer">
              <div class="aspect-square rounded-xl bg-[#f4f0f3] dark:bg-[#3d2438] overflow-hidden mb-3 relative">
                <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Uno card game deck" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAmzIyMu_sDzm0rpTDBL5Zjd6X4P7q3yxE7JegMBqVZ3IYLK1-1nMR2Vda2Zl8U7aWEG4QmBnthNTBNhppqA80cfVnL09YgswKvgIftpL-MU3gd-YYIhLBhPKCJpRdJgL2smo-7jHVNoFcnyv5fI4LWb6q2i0vu4YG2aKdu9n0r3ZW5HJwnzk_jOkpTsW2z7m5IswFcrurD0RKS2cM82bQUd3MWNWwRg9NqBax02DkVQAa0h1oOrq9sBLMUbW8aaCNsXF6NQZXQiVc9');"></div>
                  <button class="absolute bottom-2 right-2 size-8 bg-white dark:bg-[#181116] rounded-full flex items-center justify-center shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
                <p class="text-sm font-bold group-hover:text-primary transition-colors">Uno Card Game</p>
                <p class="text-xs text-primary font-bold">$9.99</p>
              </div>
              {/* Mini Card 3 
              <div class="group cursor-pointer">
                <div class="aspect-square rounded-xl bg-[#f4f0f3] dark:bg-[#3d2438] overflow-hidden mb-3 relative">
                  <div class="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Rubiks cube puzzle toy" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuBPi3KGEZFdjunzOdE88jbBbZyAvV-qhote_KW50CLHU5bx6YwMlAzgpXrRooPhwO5-xyoNA7qS0QnPgpGDCra8h5r4HuKZUCAMOs9YS4QgbX3GuEciVlrUOzrKrDW21mHc_gjsWp45dhqA0nB9RjF6laiZc-uEKGsmz5iU6_4fGcy9giX2qpVe4sa4YKoBqj08n659FbPQwz2S6KEWGJx_cWFSqkwXH70jHk8Nv1F5QD1lPFX9-ZxHXgPzQ7cHJXFoO_EdMM-VeHjg');"></div>
                  <button class="absolute bottom-2 right-2 size-8 bg-white dark:bg-[#181116] rounded-full flex items-center justify-center shadow-md text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span class="material-symbols-outlined text-lg">add</span>
                  </button>
                </div>
                <p class="text-sm font-bold group-hover:text-primary transition-colors">Rubik's Cube 3x3</p>
                <p class="text-xs text-primary font-bold">$12.50</p>
              </div>
            </div>
        </section>*/}
      </main>
      <Footer />
    </div>
  )
}

export default Cart