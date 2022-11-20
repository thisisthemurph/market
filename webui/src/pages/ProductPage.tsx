import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../api/products";
import { Product } from "../props.types";

import PageNavigation from "../components/PageNavigation";
import ButtonGroup from "../components/ButtonGroup";

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
      <section className="column column__sm">
        <img src={product.images[0]} alt={product.name} />
        <h2 className="container">{product.name}</h2>
        <p className="container">{product.priceNormal}</p>
      </section>

      <section className="container column">
        <button className="primary">Message seller</button>

        <ButtonGroup>
          <button>Send offer</button>
          <button>Save</button>
          <button>Share</button>
        </ButtonGroup>

        <section>
          <h3>Description</h3>
          <p>{product.description}</p>
        </section>
      </section>
    </>
  );
};

export default ProductPage;
