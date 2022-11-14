import { useEffect, useState } from "react";
import { getProducts } from "../api/products";
import Header from "../components/Header";
import ProductList from "../components/ProductLits";
import TopSection from "../components/TopSection";
import { ProductInfo } from "../props.types";

const HomePage = () => {
  const [products, setProducts] = useState<ProductInfo[]>([]);

  useEffect(() => {
    (async () => {
      const prods = await getProducts();
      setProducts(prods);
    })();
  }, []);

  return (
    <>
      <Header />
      <TopSection />
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
