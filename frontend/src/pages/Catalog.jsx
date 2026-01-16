/**
 * Página Catalog
 * Propósito: Catálogo de productos
 */

import React from 'react'

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

function Catalog() {
  return (
    <div>
      <Header />
      <main class="max-w-300 mx-auto px-6 lg:px-20 py-8 flex gap-8">
        {/* Sidebar Filters */}
        <aside class="w-64 shrink-0 hidden lg:block sticky top-24 h-fit max-h-[calc(100vh-8rem)] overflow-y-auto sidebar-scroll pr-2">
          <div class="space-y-8">
            <div>
              <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">filter_list</span>
                Filtros
              </h3>
              <div class="space-y-6">
                {/* Categorías */}
                <div class="border-b border-[#e6e0db] dark:border-[#3a2f24] pb-6">
                  <p class="text-sm font-bold text-[#181411] dark:text-white mb-3">Categorías</p>
                  <div class="space-y-2">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input checked="" class="rounded border-[#e6e0db] text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
                      <span class="text-sm font-medium group-hover:text-primary transition-colors">Juegos de Mesa</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input checked="" class="rounded border-[#e6e0db] text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
                      <span class="text-sm font-medium group-hover:text-primary transition-colors">Peluches Fugglers</span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group opacity-60">
                      <input class="rounded border-[#e6e0db] text-primary focus:ring-primary w-5 h-5" type="checkbox"/>
                      <span class="text-sm font-medium">Accesorios</span>
                    </label>
                  </div>
                </div>
                {/* Precio */}
                <div class="border-b border-[#e6e0db] dark:border-[#3a2f24] pb-6">
                  <p class="text-sm font-bold text-[#181411] dark:text-white mb-3">Rango de Precio</p>
                  <input class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" max="200" min="0" step="10" type="range"/>
                  <div class="flex justify-between text-[11px] font-bold text-[#8a7560] mt-2">
                    <span>$0</span>
                    <span>$200+</span>
                  </div>
                </div>
                {/* Edad */}
                <div>
                  <p class="text-sm font-bold text-[#181411] dark:text-white mb-3">Edad Recomendada</p>
                  <div class="grid grid-cols-2 gap-2">
                    <button class="px-2 py-2 rounded-lg border border-[#e6e0db] dark:border-[#3a2f24] text-xs font-bold hover:border-primary hover:text-primary transition-all">3-6 años</button>
                    <button class="px-2 py-2 rounded-lg border border-primary bg-primary/10 text-primary text-xs font-bold">7-12 años</button>
                    <button class="px-2 py-2 rounded-lg border border-[#e6e0db] dark:border-[#3a2f24] text-xs font-bold hover:border-primary hover:text-primary transition-all">13-17 años</button>
                    <button class="px-2 py-2 rounded-lg border border-[#e6e0db] dark:border-[#3a2f24] text-xs font-bold hover:border-primary hover:text-primary transition-all">Adultos</button>
                  </div>
                </div>
              </div>
            </div>
            <button class="w-full py-3 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">
                Limpiar Filtros
            </button>
          </div>
        </aside>
        {/* Product Content */}
        <div class="flex-1">
        {/* Page Header */}
          <div class="mb-10">
            <nav class="flex gap-2 text-sm text-[#8a7560] mb-4">
              <a class="hover:text-primary" href="#">Tienda</a>
              <span>/</span>
              <span class="text-[#181411] dark:text-white font-semibold">Productos</span>
            </nav>
            <h2 class="text-4xl font-black tracking-tight mb-2">Catálogo de Productos</h2>
            <p class="text-[#8a7560]">Descubre una selección única de juegos estratégicos y monstruos encantadoramente feos.</p>
          </div>
          {/* Section: Juegos de Mesa */}
          <section class="mb-16">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-primary/20 text-primary rounded-lg">
                  <span class="material-symbols-outlined">casino</span>
                </div>
                <h3 class="text-2xl font-bold">Juegos de Mesa</h3>
              </div>
              <a class="text-sm font-bold text-primary hover:underline" href="#">Ver todo</a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"></div>
            {/* Product Card 1 */}
            <div class="product-card bg-white dark:bg-[#2b2118] rounded-2xl overflow-hidden border border-[#f5f2f0] dark:border-[#3a2f24] shadow-sm hover:shadow-xl group">
              <div class="relative h-64 overflow-hidden bg-[#f5f5f5]">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Classic Monopoly board game box and pieces" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA8E86REct4SUdz4yotQ-t04IL6ZwmcJGbB2KgtvgRMS6YiOZWY5eIN07f1zdcQ-k3oLtSd9QBHQbetPmMo9dLtSQwzOGygJYp1ZnYuH15Anc0C7KyEfqs0FtYQEEDC3o5uRv-iOs69ObYcJfL-TfTDwmCJZ_SdOjXC2kslFhmnQl6MFBDEZnFuIC1ylILZX5lyW8rYNLeZ_9Uz4_2Xg9nqfviULR_UvaWNUPlpJT-3SjBo-LOGDfvnJhW65qo1rW0H6Ex5mYxaO1N"/>
                <button class="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                  <span class="material-symbols-outlined text-[20px] fill-transparent hover:fill-current">favorite</span>
                </button>
                <div class="absolute bottom-4 left-4">
                  <span class="px-2 py-1 bg-primary text-white text-[10px] font-bold rounded uppercase tracking-wider">Más vendido</span>
                </div>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Monopoly: Edición Clásica</h4>
                <p class="text-sm text-[#8a7560] mb-4 line-clamp-2">El emocionante juego de negociar propiedades. ¡Conviértete en el magnate más rico!</p>
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-black text-primary">$34.99</span>
                  <button class="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                    <span class="material-symbols-outlined">shopping_bag</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Card 2 */}
            <div class="product-card bg-white dark:bg-[#2b2118] rounded-2xl overflow-hidden border border-[#f5f2f0] dark:border-[#3a2f24] shadow-sm hover:shadow-xl group">
              <div class="relative h-64 overflow-hidden bg-[#f5f5f5]">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Settlers of Catan board game setup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCrRUVitkqsM7I1etodf2wvHXMKhVg1RR0cR8k1CtAEZ5euKl8gWpue9eMu5S6K1CwWMTYUJQZg1WYt4QMWmSVQdra_Zm9WjLJjI7Flj4kW-KS5x6boQq61AJL8VRGIK2urvO-KbzYa9kCjY54h7S_8bOS1KpFpPeoQ-vqx38RUCeDLQUiPxXNdkpMZUXeO_DJDb4dQt6NapNSvu_HiDk7izbcH8QAlePs3Xd7B_Rf-BE0LSx8BXks5VsjIWUjM6_Z__XKJVuBkh9l"/>
                <button class="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                  <span class="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Catan: El Juego</h4>
                <p class="text-sm text-[#8a7560] mb-4 line-clamp-2">Coloniza, comercia y construye en la isla de Catan. Un clásico de la estrategia moderna.</p>
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-black text-primary">$49.99</span>
                  <button class="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                    <span class="material-symbols-outlined">shopping_bag</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Product Card 3 */}
            <div class="product-card bg-white dark:bg-[#2b2118] rounded-2xl overflow-hidden border border-[#f5f2f0] dark:border-[#3a2f24] shadow-sm hover:shadow-xl group">
              <div class="relative h-64 overflow-hidden bg-[#f5f5f5]">
                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dixit colorful storytelling card game" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz8V3AHExvU4WnUZ8ZxfmV7SUgMcrNu-qeXIyzmFeUvaRhV_dSGRcn9aNmjOdxagioihHk0xr9fXTpmcz77QveBZiEf_Pe20yKHEQclLWqL0GZiAhSzcUySeKnw2OEaj0r8i0ilJ-PaOSl1Y-gp5MzOUdrCNhU1CNl6KTNwgzNceZ1qEbWGvdhrXTHn6tnxhGQjRB6p50EMEmWKb2FPf3PVqcImfo-hGmfUz5SOdKaW1qKUuF5yEZ18jAMiTVBlOXz4S-3T9sTa4p6"/>
                <button class="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                  <span class="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Dixit: Storytelling</h4>
                <p class="text-sm text-[#8a7560] mb-4 line-clamp-2">Usa tu imaginación para adivinar y narrar historias a través de hermosas ilustraciones.</p>
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-black text-primary">$29.99</span>
                  <button class="p-3 bg-primary/10 text-primary rounded-xl hover:bg-primary hover:text-white transition-all">
                    <span class="material-symbols-outlined">shopping_bag</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Peluches Fugglers */}
          <section class="mb-16">
            <div class="flex items-center justify-between mb-8">
              <div class="flex items-center gap-3">
                <div class="p-2 bg-purple-100 text-purple-600 rounded-lg">
                  <span class="material-symbols-outlined">mood_bad</span>
                </div>
                <h3 class="text-2xl font-bold">Peluches Fugglers</h3>
              </div>
              <a class="text-sm font-bold text-primary hover:underline" href="#">Ver todo</a>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Fuggler 1 */}
              <div class="product-card bg-white dark:bg-[#2b2118] rounded-2xl overflow-hidden border border-[#f5f2f0] dark:border-[#3a2f24] shadow-sm hover:shadow-xl group">
                <div class="relative h-80 overflow-hidden bg-linear-to-br from-purple-50 to-orange-50">
                  <img class="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" data-alt="Quirky Fuggler monster plushie with realistic teeth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOFJYrVkjKVTEWO6TwuKBfu1drtgn45emO0NcLdH0FplFDbNC-GZTqQGRUHxix7iFTUSATj6syQapBtmMQ3-WGrqJCmZGWutRKGgrlYKplMkcvtty6wwkH0aGQhy1JZusQ2AkIoO_bVohkc7UHWsT8lQEoRcYTa-1cP_KNczx2f3PdOuUo4Q4L64xBIaTWqr8uoP3B6FvdGoV-agm96dR-kiD10PmJovj6tCy_L0-fMmPcsUZmyZrFacI_lRjTGEEWQWgut2O5p6ow"/>
                  <button class="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                    <span class="material-symbols-outlined text-[20px]">favorite</span>
                  </button>
                  <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-red-500 text-white text-[10px] font-black rounded-full uppercase">¡Peligro!</span>
                  </div>
                </div>
                <div class="p-5">
                  <h4 class="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Annoyed Alien Blue</h4>
                  <p class="text-sm text-[#8a7560] mb-4">Dientes humanos reales (falsos) y ojos de botón que te juzgan mientras duermes.</p>
                  <div class="flex items-center justify-between">
                    <span class="text-2xl font-black text-primary">$19.99</span>
                    <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all">
                      <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
                      <span>Adoptar</span>
                    </button>
                  </div>
                </div>
              </div>
              {/* Fuggler 2 */}
              <div class="product-card bg-white dark:bg-[#2b2118] rounded-2xl overflow-hidden border border-[#f5f2f0] dark:border-[#3a2f24] shadow-sm hover:shadow-xl group">
                <div class="relative h-80 overflow-hidden bg-linear-to-br from-green-50 to-teal-50">
                <img class="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" data-alt="Ugly-cute green plushie monster with button eyes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcmTbt4YoMgSokN6GmqcNL-4SHwjOzL3p2YUYTQ_B7klxHpp6LUBVJHyRZRb0OR8RTcUL50VpJU3XPWDPTYGciSIOgqGNhuxw_dj9cnylOfn-te5IahxL0PHSszYEmTyFK9dpbyNnC0HFt_8iDYODdOS9ex5OvULG_TEJ25YQLOTtREYQnq3uMR5UYatOwMZ5AN9b5kyzDQwyN-SOrPYYeVL9D6ZeZvSVMdxY6chkPKq8u0KIu7e58E1YBijlt8Ud122Nb_sbfBt3T"/>
                <button class="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                  <span class="material-symbols-outlined text-[20px]">favorite</span>
                </button>
              </div>
              <div class="p-5">
                <h4 class="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Grumpy Green Teddy</h4>
                <p class="text-sm text-[#8a7560] mb-4">Tan feo que es adorable. Perfecto para personas con un sentido del humor extraño.</p>
                <div class="flex items-center justify-between">
                  <span class="text-2xl font-black text-primary">$24.99</span>
                  <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all">
                    <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
                    <span>Adoptar</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Fuggler 3 */}
            <div class="product-card bg-white dark:bg-[#2b2118] rounded-2xl overflow-hidden border border-[#f5f2f0] dark:border-[#3a2f24] shadow-sm hover:shadow-xl group">
              <div class="relative h-80 overflow-hidden bg-linear-to-br from-pink-50 to-red-50">
              <img class="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" data-alt="Fuggler monster plush toy with strange grin" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAds_3UbgpCqhozMmkcIECo67uHfLVx4yIl88g3v8NAUsmOZKfmuIFNIHCebbGKCVU_Yw-y1_zBY-10sRuepQJTmQj9althH_MUQY6a3ZMibSCU9OVUhCIJB6680JW-XV6Q1KUieQb5G1K8LEIDVlaJ2LW7wUpAuHnbL0HMjRqDapY7jf7v14paHpT1_aCsCCg2GKcwTOCYnaGX9eREHvZJLFVuVGFoTH1vhK6SBBnDOjgb1HOTga8E5zOzeoReveDU6v6e6zbtJ-ar"/>
              <button class="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                <span class="material-symbols-outlined text-[20px]">favorite</span>
              </button>
            </div>
            <div class="p-5">
              <h4 class="font-bold text-lg mb-1 group-hover:text-primary transition-colors">Toothbrush Terror Red</h4>
              <p class="text-sm text-[#8a7560] mb-4">Este amiguito tiene más dientes que tú y no tiene miedo de usarlos para sonreír.</p>
              <div class="flex items-center justify-between">
                <span class="text-2xl font-black text-primary">$21.50</span>
                <button class="flex items-center gap-2 px-4 py-2 bg-primary text-white font-bold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all">
                  <span class="material-symbols-outlined text-sm">add_shopping_cart</span>
                  <span>Adoptar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
        </main>
      <Footer />
    </div>
  )
}

export default Catalog