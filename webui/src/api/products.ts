import { Product, ProductInfo } from "../props.types";

interface ProductMap {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  brand: string;
  category: string;
}

interface ResultMap {
  limit: number;
  products: ProductMap[];
  skip: number;
  total: number;
}

export const getProducts = async (limit: number = 30): Promise<ProductInfo[]> => {
  const queryUrl = `https://dummyjson.com/products?limit=${limit}&select=id,title,price,images`;

  const result = await fetch(queryUrl);

  if (result.status !== 200) {
    return [];
  }

  const data = (await result.json()) as ResultMap;

  if (!data) {
    return [];
  }

  return data.products.map((p) => ({
    id: p.id,
    name: p.title,
    price: p.price,
    priceNormal: `£${p.price / 100}`,
    images: p.images,
  }));
};

export const getProduct = async (productId: number): Promise<Product | null> => {
  const queryUrl = `https://dummyjson.com/products/${productId}`;

  const result = await fetch(queryUrl);

  if (result.status !== 200) {
    return null;
  }

  const data = (await result.json()) as ProductMap;

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    name: data.title,
    description: data.description,
    price: data.price,
    priceNormal: `£${data.price / 100}`,
    images: data.images,
  };
};
