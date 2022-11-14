import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Header from "../components/Header";
import ProductList from "../components/ProductLits";
import TopSection from "../components/TopSection";
import { Product } from "../props.types";

const NotFoundPage = () => {
  return (
    <>
      <h2>404!</h2>
      <p>Can't seem to find what you are looking for...</p>
    </>
  );
};

export default NotFoundPage;
