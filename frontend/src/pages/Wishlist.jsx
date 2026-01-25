/**
 * Página Wishlist
 * Propósito: Lista de favoritos
 */

import React from 'react'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import { Link } from 'react-router'

function Wishlist() {
  return (
    <div>
      <Header />
        <main class="flex-1 max-w-300 mx-auto w-full px-4 md:px-10 lg:px-10 py-8">
          {/* MetaText / Back Link */}
          <div class="mb-6">
            <Link to="/catalog">
            <a class="flex items-center gap-2 text-[#617c89] hover:text-primary text-sm font-medium leading-normal transition-colors group" href="#">
              <span class="material-symbols-outlined text-sm group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Seguir comprando
            </a>
            </Link>
          </div>
          {/* PageHeading */}
          <div class="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-end gap-6 mb-8">
            <div class="flex min-w-72 flex-col gap-2">
              <h1 class="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">Mi Lista de Deseos</h1>
              <p class="text-[#617c89] dark:text-gray-400 text-base font-normal leading-normal flex items-center gap-2">
              Tienes <span class="font-bold text-primary">0 productos</span> guardados en tu colección.
              </p>
            </div>
            <button class="flex min-w-45 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-xl h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:brightness-110 shadow-lg shadow-primary/20 transition-all">
              <span class="material-symbols-outlined">add_shopping_cart</span>
              <span class="truncate">Añadir todo al carrito</span>
            </button>
          </div>
          {/* Product Grid 
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{/* Product Card 1 
<div class="flex flex-col gap-0 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group">
<div class="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Fuggler blue plush toy character" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBAsmqr0nv1bq5BPCdDMA0f2jBnr17SAYr1SQqt5ORzCJGGBqVFhi-UOX-s98ODgSz41R_rndqQHfzzx5XN55MX_5WPOHSTKoz81H3Ksf47hJ3hOx9_gb65YvAqrBiIMkfZ-dgM7nWo_dsgUXxC6PPIpokb7XtxZXA1dP5iK2x9fA90GUGHpg1aZdMyaedlX-Tt-fwdrVjdUs6O3MgAfFDPSh8BkbeYTxqN6hIxUFH4UybnA2LDjTpFDh_lb4ESbUW0EP-4Fww6I26L");'></div>
<div class="absolute top-3 left-3 flex gap-2">
<span class="px-2 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">Stock Disponible</span>
</div>
<button class="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 dark:bg-black/50 text-red-500 shadow-sm hover:bg-red-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
<div class="p-4 flex flex-col flex-1 gap-2">
<div>
<p class="text-[#111618] dark:text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">Fuggler: Budgie Blue</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-secondary text-[16px] fill-current">star</span>
<span class="text-xs text-gray-500 font-medium">4.8 (124 reviews)</span>
</div>
</div>
<p class="text-primary text-lg font-extrabold mt-auto">$24.99</p>
<div class="flex gap-2 mt-2">
<button class="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold transition-all">
                                Mover al carrito
                            </button>
</div>
</div>
</div>
{/* Product Card 2 
<div class="flex flex-col gap-0 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group">
<div class="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Catan strategy board game box" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuD4JMdkWF-ccFbTMBWMzZ4ErNxjNvLrVd2nrVvRHLDH6E6jwEwoF25AokBLNkUBv6WhlasIEHQNyS45t881_fwYeafyF5_c4pacn14XJILMhHcdASGa7bcKoLTVGrlbtcar2Piiym8yy8irAI7bSH1Jn-wJXHN9N8NsvaliyYUJzE-583kAvvDQcA5R6Ai8Vvt_R6n373f462MYYBH1fTqRhq6mM4Ti4fb7jD5YzTJOLH0PjIVsjCjAFkmZ9cBleWLFrBP6X-Qbbo9F");'></div>
<div class="absolute top-3 left-3">
<span class="px-2 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">Stock Disponible</span>
</div>
<button class="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 dark:bg-black/50 text-red-500 shadow-sm hover:bg-red-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
<div class="p-4 flex flex-col flex-1 gap-2">
<div>
<p class="text-[#111618] dark:text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">Catan: Board Game</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-secondary text-[16px] fill-current">star</span>
<span class="text-xs text-gray-500 font-medium">4.9 (3.2k reviews)</span>
</div>
</div>
<p class="text-primary text-lg font-extrabold mt-auto">$45.00</p>
<div class="flex gap-2 mt-2">
<button class="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold transition-all">
                                Mover al carrito
                            </button>
</div>
</div>
</div>
{/* Product Card 3 
<div class="flex flex-col gap-0 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group">
<div class="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Lego star wars ship set" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuBuyWfmUU0ZGr7KS_iNvka-pGEjo4zLNzViBM1roOkjV9g-GV_kMYDybYFXts2yuRQVR3HFZcwzg7xATeZ1dee1Y2H-AyVRPALbaMp0viTAJlYTFNWAfQ8ZR-VwC4fdK1V3SBpS4_Ft6bZ7WkZCZtZUzapqFrcDejerVG76Z-1DdpBH4qqfgq4xxXUmrXCtiKJKSkdMA4Pi5tVXBst_tPqRr4QqIiNGWKmajHVOf4a1kG8Rn7vCeggi5X1YID3dZ5tA_fXJDMCzllft");'></div>
<div class="absolute top-3 left-3">
<span class="px-2 py-1 bg-secondary text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">Últimas unidades</span>
</div>
<button class="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 dark:bg-black/50 text-red-500 shadow-sm hover:bg-red-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
<div class="p-4 flex flex-col flex-1 gap-2">
<div>
<p class="text-[#111618] dark:text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">LEGO Star Wars</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-secondary text-[16px] fill-current">star</span>
<span class="text-xs text-gray-500 font-medium">4.7 (542 reviews)</span>
</div>
</div>
<p class="text-primary text-lg font-extrabold mt-auto">$59.99</p>
<div class="flex gap-2 mt-2">
<button class="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold transition-all">
                                Mover al carrito
                            </button>
</div>
</div>
</div>
{/* Product Card 4 
<div class="flex flex-col gap-0 bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/20 group">
<div class="relative w-full aspect-square bg-gray-100 dark:bg-gray-800 overflow-hidden">
<div class="w-full h-full bg-center bg-no-repeat bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Soft colorful squishmallow plush" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw1JkIvDTFqm17gFn8mK3x_AHbh6VXtsXrlLwd8Wkg6Ywsxy6b28WYFDkKMbp-y_7tk1MF9hm8GJBDslntnPCfCn-udUpKh42aKclOuLKofOzMCRydKMAUEKbjQSkx4v8bANIPE8in_KQ0E299-bYaLgzrHz4gkKnJ42AC5dsROCuMEMOPxt0CY5G6svHyVemoxdGnVnpcqbT_9N4QwFEUkGPCPTL6wOrl2S18nvlQ5IUZ4-SNQ0jji77D_UYCoI_Bj3wx5YQl2Ar7");'></div>
<div class="absolute top-3 left-3">
<span class="px-2 py-1 bg-green-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-lg shadow-sm">Stock Disponible</span>
</div>
<button class="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/90 dark:bg-black/50 text-red-500 shadow-sm hover:bg-red-500 hover:text-white transition-colors">
<span class="material-symbols-outlined text-[18px]">delete</span>
</button>
</div>
<div class="p-4 flex flex-col flex-1 gap-2">
<div>
<p class="text-[#111618] dark:text-white text-base font-bold leading-tight group-hover:text-primary transition-colors">Squishmallows Panda</p>
<div class="flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-secondary text-[16px] fill-current">star</span>
<span class="text-xs text-gray-500 font-medium">5.0 (89 reviews)</span>
</div>
</div>
<p class="text-primary text-lg font-extrabold mt-auto">$19.99</p>
<div class="flex gap-2 mt-2">
<button class="flex-1 flex cursor-pointer items-center justify-center rounded-lg h-10 bg-primary/10 hover:bg-primary text-primary hover:text-white text-xs font-bold transition-all">
                                Mover al carrito
                            </button>
</div>
</div>
</div>
</div>*/}
{/* Summary Footer / Empty Action */}
<div class="mt-12 p-8 rounded-2xl bg-white dark:bg-gray-900 border border-[#f0f3f4] dark:border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
<div class="text-center md:text-left">
<h3 class="text-lg font-bold text-[#111618] dark:text-white">¿Buscas algo más?</h3>
<p class="text-[#617c89] dark:text-gray-400 text-sm">Explora nuestras novedades y ofertas exclusivas en juegos de mesa.</p>
</div>
<div class="flex gap-4">
<button class="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary/5 font-bold transition-all">
                        Compartir lista
                    </button>
<button class="px-6 py-3 rounded-xl bg-[#f0f3f4] dark:bg-gray-800 text-[#111618] dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 font-bold transition-all">
                        Vaciar lista
                    </button>
</div>
</div>
</main>
      <Footer />
      </div>
  )
}

export default Wishlist