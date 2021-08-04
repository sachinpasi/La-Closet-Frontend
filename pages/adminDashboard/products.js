import axios from "axios";
import Link from "next/link";
import router from "next/router";
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { API } from "../../API/API";
import ProductUpdateModal from "../../Components/Admin/ProductUpdateModal";
import Layout from "../../Components/Layout/Layout";
import WithAdmin from "../../Components/ProtectedRoute/WithAdmin";
import { selectUser } from "../../Redux/Features/UserSlice";

const Products = () => {
  const user = useSelector(selectUser);
  const [AllProducts, setAllProducts] = useState([]);
  const [ProductId, setProductId] = useState();
  const [isProductUpdateModalOpen, setisProductUpdateModalOpen] =
    useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const GetAllProducts = async () => {
    const res = await axios.get(`${API}/products/all`);
    console.log(res);
    setAllProducts(res.data);
  };

  const DeleteProduct = async (id) => {
    const res = await axios.delete(`${API}/product/${id}/${user?.userId}`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });

    if (res.status === 200) {
      GetAllProducts();
      return toast.success("Product Deleted Successfully");
    }
  };

  const HandleProductUpdate = (id) => {
    setProductId(id);
    setisProductUpdateModalOpen(true);
  };

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${API}/category/create/${user?.userId}`,
        { ...data },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      console.log(res);
      if (res.status === 200) {
        return toast.success("Category Added Successfully");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    GetAllProducts();
  }, []);

  return (
    <>
      <ProductUpdateModal
        setisProductUpdateModalOpen={setisProductUpdateModalOpen}
        isProductUpdateModalOpen={isProductUpdateModalOpen}
        ProductId={ProductId}
      />
      <Layout>
        <section
          style={{
            height: "calc(100vh - 144px)",
          }}
          className="w-full h"
        >
          <div
            style={{
              width: "calc(100vw - 301px)",
            }}
            className="h-full mx-auto bg-white flex justify-between"
          >
            <div className="w-9/12 p-8">
              <h2 className="text-gray-700 text-3xl font-medium  leading-7 pb-12  ">
                Manage Products
              </h2>
              <div className="w-full h-4/5 flex flex-col items-start bg-gray-100 p-8">
                <div className="flex justify-between w-full bg-white  h-12 my-0.5">
                  <p className="w-16 flex justify-center items-center  border-r-2 font-semibold">
                    S.No
                  </p>
                  <p className="w-1/5 flex justify-center items-center mx-2 font-semibold">
                    Product Name
                  </p>
                  <p className="w-1/5 flex justify-center items-center mx-2 font-semibold">
                    Category
                  </p>
                  <p className="w-1/5 flex justify-center items-center mx-2 font-semibold">
                    Stock
                  </p>
                  <button className="w-1/5 flex justify-center items-center text-white text-xl font-medium  mx-2"></button>
                  <button className="w-1/5 flex justify-center items-center text-white text-xl font-medium  ml-2"></button>
                </div>
                {AllProducts.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full bg-white  h-12 my-0.5"
                  >
                    <p className=" w-16 flex justify-center items-center border-r-2">
                      {index + 1}
                    </p>
                    <p className="w-1/5 flex justify-center items-center mx-2">
                      {item?.name}
                    </p>
                    <p className="w-1/5 flex justify-center items-center mx-2">
                      {item?.category?.name}
                    </p>
                    <p className="w-1/5 flex justify-center items-center mx-2">
                      {item?.stock}
                    </p>
                    <button
                      onClick={() => HandleProductUpdate(item._id)}
                      className="w-1/5 flex justify-center items-center text-white text-xl font-medium py-2 bg-yellow-300 mx-2"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => DeleteProduct(item._id)}
                      className="w-1/5 flex justify-center items-center text-white text-xl font-medium py-2 bg-red-500 ml-2"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-3/12 h-full bg-darkgray p-8 ">
              <Link href="/adminDashboard/createCategory">
                <div className="bg-white w-full h-12 flex justify-start items-center px-4 cursor-pointer my-2">
                  <p className="text-lg font-semibold tracking-wider">
                    Create Categories
                  </p>
                </div>
              </Link>
              <Link href="/adminDashboard/createProduct">
                <div className="bg-white w-full h-12 flex justify-start items-center px-4 cursor-pointer my-2">
                  <p className="text-lg font-semibold tracking-wider">
                    Create Product
                  </p>
                </div>
              </Link>
              <Link href="/adminDashboard/products">
                <div className="bg-white w-full h-12 flex justify-start items-center px-4 cursor-pointer my-2">
                  <p className="text-lg font-semibold tracking-wider">
                    Manage Product
                  </p>
                </div>
              </Link>
              <Link href="/">
                <div className="bg-white w-full h-12 flex justify-start items-center px-4 cursor-pointer my-2">
                  <p className="text-lg font-semibold tracking-wider">
                    Manage Orders
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WithAdmin(Products);
