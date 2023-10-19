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
      const {id, title, description, images, price, rating} = product;
      return {
        id, name: title, description, images, price, rating
      };
    }
  );
}
export default dummyJSONProductTransformer;
