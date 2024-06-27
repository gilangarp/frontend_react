import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";

export const router = createBrowserRouter([
   {
        path: "/",
        element: <Home />,
        children: [
        {
            path: "product",
            element: <Product/>,
        }
    ]
    }
])