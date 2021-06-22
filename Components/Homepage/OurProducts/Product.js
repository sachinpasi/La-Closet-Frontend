import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Product = ({ Name, Price }) => {
  return (
    <div
      style={{ minHeight: "400px" }}
      className="w-auto bg-white my-3 p-3 text-center"
    >
      <img
        className="object-cover w-full h-80"
        src="/images/homepage/products/1.jpg"
        alt=""
      ></img>
      <h2 className="text-darkgray text-2xl font-medium leading-6 mt-4 mb-3 ">
        {Name}
      </h2>
      <p className="text-base leading-6 text-darkgray font-normal py-2">
        ₹ {Price}
      </p>
      <button className="text-sm mx-auto h-10 font-normal uppercase text-center w-11/12 my-4 text-white bg-darkgray transition-colors flex justify-center items-center hover:bg-black">
        <AiOutlineShoppingCart className="text-white cursor-pointer text-xl -mt-0.5 mx-1" />
        Add to cart
      </button>
    </div>
  );
};

export default Product;
