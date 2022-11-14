export interface ProductInfo {
  id: number;
  name: string;
  price: number;
  priceNormal: string;
  images: string[];
}

export interface Product extends ProductInfo {
  description: string;
}
