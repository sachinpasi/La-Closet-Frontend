import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API } from "../API/API";
import Layout from "../Components/Layout/Layout";
import { selectReload } from "../Redux/Features/ReloadSlice";
import { selectUser } from "../Redux/Features/UserSlice";

import DropIn from "braintree-web-drop-in-react";
import WithAuth from "../Components/ProtectedRoute/WithAuth";
import { useRouter } from "next/router";

const CheckOut = () => {
  const user = useSelector(selectUser);
  const reload = useSelector(selectReload);

  const router = useRouter();

  const [CartProducts, setCartProducts] = useState([]);
  const [GetReload, setGetReload] = useState(false);
  const [Info, setInfo] = useState({
    clientToken: null,
    instance: {},
  });
  //   console.log(user.userId);
  const LoadCart = () => {
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        return JSON.parse(localStorage.getItem("cart"));
      }
    }
  };

  const ClearCart = () => {
    if (typeof window !== undefined) {
      localStorage.removeItem("cart");
    }
  };

  const RemoveProductFromCart = (id) => {
    let Cart = [];
    if (typeof window !== undefined) {
      if (localStorage.getItem("cart")) {
        Cart = JSON.parse(localStorage.getItem("cart"));
      }

      Cart.map((product, index) => {
        if (product._id === id) {
          Cart.splice(index, 1);
        }
      });
      localStorage.setItem("cart", JSON.stringify(Cart));
    }
    setGetReload(!GetReload);
    return Cart;
  };

  const GetFinalPrice = () => {
    let amount = 0;
    CartProducts?.forEach((p) => {
      amount = amount + p.price;
    });
    return amount;
  };

  const GetMeToken = async () => {
    const res = await axios.get(
      `${API}/payment/gettoken/${user?.userId}`,

      {
        headers: { Authorization: `Bearer ${user?.token}` },
      }
    );

    console.log(res);
    if (res.status === 200) {
      setInfo({ clientToken: res.data.clientToken });
    }
  };

  const OnPurchase = () => {
    let nonce;
    let getNonce = Info.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: GetFinalPrice(),
      };
      const ProcessPayment = async () => {
        const res = await axios.post(
          `${API}/payment/braintree/${user?.userId}`,
          { paymentData },
          {
            headers: { Authorization: `Bearer ${user?.token}` },
          }
        );
        console.log(res.data);

        if (res.status === 200) {
          const CreateOrder = async () => {
            try {
              const res2 = await axios.post(
                `${API}/order/create/${user?.userId}`,
                {
                  products: CartProducts,
                  transaction_id: res?.data.transaction?.id,
                  amount: res?.data.transaction?.amount,
                },

                {
                  headers: { Authorization: `Bearer ${user?.token}` },
                }
              );

              if (res.status === 200) {
                ClearCart();
                router.push("/");
              }
            } catch (error) {
              console.log(error);
            }
          };
          CreateOrder();
        }
      };
      ProcessPayment();
    });
  };

  useEffect(() => {
    setCartProducts(LoadCart());
  }, [GetReload, reload]);

  useEffect(() => {
    if (user?.userId) {
      GetMeToken();
    }
  }, [user]);
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
          <div className="mx-8 w-full">
            <h2 className="text-4xl font-medium py-4 tracking-tight">
              Checkout
            </h2>
            <div className="border-b-2 w-full border-darkgray"></div>
            <h4 className="text-2xl tracking-tight font-medium py-4">
              Your Order
            </h4>
            <div className="w-full">
              <div className="w-full h-14 bg-darkgray grid grid-cols-5 text-white ">
                <div className="flex justify-start items-center col-span-2">
                  <h5 className="text-xl pl-10 py-2">Product Name</h5>
                </div>
                <div className="flex justify-center items-center">
                  <h5 className="text-xl px-4 py-2">Quantity</h5>
                </div>
                <div className="flex justify-center items-center">
                  <h5 className="text-xl px-4 py-2">Rate</h5>
                </div>
                <div className="flex justify-center items-center">
                  <h5 className="text-xl px-4 py-2">Subtotal</h5>
                </div>
              </div>

              {CartProducts?.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-14 bg-gray-50 grid grid-cols-5 "
                >
                  <div className="flex justify-start items-center col-span-2">
                    <h5 className="text-lg pl-10 py-2">{item?.name}</h5>
                  </div>
                  <div className="flex justify-center items-center">
                    <h5 className="text-lg px-4 py-2">1</h5>
                  </div>
                  <div className="flex justify-center items-center">
                    <h5 className="text-lg px-4 py-2">&#8377; {item?.price}</h5>
                  </div>
                  <div className="flex justify-center items-center">
                    <h5 className="text-lg px-4 py-2">&#8377; {item?.price}</h5>
                  </div>
                </div>
              ))}
              <div className="w-full h-14 bg-gray-100 grid grid-cols-5  ">
                <div className="flex justify-start items-center col-span-2">
                  <h5 className="text-xl pl-10 py-2"></h5>
                </div>
                <div className="flex justify-center items-center">
                  <h5 className="text-xl px-4 py-2"></h5>
                </div>
                <div className="flex justify-center items-center">
                  <h4 className="text-xl px-4 py-2 font-semibold">
                    Total Amount :
                  </h4>
                </div>
                <div className="flex justify-center items-center">
                  <h4 className="text-xl px-4 py-2 font-semibold">
                    &#8377; {GetFinalPrice()}
                  </h4>
                </div>
              </div>
            </div>

            {CartProducts?.length > 0 && (
              <div>
                {Info?.clientToken !== null && CartProducts?.length !== 0 ? (
                  <>
                    <DropIn
                      options={{ authorization: Info?.clientToken }}
                      onInstance={(instance) => (Info.instance = instance)}
                    />
                    <div className="w-full flex justify-end my-8">
                      <div
                        onClick={OnPurchase}
                        className="bg-yellow-300 cursor-pointer hover:bg-yellow-400 transition-colors"
                      >
                        <p className="text-xl font-medium px-32 py-3 ">
                          Pay Now
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div></div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WithAuth(CheckOut);
