import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Layout from "../../Components/Layout/Layout";
import { selectUser } from "../../Redux/Features/UserSlice";
import { API } from "../../API/API";
import { useEffect } from "react";
import { toast } from "react-toastify";
import Compressor from "compressorjs";
import { useRouter } from "next/router";

const createProduct = () => {
  const router = useRouter();
  const user = useSelector(selectUser);
  const [Categories, setCategories] = useState([]);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const FetchCategories = async () => {
    const res = await axios.get(`${API}/categories`);
    setCategories(res.data);
  };

  const onSubmit = async (data) => {
    console.log(data);
    const { name, price, description, category, stock, photo } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("stock", stock);
    new Compressor(photo[0], {
      quality: 0.8,
      success: (res) => {
        formData.append("photo", res);
      },
    });

    try {
      const res = await axios.post(
        `${API}/product/create/${user?.userId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );

      if (res.status === 200) {
        router.push("/adminDashboard/products");
        return toast.success("Product Added Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchCategories();
  }, []);

  return (
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
              Create Product
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-4/5 flex flex-col items-start bg-gray-100 p-8"
            >
              <div className="flex  items-center justify-between my-1">
                <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                  Product Name :
                </p>
                <input
                  type="text"
                  className="w-96 h-10 border-2 border-gray-400 px-4"
                  placeholder="Enter The Product Name"
                  {...register("name")}
                />
              </div>
              <div className="flex   items-center justify-between my-1">
                <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                  Description :
                </p>
                <input
                  type="text"
                  className="w-96 h-10 border-2 border-gray-400 px-4"
                  placeholder="Enter The Product Description"
                  {...register("description")}
                />
              </div>
              <div className="flex   items-center justify-between my-1">
                <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                  Price :
                </p>
                <input
                  type="text"
                  className="w-96 h-10 border-2 border-gray-400 px-4"
                  placeholder="Enter The Product Description"
                  {...register("price")}
                />
              </div>
              <div className="flex   items-center justify-between my-1">
                <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                  Category :
                </p>
                <select
                  className="w-96 h-10 border-2  border-gray-400 px-4"
                  {...register("category")}
                >
                  <option value="">Select A Category</option>
                  {Categories.map((item, index) => (
                    <option key={index} value={item._id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex   items-center justify-between my-1">
                <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                  Stock :
                </p>
                <input
                  type="text"
                  className="w-96 h-10 border-2 border-gray-400 px-4"
                  placeholder="Enter The Product Description"
                  {...register("stock")}
                />
              </div>
              <div className="flex   items-center justify-between my-1">
                <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                  Photo :
                </p>
                <label className="customfileUpload bg-darkgray font-medium w-72 my-2">
                  Choose Images
                  <input
                    type="file"
                    className="w-96 h-10 border-2 border-gray-400 px-4"
                    {...register("photo")}
                  />
                </label>
              </div>
              <div className="w-full flex justify-end">
                <button
                  type="submit"
                  className="text-white font-medium text-xl bg-darkgray px-4 py-2 mb-2"
                >
                  Add Product
                </button>
              </div>
            </form>
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
  );
};

export default createProduct;
