import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { API } from "../../API/API";
import { selectUser } from "../../Redux/Features/UserSlice";
import { AiOutlineClose } from "react-icons/ai";

const ProductUpdateModal = ({
  ProductId,
  isProductUpdateModalOpen,
  setisProductUpdateModalOpen,
}) => {
  const user = useSelector(selectUser);
  const [Categories, setCategories] = useState([]);
  const [ProductData, setProductData] = useState();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const FetchCategories = async () => {
    const res = await axios.get(`${API}/categories`);
    setCategories(res.data);
  };

  const FetchProductData = async () => {
    const res = await axios.get(`${API}/product/${ProductId}`);

    setProductData(res.data);
  };

  console.log(ProductData);

  const onSubmit = async (data) => {
    console.log(data);
    const { name, price, description, category, stock, photo } = data;
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("photo", photo[0]);

    try {
      const res = await axios.put(
        `${API}/product/${ProductId}/${user?.userId}`,
        formData,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      console.log(res);
      if (res.status === 200) {
        return toast.success("Product Updated Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (ProductId) {
      FetchProductData();
      FetchCategories();
    }
  }, [ProductId]);

  return (
    <div
      className={`${
        isProductUpdateModalOpen ? "top-0" : "-top-full"
      } w-full h-screen fixed z-50 `}
    >
      <div
        onClick={() => setisProductUpdateModalOpen(false)}
        className={` w-full h-full bg-black bg-opacity-50 fixed `}
      ></div>
      <div
        className={`${
          isProductUpdateModalOpen ? "top-2/4" : "-top-full"
        } w-4/5 h-4/5 bg-white absolute rounded-3xl z-50 shadow-2xl  top-2/4 bottom-2/4 left-2/4 right-2/4 transform -translate-x-2/4 -translate-y-2/4`}
      >
        <AiOutlineClose
          onClick={() => setisProductUpdateModalOpen(false)}
          className="absolute right-4 top-4 text-3xl cursor-pointer"
        />
        <div className="w-full  p-8">
          <h2 className="text-gray-700 text-3xl font-medium  leading-7 pb-12  ">
            Update Product
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-4/5 flex flex-col items-start bg-gray-100 p-8 rounded-3xl"
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
                defaultValue={ProductData?.name}
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
                defaultValue={ProductData?.description}
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
                defaultValue={ProductData?.price}
              />
            </div>
            <div className="flex   items-center justify-between my-1">
              <p className="text-white w-48 font-medium text-xl bg-darkgray px-4 py-2 mr-4">
                Category :
              </p>
              <select
                className="w-96 h-10 border-2  border-gray-400 px-4"
                {...register("category")}
                defaultValue={ProductData?.category?._id}
              >
                {/* <option value="">Select A Category</option> */}
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
                defaultValue={ProductData?.stock}
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
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductUpdateModal;
