import { ProductInfo } from "../props.types";
import Product from "./Product";

import "./ProductList.scss";

interface Props {
  products: ProductInfo[];
}

const ProductList = ({ products }: Props) => {
  return (
    <section className="list">
      {products.map((p, idx) => (
        <Product key={idx} product={p}></Product>
      ))}
    </section>
  );
};

export default ProductList;
