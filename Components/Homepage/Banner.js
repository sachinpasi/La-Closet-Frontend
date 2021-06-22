import React from "react";

const Banner = () => {
  return (
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
        className="h-full mx-auto bg-white flex"
      >
        <div className="w-3/6 flex justify-center items-center">
          <div style={{ width: "400px" }} className="h-auto ml-auto ">
            <h2 className="text-darkgray text-8xl font-normal leading-tight">
              Winter 21’
            </h2>
            <p className="text-gray-500 text-base font-normal leading-8 py-4">
              Winter layer season is here. Check out our trendy new winter
              collection to stay warm in style.{" "}
            </p>
            <div className="flex justify-start items-center">
              <h5 className="text-gray-500 text-base font-normal leading-4">
                Price
              </h5>
              <h4 className="text-gray-700 font-semibold text-2xl mx-4">
                ₹ 1117.99
              </h4>
            </div>
            <button className="text-sm  my-4 font-semibold leading-6 text-gray-700 py-4 px-16 border-2 border-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
              BUY NOW
            </button>
          </div>
        </div>
        <div className="flex w-7/12">
          <div
            style={{
              margin: "85px -74px 0px 70px",
            }}
            className="overflow-y-hidden"
          >
            <img
              style={{
                height: "700px",
                width: "600px",
              }}
              className=""
              src="/images/homepage/banner/bannerimg.png"
              alt=""
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
