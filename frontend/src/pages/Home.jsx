/**
 * Página Home
 * Propósito: Página principal de Chipi Park
 */

import { useState } from "react";
import { Link } from "react-router";

import { ChevronRight } from "lucide-react"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import Chipi2x1 from "../../public/images/chipis2x1.png"

function Home() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartCount] = useState(3);

  return (
    <>
        <Header />
        {/* HERO SECTION */}
        <section class="px-6 md:px-20 py-8">
            <div class="max-w-300 mx-auto">
                <div class="relative overflow-hidden rounded-xl bg-linear-to-br from-blue-500 via-blue-600 to-cyan-500 min-h-130 flex items-center p-8 md:p-16">
                    {/* Abstract Shapes Decoration */}
                    <div class="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
                        <div class="absolute top-10 right-10 w-32 h-32 bg-accent-yellow rounded-full blur-3xl"></div>
                        <div class="absolute bottom-20 right-40 w-48 h-48 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div class="relative z-10 max-w-lg">
                        <span class="inline-block px-4 py-1.5 rounded-full bg-white backdrop-blur-md text-blue-900 font-bold text-xs uppercase tracking-widest mb-6">Temporada Invierno 2026</span>
                        <h1 class="text-white text-5xl md:text-7xl font-800 leading-[1.1] tracking-tight mb-6">
                                Unleash <br/>the <span class="text-accent-yellow">Fun!</span>
                        </h1>
                        <p class="text-white/90 text-lg md:text-xl font-medium mb-10 max-w-sm">
                            Descubre una colección infinita de juegos que traerán magia y diversión a tu hogar.
                        </p>
                        <div class="flex flex-wrap gap-4">
                            <button class="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-800 rounded-full transition-all shadow-xl shadow-primary/40 flex items-center gap-2 text-lg">
                                Explorar
                                <span class="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-blue-900 px-8 py-3 rounded-xl font-semibold transition border border-white border-opacity-30">
                                Saber Más
                            </button>
                        </div>
                    </div>
                    {/* Hero Image Placeholder */}
                    <div class="hidden lg:block absolute right-10 bottom-0 w-125 h-125">
                        <img alt="Large colorful toy robot" class="w-full h-full object-contain" data-alt="Playful 3D toy robot character smiling" src={Chipi2x1}/>
                    </div>
                </div>
            </div>
        </section>
        {/* Top Categories */}
        <section class="px-6 md:px-20 py-12">
            <div class="max-w-300 mx-auto">
                <div class="flex items-center justify-between mb-10">
                    <h2 class="text-3xl font-800 tracking-tight flex items-center gap-3">
                        <span class="w-2 h-8 bg-primary rounded-full"></span>
                        Top Categories
                    </h2>
                    <button class="text-primary font-bold flex items-center gap-1 hover:underline">
                        See all
                        <span class="material-symbols-outlined text-sm">chevron_right</span>
                    </button>
                </div>
                <div class="flex justify-around md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {/* Category Item 1 */}
                    <Link to="/catalog">
                        <div class="group cursor-pointer flex flex-col items-center">
                            <div class="w-full aspect-square rounded-full bg-accent-yellow/20 flex items-center justify-center mb-4 transition-all group-hover:bg-accent-yellow/30 group-hover:scale-105 border-4 border-white dark:border-white/5 shadow-lg">
                                <span class="material-symbols-outlined text-5xl text-accent-yellow transition-transform group-hover:rotate-12">smart_toy</span>
                            </div>
                            <h3 class="font-800 text-lg group-hover:text-primary transition-colors">Peluches</h3>
                            <p class="text-sm text-gray-500">120+ Productos</p>
                        </div>
                    </Link>
                    {/* Category Item 2 */}
                    <Link to="/catalog">
                        <div class="group cursor-pointer flex flex-col items-center">
                            <div class="w-full aspect-square rounded-full bg-secondary/20 flex items-center justify-center mb-4 transition-all group-hover:bg-secondary/30 group-hover:scale-105 border-4 border-white dark:border-white/5 shadow-lg">
                                <span class="material-symbols-outlined text-5xl text-secondary transition-transform group-hover:rotate-12">child_care</span>
                            </div>
                            <h3 class="font-800 text-lg group-hover:text-primary transition-colors">Juegos de mesa</h3>
                            <p class="text-sm text-gray-500">85+ Productos</p>
                        </div>
                    </Link>
                    {/* Category Item 3 */}
                    <Link to="/games">
                        <div class="group cursor-pointer flex flex-col items-center">
                            <div class="w-full aspect-square rounded-full bg-accent-red/20 flex items-center justify-center mb-4 transition-all group-hover:bg-accent-red/30 group-hover:scale-105 border-4 border-white dark:border-white/5 shadow-lg">
                                <span class="material-symbols-outlined text-5xl text-accent-red transition-transform group-hover:rotate-12">sports_esports</span>
                            </div>
                            <h3 class="font-800 text-lg group-hover:text-primary transition-colors">Juegos de ordenador</h3>
                            <p class="text-sm text-gray-500">50+ Juegos</p>
                        </div>
                    </Link>

                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Home