import { FormEvent, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { TProduct } from "../../shared/types/productTypes";
import { TRootState } from "../../store/store";
import "./ProductsPage.css";

function ProductsPage() {
  const allProducts = useSelector(
    (state: TRootState) => state.products.allProducts
  );
  return (
    <div className="page">
      {allProducts.map((product: TProduct) => (
        <div key={product.id}>
          <div>{product.name}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductsPage;
