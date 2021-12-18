import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineShoppingCart } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { API } from "../../API/API";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectReload, SET_RELOAD } from "../../Redux/Features/ReloadSlice";

const CartSidebar = ({ IsCartSideBarOpen, setIsCartSideBarOpen }) => {
  const [CartProducts, setCartProducts] = useState([]);
  const [GetReload, setGetReload] = useState(false);

  const dispatch = useDispatch();
  const reload = useSelector(selectReload);

  const LoadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
  };

  const RemoveProductFromCart = (id) => {
    let Cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        Cart = JSON.parse(localStorage.getItem("cart"));
      }

      Cart.map((product, index) => {
        if (product._id === id) {
          Cart.splice(index, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(Cart));
    }
    setGetReload(!GetReload);
    dispatch(SET_RELOAD());
    return Cart;
  };

  useEffect(() => {
    setCartProducts(LoadCart());
  }, [GetReload, reload]);
  return (
    <>
      <div
        onClick={() => setIsCartSideBarOpen(!IsCartSideBarOpen)}
        className={`${
          IsCartSideBarOpen ? "visible" : "hidden"
        } bg-black bg-opacity-50 fixed z-20 left-0 right-0 top-0 bottom-0`}
      ></div>
      <div
        style={{
          transition: "all ease 0.3s",
        }}
        className={`${
          IsCartSideBarOpen ? "right-0" : "-right-full"
        } fixed  bg-white h-screen w-80 z-20 p-4  flex flex-col justify-between `}
      >
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <AiOutlineShoppingCart className="text-5xl text-darkgray" />
              <h4 className="text-darkgray text-2xl leading-6  pl-4">CART</h4>
            </div>
            <div onClick={() => setIsCartSideBarOpen(!IsCartSideBarOpen)}>
              <AiOutlineClose className="text-3xl cursor-pointer" />
            </div>
          </div>
          <div className="border-b-2 w-full h-3 border-darkgray"></div>
          <div className="flex flex-col my-2 overflow-y-scroll scrollbar-hide">
            {CartProducts?.map((item, index) => {
              const imageurl = item?._id
                ? `${API}/product/photo/${item?._id}`
                : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
              return (
                <div
                  key={index}
                  className="w-full h-28  flex items-center justify-between border-b-2  "
                >
                  <div className="w-20 h-20 bg-red-400 rounded-lg">
                    <img
                      src={imageurl}
                      className="w-20 h-20 object-cover rounded-lg"
                      alt=""
                    />
                  </div>
                  <div className="w-36 h-20  flex flex-col justify-between">
                    <div>
                      <h4 className="text-darkgray text-lg font-medium leading-6 ">
                        {item.name}
                      </h4>
                      <h5 className="text-darkgray text-sm font-medium leading-4 ">
                        Quantity : 1
                      </h5>
                    </div>
                    <h3 className="text-darkgray text-lg font-semibold leading-8 ">
                      &#8377; {item.price}
                    </h3>
                  </div>
                  <MdDeleteForever
                    onClick={() => RemoveProductFromCart(item._id)}
                    className="text-3xl text-red-600 cursor-pointer hover:text-red-700"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {CartProducts?.length > 0 && (
          <Link href="/checkout">
            <div className="w-full h-12 bg-gray-600 flex justify-center items-center cursor-pointer hover:bg-gray-700">
              <h4 className="text-xl font-medium text-white capitalize ">
                Proceed To Check Out
              </h4>
              <AiOutlineArrowRight className="text-2xl text-white ml-2" />
            </div>
          </Link>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
