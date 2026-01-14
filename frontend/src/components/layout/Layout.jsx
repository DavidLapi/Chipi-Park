/**
 * Componente: Layout
 * Propósito: Layout base que envuelve todas las páginas de la aplicación con contenedor responsivo y color dinámico.
*/

import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return(
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout