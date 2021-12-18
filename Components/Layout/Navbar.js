import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsSearch, BsHeart } from "react-icons/bs";
import { useSelector } from "react-redux";

import { selectUser } from "../../Redux/Features/UserSlice";
import CartSidebar from "./CartSidebar";
import { selectReload } from "../../Redux/Features/ReloadSlice";
const Navbar = () => {
  const [IsNavOpen, setIsNavOpen] = useState(false);
  const [IsCartSideBarOpen, setIsCartSideBarOpen] = useState(false);
  const [CartProducts, setCartProducts] = useState([]);

  const HandleToggle = () => setIsNavOpen(!IsNavOpen);

  const user = useSelector(selectUser);
  const reload = useSelector(selectReload);

  const router = useRouter();

  const LoadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
  };

  useEffect(() => {
    setCartProducts(LoadCart());
  }, [reload]);

  return (
    <>
      <CartSidebar
        IsCartSideBarOpen={IsCartSideBarOpen}
        setIsCartSideBarOpen={setIsCartSideBarOpen}
      />
      <nav className="w-full h-36">
        <div className="w-11/12 h-full flex justify-between items-center">
          <div className="flex justify-between items-center h-full">
            <div className="w-36 h-full bg-darkgray flex justify-center items-center">
              {IsNavOpen ? (
                <AiOutlineClose
                  onClick={HandleToggle}
                  className="text-white text-3xl cursor-pointer"
                />
              ) : (
                <AiOutlineMenu
                  onClick={HandleToggle}
                  className="text-white text-3xl cursor-pointer"
                />
              )}

              <nav
                style={
                  IsNavOpen
                    ? { transform: " scaleY(1)" }
                    : { transform: "scaleY(0)" }
                }
                className="absolute w-full left-0 bg-darkgray z-50 text-sm mt-96 transition-transform	 "
              >
                <ul className="block list-none m-0 p-0 relative z-10">
                  <NavLink Active Name="Home" To="/" />
                  <NavLink Name="About Us" To="/about" />
                  <NavLink Name="Product Collection" To="/collection" />
                  <NavLink Name="Cart" To="/cart" />
                  <NavLink Name="Checkout" To="/checkout" />
                  <NavLink Name="Contact Us" To="/contact" />
                </ul>
              </nav>
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
              <div
                onClick={() => setIsCartSideBarOpen(!IsCartSideBarOpen)}
                className="relative"
              >
                <AiOutlineShoppingCart className="text-darkgray cursor-pointer mx-4 text-3xl h-8 w-8" />
                <p
                  style={{
                    top: "-7px",
                    right: "5px",
                  }}
                  className="absolute bg-black text-white w-5 h-5 flex justify-center items-center rounded-full"
                >
                  {CartProducts?.length ? CartProducts?.length : 0}
                </p>
              </div>
            </div>
            <div className="ml-8 flex">
              {user.isLoggedIn ? (
                <>
                  {user.role === 1 && (
                    <Link href="/adminDashboard">
                      <p className="text-base font-semibold tracking-wider text-white py-3 px-8 mx-1 bg-darkgray cursor-pointer hover:bg-black">
                        Admin
                        <span className="ml-1">Dashboard</span>
                      </p>
                    </Link>
                  )}

                  <Link href="/profile">
                    <p className="text-base font-semibold tracking-wider text-white py-3 mx-1 px-8 bg-darkgray cursor-pointer hover:bg-black">
                      Profile
                    </p>
                  </Link>
                </>
              ) : (
                <Link href="/login">
                  <p className="text-base font-semibold tracking-wider text-white py-3 px-8 bg-darkgray cursor-pointer hover:bg-black">
                    Login
                  </p>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

const NavLink = ({ Name, To, Active }) => {
  return (
    <li className="block">
      <Link className="cursor-pointer" href={To}>
        <p
          style={Active && { background: "rgb(85, 89, 92)" }}
          className=" font-medium py-3 px-5 leading-5 flex items-center cursor-pointer text-white hover:bg-gray-600"
        >
          {Name}
        </p>
      </Link>
    </li>
  );
};
