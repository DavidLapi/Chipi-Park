/**
 * Componente: Header
 * Propósito: Barra de navegación superior global
 */

// src/components/layout/Header.jsx

function Header() {
    return (
        <header class="sticky top-0 z-50 w-full px-6 md:px-20 py-4 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-[#f5f2f0] dark:border-[#3d2e1f]">
            <div class="max-w-1200 mx-auto flex items-center justify-between gap-4">
                <div class="flex items-center gap-10">      
                    <div class="flex items-center gap-2 group cursor-pointer">
                        <div class="bg-primary p-2 rounded-full text-blue-800 shadow-lg shadow-primary/30">
                            <span class="material-symbols-outlined text-2xl">rocket_launch</span>
                        </div>
                        <h2 class="text-2xl font-800 tracking-tight text-[#181411] dark:text-white">ToyJoy</h2>
                    </div>

                    <nav class="hidden md:flex items-center gap-6">
                        <a class="px-4 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm" href="#">Home</a>
                        <a class="px-4 py-2 rounded-full text-[#181411] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 font-bold text-sm transition-all" href="#">Juegos</a>
                        <a class="px-4 py-2 rounded-full text-[#181411] dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10 font-bold text-sm transition-all" href="#">Catálogo</a>
                    </nav>
                </div>
                <div class="flex items-center gap-4 flex-1 justify-end">

                <div class="hidden lg:flex flex-1 max-w-sm items-center bg-gray-100 dark:bg-white/5 rounded-full px-4 py-2">
                    <span class="material-symbols-outlined text-gray-400">search</span>
                    <input class="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-gray-400" placeholder="Search for fun..." type="text"/>
                </div>

                <div class="flex items-center gap-3">
                    <button class="p-2.5 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-all">
                        <span class="material-symbols-outlined">favorite</span>
                    </button>
                    <button class="p-2.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-all relative">
                        <span class="material-symbols-outlined">shopping_cart</span>
                        <span class="absolute top-0 right-0 bg-accent-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-background-dark">3</span>
                    </button>
                    <div class="w-10 h-10 rounded-full border-2 border-primary overflow-hidden shadow-inner">
                        <img alt="User profile avatar" class="w-full h-full object-cover" data-alt="Cartoon style user avatar icon" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc_ZAc22xwZMqmhuLoE-rUwuV2pU-iFBfGe8lO-jojQYvaG5ezkb71Om6lj4-3uNnxsrJBSXtllP9CL9bVt-apuUr_6wZg7BU2R-GuQg_wIE7Hx2Yu2e-T0o5K6yEZEwB4P2YuFdqrc2tIhzrT77KI0ZxgcWgyQlNMspinaJuRQF2wRUQaR2dKE2CBHksKRinuVxcCBQZAZ7QIAkhxqOq-TmEMAKSsbUAo53eqrdzu__Ym1mNq48XDytANoillS3XRTCNG3CQheJtN"/>
                    </div>
                </div>
            </div>
        </div>
        </header>
        
    );
}

export default Header