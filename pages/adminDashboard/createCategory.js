import axios from "axios";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { API } from "../../API/API";
import Layout from "../../Components/Layout/Layout";
import WithAdmin from "../../Components/ProtectedRoute/WithAdmin";
import { selectUser } from "../../Redux/Features/UserSlice";

const createCategory = () => {
  const user = useSelector(selectUser);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

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
              Create Category
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full h-4/5 flex flex-col items-start bg-gray-100 p-8"
            >
              <div className="flex flex-col items-start mb-2">
                <p className="text-white font-medium text-xl bg-darkgray px-4 py-2 mb-3">
                  Category Name :
                </p>
                <input
                  type="text"
                  className="w-96 h-10 border-2 border-gray-400 px-4"
                  placeholder="Enter The Category Name"
                  {...register("name")}
                />
              </div>
              <button
                type="submit"
                className="text-white font-medium text-xl bg-darkgray px-4 py-2 mb-2"
              >
                Submit
              </button>
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
            <Link href="/">
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
            <Link href="/dashboard/orders">
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

export default WithAdmin(createCategory);
