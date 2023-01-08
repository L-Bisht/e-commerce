export interface IProduct {
  id: string;
  name: string;
  inStock: boolean;
  category: string;
  imageURL: string;
}

export interface IProductListProps {
  products: IProduct[];
}

export interface IProductProps {
  product: IProduct;
}
