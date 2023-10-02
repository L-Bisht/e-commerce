import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import { TProduct } from "../../shared/types/productTypes";
import { TRootState } from "../../store/store";
import "./ProductsPage.css";

function ProductsPage() {
  const allProducts = useSelector(
    (state: TRootState) => state.products.allProducts
  );
  return (
    <div className="page products-page">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {allProducts.map((product: TProduct) => (
          <Grid item xs={2} sm={4} md={3} key={product.id}>
            <img
              src={product.images?.[0]}
              alt={product.name}
              style={{ height: "300px", maxWidth: "300px" }}
            />
            <div>{product.name}</div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductsPage;
