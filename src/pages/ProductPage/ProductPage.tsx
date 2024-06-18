import { Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductImages from "../../components/ProductImages";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";
import { fetchProduct, productSelector } from "../../store/productSlice";
import ProductDetailsCard from "../../components/ProductDetailsCard";

const ProductPage = () => {
  const { productId = "" } = useParams();
  const dispatch = useAppDispatch();
  const product = useSelector(productSelector);
  useEffect(() => {
    dispatch(fetchProduct({ productId }));
  }, [productId, dispatch]);
  return (
    <Grid container rowSpacing={5} columnSpacing={3}>
      <Grid item xs={12} sm={6}>
        <ProductImages images={product.images || []} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProductDetailsCard
          id={product.id}
          name={product.name}
          price={product.price || 0}
          rating={product.rating || 0}
          description={product.description}
        />
      </Grid>
    </Grid>
  );
};

export default ProductPage;
