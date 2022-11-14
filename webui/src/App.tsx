import { useEffect, useState } from "react";

import ProductList from "./components/ProductLits";
import Header from "./components/Header";

import { Product } from "./props.types";
import { getProducts } from "./api/products";
import TopSection from "./components/TopSection";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

function App() {
  return <div className="App"></div>;
}

export default App;
