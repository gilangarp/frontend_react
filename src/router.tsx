import { createBrowserRouter } from "react-router-dom";
import { Checkout, Detailor, Dtproduct, Forgot, HistoryOr, Index, Log, Prfl, Products, Regis } from "./model/router";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Index/>,
    },
    {
        path: "/product",
        element: <Products/>,
    },
    {
        path: "/login",
        element: <Log/>
    },
    {
        path: "/register",
        element: <Regis/>
    },
    {
        path: "/checkout",
        element: <Checkout/>
    },
    {
        path:"/detail-order",
        element: <Detailor/>
    },
    {
        path:"/forgot-password",
        element: <Forgot/>
    },
    {
        path: "/history-order",
        element: <HistoryOr/>
    },
    {
        path: "/product-detail",
        element: <Dtproduct/>
    },
    {
        path: "/profile",
        element: <Prfl/>
    }
    
])