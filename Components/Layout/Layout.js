import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LOGIN } from "../../Redux/Features/UserSlice";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (JSON.parse(user)) dispatch(LOGIN(JSON.parse(user)));
  }, []);

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
