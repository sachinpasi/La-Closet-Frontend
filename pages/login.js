import React from "react";
import Layout from "../Components/Layout/Layout";
const login = () => {
  return (
    <Layout>
      <section
        style={{
          height: "80vh",
        }}
        className="w-full  flex justify-center items-center"
      >
        <div className="w-96 h-96 mx-auto bg-white flex justify-center items-center flex-col shadow-2xl">
          <div className="flex justify-between items-center w-full h-14">
            <div className="w-2/5 h-full uppercase flex justify-center items-center text-green-500 ">
              Sign in
            </div>
            <div className="w-3/5 flex justify-center items-center h-full uppercase text-white bg-green-500 cursor-pointer">
              Sign Up
            </div>
          </div>

          <div className="flex flex-col justify-center items-center w-11/12 h-full py-2">
            <div className="w-full">
              <label className="text-sm text-gray-500 py-1">Email Id</label>
              <input
                className="w-full bg-gray-100 h-full px-4"
                type="email"
                name=""
                id=""
              />
            </div>
            <div className="w-full my-8">
              <label className="text-sm text-gray-500 py-1 px-4">
                Password
              </label>
              <input
                className="w-full bg-gray-100 h-full px-4"
                type="password"
                name=""
                id=""
              />
            </div>
            <div className="flex justify-start items-center w-full mt-4">
              <button className="w-40 h-10 bg-green-500 text-white">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default login;
