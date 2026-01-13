/**
 Componente Footer
 */

function Footer() {
    return (
        <footer className="footer">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="font-bold text-lg mb-4">ChipiShop</h3>
                        <p className="text-slate-400 text-sm">
                            Tu tienda online de juegos de mesa, videojuegos y peluches.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Categorías</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition">Juegos de Mesa</a></li>
                            <li><a href="#" className="hover:text-white transition">Videojuegos</a></li>
                            <li><a href="#" className="hover:text-white transition">Peluches</a></li>
                            <li><a href="#" className="hover:text-white transition">Ofertas</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Ayuda</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition">Envíos</a></li>
                            <li><a href="#" className="hover:text-white transition">Devoluciones</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
                            <li><a href="#" className="hover:text-white transition">Contacto</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-white transition">Términos</a></li>
                            <li><a href="#" className="hover:text-white transition">Privacidad</a></li>
                            <li><a href="#" className="hover:text-white transition">Cookies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-slate-700 pt-8 text-center text-sm text-slate-400">
                    <p>© 2026 GameShop. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer