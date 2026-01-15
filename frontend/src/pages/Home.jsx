/**
 * Página Home
 * Propósito: Página principal de Chipi Park
 */

import { useState } from "react";

import { ChevronRight } from "lucide-react"

import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"

function Home() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [cartCount] = useState(3);

  return (
    <>
        <Header />
        {/* HERO SECTION */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-linear-to-r from-blue-500 via-blue-600 to-cyan-500 rounded-3xl overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
                {/* Left Content */}
                <div className="text-white">
                    <div className="inline-block bg-white bg-opacity-20 backdrop-blur-sm px-4 py-1 rounded-full text-sm text-blue-900 font-semibold mb-4">
                    Nueva Temporada 2026
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Unleash
                    <br />
                    the Fun!
                </h1>
                <p className="text-blue-100 text-lg mb-6 max-w-md">
                    Descubre una colección infinita de juegos que traerán magia y diversión a tu hogar.
                </p>
                <div className="flex flex-wrap gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-semibold transition shadow-lg hover:shadow-xl flex items-center gap-2">
                        Explorar 
                        <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-blue-900 px-8 py-3 rounded-xl font-semibold transition border border-white border-opacity-30">
                        Saber Más
                    </button>
                </div>
                </div>
            </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Home