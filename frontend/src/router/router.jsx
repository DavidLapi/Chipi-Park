import { createBrowserRouter, Navigate } from "react-router-dom";
/* User */
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Catalog from "../pages/Catalog";
import ProductDetail from "../pages/ProductDetail";
import Wishlist from "../pages/Wishlist";

/* Games */
import Games from "../pages/Games";
import Tictactoe from "../pages/games/Tictactoe";
import Mathexercises from "../pages/games/Mathexercises";
import Guessthechipi from "../pages/games/Guessthechipi";

/* Politica */
import Political_terms from "../pages/legal/political_terms";
import Privacy_terms from "../pages/legal/Privacy_terms";
import Cookies_terms from "../pages/legal/Cookies_terms";

/* Admin */
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";

export const router = createBrowserRouter(
  [
    { path: "/", Component: Home },
    { path: "/home", element: <Navigate to="/" replace />}, // <-- Alias
    { path: "/login", Component: Login },
    { path: "/register", Component: Register },
    { path: "/profile", Component: Profile },
    { path: "/cart", Component: Cart },
    { path: "/catalog", Component: Catalog },
    { path: "/productdetail", Component: ProductDetail },
    { path: "/wishlist", Component: Wishlist },
    // Games
    { path: "/games", Component: Games},
    { path: "/games/tictactoe", Component: Tictactoe},
    { path: "/games/mathexercises", Component: Mathexercises},
    { path: "/games/guessthechipi", Component: Guessthechipi},
    // Admin
    { path: "/admin", Component: Dashboard },
    { path: "/admin/orders", Component: Orders },
    { path: "/admin/products", Component: Products },
    // Politicas
    { path: "/politicalterms", Component: Political_terms },
    { path: "/privacityterms", Component: Privacy_terms },
    { path: "/cookiesterms", Component: Cookies_terms },
  ]
)
