import React from "react";
import Link from "next/link";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsSearch, BsHeart } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="w-full h-36">
      <div className="w-11/12 h-full flex justify-between items-center">
        <div className="flex justify-between items-center h-full">
          <div className="w-36 h-full bg-darkgray flex justify-center items-center">
            <AiOutlineMenu className="text-white text-3xl cursor-pointer" />
          </div>
          <div className="pl-12">
            <Link href="/">
              <img
                className="cursor-pointer"
                src="/images/logo.png"
                width="150px"
                height="40px"
              ></img>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center h-full ">
          <div className="flex justify-evenly items-center w-full h-full">
            <BsSearch className="text-darkgray cursor-pointer mx-4 text-2xl h-6 w-6 " />
            <BsHeart className="text-darkgray cursor-pointer mx-4 text-2xl h-6 w-6 " />
            <div className="relative">
              <AiOutlineShoppingCart className="text-darkgray cursor-pointer mx-4 text-3xl h-8 w-8" />
              <p
                style={{
                  top: "-7px",
                  right: "5px",
                }}
                className="absolute bg-black text-white w-5 h-5 flex justify-center items-center rounded-full"
              >
                0
              </p>
            </div>
          </div>
          <div className="ml-8">
            <Link href="/login">
              <p className="text-base font-semibold tracking-wider text-white py-3 px-8 bg-darkgray cursor-pointer hover:bg-black">
                Login
              </p>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
