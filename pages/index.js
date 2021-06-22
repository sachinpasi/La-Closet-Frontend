import React from "react";

import Layout from "../Components/Layout/Layout";
import Banner from "../Components/Homepage/Banner";
import OurProducts from "../Components/Homepage/OurProducts/OurProducts";
import Commercial from "../Components/Homepage/Commercial/Commercial";
import Collection from "../Components/Homepage/Collections/Collection";

const index = () => {
  return (
    <Layout>
      <Banner />
      <OurProducts />
      <Commercial />
      <Collection />
    </Layout>
  );
};

export default index;
