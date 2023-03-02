import React, { Component } from "react";
import { Link , NavLink} from "react-router-dom";
import { URL } from "../Config";

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full bg-white sticky top-0 shadow-md flex justify-between flex-wrap items-center p-4 pl-8">
        <NavLink to={URL.HOME.BASE}  className="text-[30px] font-bold">Thos</NavLink>
        <ul className="flex flex-wrap gap-10 p-4">
          <li>  <NavLink to="/Blog" className="pb-1 hover:border-b-[1px] border-black" style={({isActive}) =>{return{borderBottom: isActive ? '1px solid black' : ''}}}>Blog</NavLink></li>
          <li> <NavLink to="/Shop" className="pb-1 hover:border-b-[1px] border-black" style={({isActive}) =>{return{borderBottom: isActive ? '1px solid black' : ''}}}>Shop</NavLink></li>
          <li>  <NavLink to="/About" className="pb-1 hover:border-b-[1px] border-black" style={({isActive}) =>{return{borderBottom: isActive ? '1px solid black' : ''}}}>About</NavLink></li>
          <li>  <NavLink to="/Contact" className="pb-1 hover:border-b-[1px] border-black" style={({isActive}) =>{return{borderBottom: isActive ? '1px solid black' : ''}}}>Contact</NavLink></li>
          <li>
            <NavLink to="/Shoping " className="pb-1 hover:border-b-[1px] border-black" style={({isActive}) =>{return{borderBottom: isActive ? '1px solid black' : ''}}}><span className="text-[18px] mr-2">
              <i className="fal fa-shopping-bag"></i>
            </span>
            Shopping Bag</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
