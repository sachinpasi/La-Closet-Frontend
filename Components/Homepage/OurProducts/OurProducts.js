import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { API } from "../../../API/API";
import { GetServerSideProps, NextPage } from "next";

const OurProducts = () => {
  const [AllProducts, setAllProducts] = useState([]);

  const FetchAllProducts = async () => {
    const res = await axios.get(`${API}/products/all`);

    setAllProducts(res.data);
  };
  useEffect(() => {
    FetchAllProducts();
  }, []);
  return (
    <section className="w-full h-auto my-12">
      <div className="customContainer my-12 flex flex-col">
        <div className="mb-5">
          <h2 className="text-darkgray text-6xl font-normal">Our Products</h2>
        </div>

        <div className="w-full h-full grid grid-cols-4 gap-8 my-4">
          {AllProducts?.map((item) => (
            <Product
              AllProducts={AllProducts}
              key={item._id}
              Name={item.name}
              Price={item.price}
              Id={item._id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
