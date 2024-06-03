export type TProduct = {
  id: string | number;
  name: string;
  description?: string;
  images?: Array<string>;
  price?: number;
  rating?: number;
  category?: string;
};

export type TDummyJSONProduct = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
};

export type TDummyJSONProductResponse = {
  products: Array<TDummyJSONProduct>;
  total: number;
  skip: number;
  limit: number;
};
