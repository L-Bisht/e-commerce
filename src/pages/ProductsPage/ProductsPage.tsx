import { useSelector } from "react-redux";
import { Box, Grid } from "@mui/material";

import { TProduct } from "../../shared/types/productTypes";
import { TRootState } from "../../store/store";
import "./ProductsPage.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const navigate = useNavigate();
  const allProducts = useSelector(
    (state: TRootState) => state.products.allProducts
  );
  return (
    <Box className="products-page">
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 10 }}
      >
        {allProducts.map((product: TProduct) => (
          <Grid item xs={4} sm={4} md={2} key={product.id}>
            <ProductCard handleClick={() => navigate(`/products/${product.id}`)} {...product}/>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductsPage;
