import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

import { TProduct } from "../../shared/types/productTypes";
import { TRootState } from "../../store/store";
import "./ProductsPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";

function ProductsPage() {
  const allProducts = useSelector(
    (state: TRootState) => state.products.allProducts
  );
  return (
    <div className="page products-page">
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 10 }}
      >
        {allProducts.map((product: TProduct) => (
          <Grid item xs={4} sm={4} md={2} key={product.id}>
            <ProductCard {...product}/>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductsPage;
