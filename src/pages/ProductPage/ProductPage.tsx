import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import ProductImages from "../../components/ProductImages";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";
import { fetchProduct, productSelector } from "../../store/productSlice";

const ProductPage = () => {
  const { productId = "" } = useParams();
  const dispatch = useAppDispatch();
  const product = useSelector(productSelector);
  useEffect(() => {
    dispatch(fetchProduct({ productId }));
  }, [productId, dispatch]);
  return (
    <Box>
      <ProductImages images={product.images || []} />
    </Box>
  );
};

export default ProductPage;
