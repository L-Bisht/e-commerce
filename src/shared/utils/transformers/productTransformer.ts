import {
  TDummyJSONProduct,
  TDummyJSONProductResponse,
  TProduct,
} from "../../types/productTypes";

export function dummJsonProductTransformer(
  dummyJsonProduct: TDummyJSONProduct
): TProduct {
  const { id, title, description, images, price, rating, category } =
    dummyJsonProduct;
  return {
    id,
    name: title,
    description,
    images,
    price,
    rating,
    category,
  };
}

export function dummyJSONProductsTransformer(
  dummyJSONProductResponse: TDummyJSONProductResponse
): Array<TProduct> {
  return dummyJSONProductResponse.products?.map(dummJsonProductTransformer);
}
