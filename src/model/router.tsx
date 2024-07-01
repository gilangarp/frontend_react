import Home from "../pages/Home";
import Product from "../pages/Product";
import Header from "../components/Header";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CheckoutProduct from '../pages/CheckoutProducts';
import Detailorder from "../pages/Detailorder";
import ForgotPass from "../pages/ForgotPass";
import HistoryOrder from "../pages/HistoryOrder";
import ProductDetail from "../pages/ProductDetail";
import Profile from "../pages/Profile";

export function Index() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
}

export function Products() {
    return (
      <>
        <Header />
        <Product />
      </>
    );
}

export function Log() {
  return (
    <>
      <Login />
    </>
  );
}

export function Regis(){
  return (
    <>
      <Register/>
    </>
  );
}
export function Checkout(){
  return (
    <>
      <Header />
      <CheckoutProduct/>
    </>
  );
}

export function Detailor() {
  return (
    <>
      <Header />
      <Detailorder/>
    </>
  )
}

export function Forgot() {
  return (
    <>
      <ForgotPass/>
    </>
  )
}

export function HistoryOr() {
  return (
    <>
      <Header/>
      <HistoryOrder/>
    </>
  )
}

export function Dtproduct() {
  return (
    <>
      <Header/>
      <ProductDetail/>
    </>
  )
}

export function Prfl() {
  return (
    <>
      <Header/>
      <Profile/>
    </>
  )
}
