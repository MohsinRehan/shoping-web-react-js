import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
import Shop from "../pages/Shop";
import Contact from "../pages/Contact";
import Login from "../pages/Auth/login";
import SignUp  from "../pages/Auth/singup";
import Blogpost from "../pages/Blogpost";
import DashboardAdmin  from "../pages/AdminScreen/admin";
import { URL } from "../components/Config";

export default class Mainroute extends Component {
  render() {
    return (
      <Routes>
        <Route path={URL.HOME.BASE} element={<Home />} />
        <Route path={URL.BLOG.BASE} element={<Blog />} />
        <Route path={URL.SHOP.BASE} element={<Shop />} />
        <Route path={URL.ABOUT.BASE} element={<About />} />
        <Route path={URL.CONTACT.BASE} element={<Contact />} />
        <Route path={URL.BLOG.BLOGPOST.BASE} element={<Blogpost />} />
        <Route path={URL.LOGIN.BASE} element={<Login />} />
        <Route path={URL.SIGNUP.BASE} element={<SignUp/>} />
        <Route path={URL.ADMINDASHBOARD.BASE} element={<DashboardAdmin/>}/>
      </Routes>
    );
  }
}
