import { ProductInfo } from "../props.types";
import { useNavigate } from "react-router-dom";

import "./Product.scss";

interface Props {
  product: ProductInfo;
}

const Product = ({ product }: Props) => {
  const navigate = useNavigate();

  const { name, price, priceNormal, images } = product;

  const handleSelectProduct = () => {
    navigate(`product/${product.id}`);
  };

  return (
    <button className="product container" onClick={handleSelectProduct}>
      <img className="product__image" src={images[0]} alt={name} />
      <p className="product__price">{priceNormal}</p>
      <p className="product__name">{name}</p>
    </button>
  );
};

export default Product;
