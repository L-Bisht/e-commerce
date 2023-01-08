import "./ProductList.css";
import {
  IProduct,
  IProductListProps,
} from "../../interfaces/ProductInterfaces";
import Product from "../Product/Product";

function ProductList({ products }: IProductListProps) {
  return (
    <div className="productlist">
      {products.map((product: IProduct) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}

export default ProductList;
