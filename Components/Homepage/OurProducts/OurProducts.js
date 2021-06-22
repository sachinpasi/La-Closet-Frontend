import React from "react";
import Product from "./Product";

const OurProducts = () => {
  return (
    <section className="w-full h-auto my-12">
      <div className="customContainer my-12 flex flex-col">
        <div className="mb-5">
          <h2 className="text-darkgray text-6xl font-normal">Our Products</h2>
        </div>

        <div className="w-full h-full grid grid-cols-4 gap-8 my-4">
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />{" "}
          <Product Name="Parlor Palm" Price="500" />
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
