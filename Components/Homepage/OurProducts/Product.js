import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { API } from "../../../API/API";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  ADD_PRODUCT_TO_CART,
  selectCart,
} from "../../../Redux/Features/CartSlice";
import { useSelector } from "react-redux";
import { SET_RELOAD } from "../../../Redux/Features/ReloadSlice";

const Product = ({ Name, Price, Id, AllProducts }) => {
  const dispatch = useDispatch();

  const AddProductToCart = (id) => {
    AllProducts?.forEach((item) => {
      if (item._id === id) {
        let Cart = [];
        if (typeof window !== undefined) {
          if (localStorage.getItem("cart")) {
            Cart = JSON.parse(localStorage.getItem("cart"));
          }
          Cart.push({ ...item, count: 1 });
          localStorage.setItem("cart", JSON.stringify(Cart));
          dispatch(SET_RELOAD());
        }
      }
    });
  };
  const imageurl = Id
    ? `${API}/product/photo/${Id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  return (
    <div
      style={{ minHeight: "400px" }}
      className="w-auto bg-white my-3 p-3 text-center"
    >
      <Image
        src={imageurl}
        className="object-cover w-full h-80"
        layout="responsive"
        width={240}
        height={320}
      />
      {/* <img className="object-cover w-full h-80" src={} alt=""></img> */}
      <h2 className="text-darkgray text-2xl font-medium leading-6 mt-4 mb-3 ">
        {Name}
      </h2>
      <p className="text-base leading-6 text-darkgray font-normal py-2">
        ₹ {Price}
      </p>
      <button
        onClick={() => AddProductToCart(Id)}
        className="text-sm mx-auto h-10 font-normal uppercase text-center w-11/12 my-4 text-white bg-darkgray transition-colors flex justify-center items-center hover:bg-black"
      >
        <AiOutlineShoppingCart className="text-white cursor-pointer text-xl -mt-0.5 mx-1" />
        Add to cart
      </button>
    </div>
  );
};

export default Product;
