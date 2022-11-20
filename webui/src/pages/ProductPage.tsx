import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { Product } from "../props.types";

import PageNavigation from "../components/PageNavigation";

const ProductPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { productId: productIdParam } = useParams<{ productId?: string }>();

  useEffect(() => {
    (async () => {
      if (!productIdParam) {
        return;
      }

      const productId = parseInt(productIdParam);
      if (productId === NaN) {
        return;
      }

      const prod = await getProduct(productId);
      setProduct(prod);
    })();
  }, [productIdParam]);

  if (!product) {
    // TODO: Loading component
    return <p>Loading</p>;
  }

  return (
    <>
      <PageNavigation />

      {/* TODO: Carosel component */}
      <img src={product.images[0]} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.priceNormal}</p>
      <button>Message seller</button>
      {/* TODO: Buttonn list component */}
      <section>
        <button>Like</button>
        <button>Comment</button>
        <button>Send offer</button>
        <button>Save</button>
      </section>
      <section>
        <h3>Description</h3>
        <p>{product.description}</p>
      </section>
    </>
  );
};

export default ProductPage;
