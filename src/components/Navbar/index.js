import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="w-full bg-white sticky top-0 shadow-md flex justify-between flex-wrap items-center p-4 pl-8">
        <h1 className="text-[30px] font-bold">Thos</h1>
        <ul className="flex gap-10 p-4">
          <li>Blog</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
          <li>
            <span>
              <i className="fa-thin fa-bag-shopping"></i>
            </span>
            Shopping Bag
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
