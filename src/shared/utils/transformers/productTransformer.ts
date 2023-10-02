import {
  TDummyJSONProduct,
  TDummyJSONProductResponse,
  TProduct,
} from "../../types/productTypes";

function dummyJSONProductTransformer(
  dummyJSONProductResponse: TDummyJSONProductResponse
): Array<TProduct> {
  return dummyJSONProductResponse.products?.map(
    (product: TDummyJSONProduct): TProduct => {
      return {
        id: product.id,
        name: product.title,
        description: product.description,
        images: product.images,
      };
    }
  );
}
export default dummyJSONProductTransformer;
