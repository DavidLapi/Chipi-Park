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
import Games from "../pages/Games";

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
    { path: "/games", Component: Games},
    { path: "/admin", Component: Dashboard },
    { path: "/admin/orders", Component: Orders },
    { path: "/admin/products", Component: Products },
  ]
)
