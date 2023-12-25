import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TDummyJSONProduct } from "../../shared/types/productTypes";
import ProductImages from "../../components/ProductImages";

const ProductPage = () => {
  const params = useParams();
  const [product, setProduct] = useState<TDummyJSONProduct>(
    {} as TDummyJSONProduct
  );
  useEffect(() => {
    const productId = params.productId;
    const url = new URL(`https://dummyjson.com/products/${productId}`);
    axios.get(url.toString()).then((res) => setProduct(res.data));
  });
  return (
    <Box>
      <ProductImages images={product.images || []} />
    </Box>
  );
};

export default ProductPage;
