import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductImages from "../../components/ProductImages";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";
import { useEffect } from "react";
import { fetchProduct, productSelector } from "../../store/productSlice";
import { useSelector } from "react-redux";

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
