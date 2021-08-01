import React, { useEffect } from "react";
import Head from "next/head";
import Layout from "../Components/Layout/Layout";
import Banner from "../Components/Homepage/Banner";
import OurProducts from "../Components/Homepage/OurProducts/OurProducts";
import Commercial from "../Components/Homepage/Commercial/Commercial";
import Collection from "../Components/Homepage/Collections/Collection";

const index = () => {
  return (
    <Layout>
      <Head>
        <title>La Closet</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Banner />
      <OurProducts />
      <Commercial />
      <Collection />
    </Layout>
  );
};

export default index;
