/**
 * Página Games
 * Propósito: Juegos de Ordenador
 */

import React from 'react'

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

import { Link } from 'react-router'

const Games = () => {
  return (
    <div>
        <Header />
        <main class="flex-1 w-full max-w-300 mx-auto px-4 lg:px-10 py-8">
            {/*<!-- PageHeading -->*/}
            <div class="mb-10">
                <div class="flex flex-col gap-2">
                    <h1 class="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-tighter">Zona Chipi Play</h1>
                    <p class="text-slate-500 dark:text-slate-400 text-lg max-w-2xl font-medium">Explora nuestra colección de juegos educativos y divertidos. Juega gratis o suscríbete para desbloquear todo el catálogo.</p>
                </div>
            </div>
            {/*<!-- SectionHeader: Free Games -->*/}
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-slate-900 dark:text-white text-2xl font-extrabold flex items-center gap-2">
                    <span class="material-symbols-outlined text-green-500">bolt</span>
                    Juegos Gratuitos
                </h2>
                <span class="h-px flex-1 mx-6 bg-slate-200 dark:bg-white/10"></span>
                <span class="text-slate-400 text-sm font-medium">3 juegos disponibles</span>
            </div>
            {/*<!-- ImageGrid: Free Games -->*/}
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Game Card 1 */}
                <div class="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 transition-all hover:-translate-y-2 game-card-shadow">
                    <div class="w-full aspect-video rounded-xl overflow-hidden bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative shadow-inner">
                        <span class="material-symbols-outlined text-white text-6xl opacity-80">grid_3x3</span>
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div class="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Gratis</div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h3 class="text-slate-900 dark:text-white text-xl font-bold">Tres en Raya</h3>
                        <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Desafía a la IA o a un amigo en este clásico atemporal.</p>
                    </div>
                    <Link to="/games/tictactoe">
                        <button class="mt-2 w-full bg-primary hover:bg-primary/90 text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined">play_circle</span>
                            JUGAR AHORA
                        </button>
                    </Link>
                </div>
                {/*  Game Card 2  */}
                <div class="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 transition-all hover:-translate-y-2 game-card-shadow">
                    <div class="w-full aspect-video rounded-xl overflow-hidden bg-linear-to-br from-red-500 to-orange-600 flex items-center justify-center relative shadow-inner">
                        <span class="material-symbols-outlined text-white text-6xl opacity-80">calculate</span>
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div class="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Gratis</div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h3 class="text-slate-900 dark:text-white text-xl font-bold">Matemáticas Rápidas</h3>
                        <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">Mejora tu agilidad mental resolviendo operaciones contra el reloj.</p>
                    </div>
                    <Link to="/games/mathexercises">
                        <button class="mt-2 w-full bg-primary hover:bg-primary/90 text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined">play_circle</span>
                            JUGAR AHORA
                        </button>
                    </Link>
                </div>
                {/* Game Card 3 */}
                <div class="group relative flex flex-col gap-4 p-5 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-white/5 transition-all hover:-translate-y-2 game-card-shadow">
                    <div class="w-full aspect-video rounded-xl overflow-hidden bg-linear-to-br from-yellow-400 to-amber-600 flex items-center justify-center relative shadow-inner">
                        <span class="material-symbols-outlined text-white text-6xl opacity-80">capture</span>
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                        <div class="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter">Gratis</div>
                    </div>
                    <div class="flex flex-col gap-1">
                        <h3 class="text-slate-900 dark:text-white text-xl font-bold">Adivina el Chipi</h3>
                        <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">¿Hazte con todos? Adivina la silueta antes de que se acabe el tiempo.</p>
                    </div>
                    <Link to="/games/guessthechipi">
                        <button class="mt-2 w-full bg-primary hover:bg-primary/90 text-blue-600 font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-lg shadow-primary/20">
                            <span class="material-symbols-outlined">play_circle</span>
                            JUGAR AHORA
                        </button>
                    </Link>
                </div>
            </div>
            {/* SectionHeader: Premium Content */}
            <div class="flex items-center justify-between mb-6">
                <h2 class="text-slate-900 dark:text-white text-2xl font-extrabold flex items-center gap-2">
                <span class="material-symbols-outlined text-amber-500">workspace_premium</span>
                    Contenido Premium
                </h2>
                <span class="h-px flex-1 mx-6 bg-slate-200 dark:bg-white/10"></span>
                <button class="text-primary text-sm font-bold flex items-center gap-1 hover:underline">
                    SUSCRIBIRSE <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
            {/*  Premium Grid */}
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 gap-6">
                {/* Premium Card Factory */}
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">rocket_launch</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Aventuras Espaciales</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Simulador de vuelo 3D</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">directions_car</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Carreras Pro</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Simulador de conducción</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">castle</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Reino de Magia</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">RPG de aventuras</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">potted_plant</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Mi Granja</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Simulador de gestión</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">music_note</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Ritmo Total</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Juego musical</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">science</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Laboratorio Loco</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Puzzles químicos</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">history_edu</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Viaje en el Tiempo</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Trivia de historia</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">language</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">GeoExplorer</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Aprende geografía</p>
                        </div>
                    </div>
                </div>
                <div class="relative group overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-white/5 opacity-60 grayscale-[0.5]">
                    <div class="premium-overlay absolute inset-0 z-10 flex flex-col items-center justify-center gap-2">
                        <span class="material-symbols-outlined text-white/50 text-4xl">lock</span>
                        <span class="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full tracking-widest">PREMIUM</span>
                    </div>
                    <div class="p-4 flex flex-col gap-3">
                        <div class="w-full aspect-square rounded-lg bg-slate-300 dark:bg-slate-700 flex items-center justify-center">
                            <span class="material-symbols-outlined text-slate-400 text-5xl">architecture</span>
                        </div>
                        <div>
                            <p class="text-slate-900 dark:text-white font-bold text-base">Mega Constructor</p>
                            <p class="text-slate-500 dark:text-slate-400 text-xs">Diseño de ciudades</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Games