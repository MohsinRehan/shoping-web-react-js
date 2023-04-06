import React, { Component, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Product from "../pages/Blog";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/login";
import SignUp from "../pages/Auth/singup";
import Blogpost from "../pages/Blogpost";
import DashboardAdmin from "../pages/AdminScreen/admin";
import Adminblog from "../layout/Page/Blog";
import Products from "../layout/Page/Products";
import AccountSetting from "../layout/Page/Accountsetting";
import  ShopCart from "../pages/Shopingcart";
import { URL } from "../components/Config";
import PrivateRoutes from "./private";
import PublicRoutes from "./public";

const Mainroute = () => {
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (auth) {
      setAuthenticate(true);
    }
  }, []);

  return (
    <Routes>
      <Route path={URL.HOME.BASE} element={<Home />} />
      <Route path={URL.PRODUCT.BASE} element={<Product />} />
      <Route path={URL.SHOP.BASE} element={<Shop />} />
      <Route path={URL.ABOUT.BASE} element={<About />} />
      <Route path={URL.CONTACT.BASE} element={<Contact />} />
      <Route path={URL.PRODUCT.PRODUCTORDER.BASE} element={<Blogpost />} />
      <Route path={URL.SHOPING.BASE} element={<ShopCart />} />

      <Route
        path={URL.ADMINDASHBOARD.BASE}
        element={<PrivateRoutes authenticate={authenticate} />}
      >
        <Route path={URL.ADMINDASHBOARD.BASE} element={<DashboardAdmin />} />
        <Route path={URL.ADMINBLOG.BASE} element={<Adminblog />} />
        <Route path={URL.PRODUCTS.BASE} element={<Products />} />
        <Route path={URL.ACCOUNTSETTING.BASE} element={<AccountSetting />} />
      </Route>

      <Route element={<PublicRoutes authenticate={authenticate} />}>
        <Route path={URL.LOGIN.BASE} element={<Login />} />
        <Route path={URL.SIGNUP.BASE} element={<SignUp />} />
      </Route>
    </Routes>
  );
};

export default Mainroute;
