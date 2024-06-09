import { Box, Stack } from "@mui/material";
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
    <Box>
      <Stack direction="row" spacing={3}>
        <ProductImages images={product.images || []} />
        <ProductDetailsCard
          name={product.name}
          price={product.price || 0}
          rating={product.rating || 0}
        />
      </Stack>
    </Box>
  );
};

export default ProductPage;
