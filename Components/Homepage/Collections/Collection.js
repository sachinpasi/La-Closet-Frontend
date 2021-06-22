import React from "react";

const Collection = () => {
  return (
    <section className="w-full my-8 ">
      <div className="customContainer my-12 flex flex-col">
        <div
          style={{ height: "460px" }}
          className="mt-20 w-full grid grid-cols-2 gap-8 "
        >
          <div
            style={{
              height: "430px",
            }}
            className="w-full mx-auto shadow-lg mt-0 -mb-40 z-10 bg-white flex"
          >
            <div
              style={{ padding: "30px 30px 50px 50px" }}
              className="w-2/4 h-full "
            >
              <h3 className="text-gray-700 text-base font-medium uppercase leading-6 mb-14">
                New Arrivals
              </h3>
              <h2 className="text-gray-700 text-3xl font-medium uppercase leading-7 mb-14">
                The Black Beauty
              </h2>
              <p className="text-gray-600 text-sm font-light mb-8 leading-6">
                Look sophisticated in our new collection of all-black clothing
                ensemble.{" "}
              </p>
              <button className="text-sm font-medium leading-7 text-gray-700 cursor-pointer border-2 border-gray-700 py-4 px-8 transition-colors hover:bg-black hover:text-white">
                Browse Collection
              </button>
            </div>
            <div className="mt-8 w-2/4 h-full">
              <img
                className="w-64 h-96"
                src="/images/homepage/collection/black.png"
                alt=""
              ></img>
            </div>
          </div>
          <div
            style={{
              height: "430px",
            }}
            className="w-full shadow-lg mt-0 -mb-40 z-10 bg-white flex"
          >
            <div
              style={{ padding: "30px 30px 50px 50px" }}
              className="w-2/4 h-full "
            >
              <h3 className="text-gray-700 text-base font-medium uppercase leading-6 mb-14">
                WINTER COLLECTION
              </h3>
              <h2 className="text-gray-700 text-3xl font-medium uppercase leading-7 mb-14">
                WINTER’S <br />
                BEST
              </h2>
              <p className="text-gray-600 text-sm font-light mb-8 leading-6">
                Check out our best winter collection to stay warm in style this
                season.
              </p>
              <button className="text-sm font-medium leading-7 text-gray-700 cursor-pointer border-2 whitespace-nowrap border-gray-700 py-4 px-8 transition-colors hover:bg-black hover:text-white">
                Discover More
              </button>
            </div>
            <div className="mt-8 w-2/4 h-full">
              <img
                className="w-64 h-96"
                src="/images/homepage/collection/winter.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
