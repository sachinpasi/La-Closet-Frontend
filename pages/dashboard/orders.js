import React, { useEffect, useState } from "react";
import Layout from "../../Components/Layout/Layout";
import withAuth from "../../Components/ProtectedRoute/WithAuth";
import Link from "next/link";
import { selectUser } from "../../Redux/Features/UserSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { API } from "../../API/API";

const orders = () => {
  const [AllOrders, setAllOrders] = useState([]);
  const user = useSelector(selectUser);

  const GetAllOrders = async () => {
    const res = await axios.get(`${API}/order/all/${user?.userId}`, {
      headers: { Authorization: `Bearer ${user?.token}` },
    });
    // console.log(res);
    if (res.status === 200) {
      res?.data?.forEach((order, index) => {
        // console.log(item);
        order?.products?.forEach((orderItem, index) => {
          // console.log(orderItem);
          setAllOrders((AllOrders) => [...AllOrders, orderItem]);
        });
      });
    }
  };

  useEffect(() => {
    if (user?.userId) {
      GetAllOrders();
    }
  }, [user]);

  console.log(AllOrders);

  return (
    <>
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
                Manage Orders
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
                    Quantity
                  </p>
                  <p className="w-1/5 flex justify-center items-center mx-2 font-semibold">
                    Amount
                  </p>

                  <button className="w-1/5 flex justify-center items-center text-white text-xl font-medium  ml-2"></button>
                </div>
                {AllOrders?.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full bg-white  h-12 my-0.5"
                  >
                    <p className=" w-16 flex justify-center items-center border-r-2">
                      {index + 1}
                    </p>
                    <p className="w-1/5 flex justify-start items-center mx-2">
                      {item?.name}
                    </p>
                    <p className="w-1/5 flex justify-center items-center mx-2">
                      {item?.count}
                    </p>
                    <p className="w-1/5 flex justify-center items-center mx-2">
                      {item?.price}
                    </p>

                    <button
                      // onClick={() => DeleteProduct(item._id)}
                      className="w-1/6 flex justify-center items-center text-white text-base font-medium py-2 bg-red-500 ml-2"
                    >
                      Cancel Order
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
    </>
  );
};

export default withAuth(orders);
