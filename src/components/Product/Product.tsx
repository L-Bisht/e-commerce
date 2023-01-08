import "./Product.css";

import { IProductProps } from "../../interfaces/ProductInterfaces";

function Product({ product }: IProductProps) {
  return (
    <div className="product card">
      <img
        className="product__image"
        src={product.imageURL}
        alt={product.name}
      />
      <h1 className="product__title">{product.name}</h1>
    </div>
  );
}
export default Product;
