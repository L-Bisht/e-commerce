import { Grid } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { TProduct } from "../../shared/types/productTypes";
import ProductCard from "../../components/ProductCard/ProductCard";
import { fetchProducts, productsSelector } from "../../store/productsSlice";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";

function ProductsPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const allProducts = useSelector(productsSelector);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    dispatch(fetchProducts({ query }));
  }, [dispatch, query]);

  return (
    <Grid spacing={2} container>
      {allProducts.map((product: TProduct) => (
        <Grid item xs={12} sm={4} md={3} key={product.id}>
          <ProductCard
            handleClick={() => navigate(`/products/${product.id}`)}
            {...product}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default ProductsPage;
