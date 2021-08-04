import React from "react";
import WithAdmin from "../../Components/ProtectedRoute/WithAdmin";
import Layout from "../../Components/Layout/Layout";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/Features/UserSlice";

const index = () => {
  const user = useSelector(selectUser);
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
              Admin Details
            </h2>
            <div className="w-full h-4/5 flex flex-col items-start bg-gray-100 p-8">
              <div className="flex items-center mb-2">
                <p className="text-white font-medium text-xl bg-darkgray px-4 py-2">
                  Admin Name :
                </p>
                <p className="text-gray-600 text-xl ml-2 capitalize">
                  - {user?.name}
                </p>
              </div>
              <div className="flex items-center my-2">
                <p className="text-white font-medium text-xl bg-darkgray px-4 py-2">
                  Email :
                </p>
                <p className="text-gray-600 text-xl ml-2 capitalize">
                  - {user?.email}
                </p>
              </div>
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
  );
};

export default WithAdmin(index);
