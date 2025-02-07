import React from "react";
import { FaRegHeart, FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div className="border-b">
      <div className=" container">
        <header className="flex justify-between items-center px-4 py-4">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <nav className="flex gap-6 text-lg">
            <a href="#" className="text-black hover:underline">
              Home
            </a>
            <a href="#" className="text-black hover:underline">
              Contact
            </a>
            <a href="#" className="text-black hover:underline">
              About
            </a>
            <a href="#" className="text-black hover:underline">
              Sign Up
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="flex items-center  bg-gray-100 px-3 py-2 rounded-md">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="bg-transparent w-[211px] outline-none"
              />
              <FaSearch className="text-gray-500" />
            </div>
            <FaRegHeart className="text-xl cursor-pointer" />
            <FaShoppingCart className="text-xl cursor-pointer" />
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
