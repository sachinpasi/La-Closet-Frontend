import React from "react";

const Commercial = () => {
  return (
    <section className="w-full">
      <div className="customContainer  my-12 flex flex-col bg-darkgray">
        <h2 className="text-white text-6xl font-normal mt-0 mb-0  py-20 px-24">
          Stay In Trend With La Closet
        </h2>
        <div className="px-24">
          <div
            style={{
              height: "300px",
            }}
            className=" w-full flex justify-between items-center relative "
          >
            <div
              style={{
                margin: "0px 20px -150px 0px",
              }}
              className="h-80 bg-white shadow-sm px-10 relative w-full flex flex-col justify-center items-start "
            >
              <img
                className="w-11 h-11"
                src="/images/homepage/commercial/1.svg"
                alt=""
              ></img>
              <h3 className="text-darkgray text-2xl leading-6 py-4">
                Latest Styles
              </h3>
              <p className="text-gray-600 text-sm py-4 leading-7 font-normal">
                Our designs follow the latest fashion styles to help you stay
                updated with new trends.{" "}
              </p>
              <span className="text-base font-medium leading-6  cursor-pointer text-gray-700">
                Read More
              </span>
            </div>
            <div
              style={{
                margin: "0px 20px -150px 0px",
              }}
              className="h-80 bg-white shadow-sm px-10 relative w-full flex flex-col justify-center items-start "
            >
              <img
                className="w-11 h-11"
                src="/images/homepage/commercial/2.svg"
                alt=""
              ></img>
              <h3 className="text-darkgray text-2xl leading-6 py-4">
                Best Prices
              </h3>
              <p className="text-gray-600 text-sm py-4 leading-7 font-normal">
                Enjoy the best prices for high quality clothing and accessories.
              </p>
              <span className="text-base font-medium leading-6  cursor-pointer text-gray-700">
                Read More
              </span>
            </div>
            <div
              style={{
                margin: "0px 20px -150px 0px",
              }}
              className="h-80 bg-white shadow-sm px-10 relative w-full flex flex-col justify-center items-start "
            >
              <img
                className="w-11 h-11"
                src="/images/homepage/commercial/3.svg"
                alt=""
              ></img>
              <h3 className="text-darkgray text-2xl leading-6 py-4">
                Free Shipping
              </h3>
              <p className="text-gray-600 text-sm py-4 leading-7 font-normal">
                We provide free shipping worldwide. You can order from anywhere,
                anytime.
              </p>
              <span className="text-base font-medium leading-6  cursor-pointer text-gray-700">
                Read More
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
