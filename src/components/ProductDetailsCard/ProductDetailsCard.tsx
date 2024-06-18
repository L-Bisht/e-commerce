import { Card, Stack, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import Rating from "../Rating/Rating";
import StyledButton from "../FormsUI/StyledButton/StyledButton";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";
import { cartsSelector, updateCart } from "../../store/cartSlice";
import { useSelector } from "react-redux";
import {
  isAuthenticatedSelector,
  userDataSelector,
} from "../../store/authenticationSlice";
import { useNavigate } from "react-router-dom";

type TProps = {
  id: string | number;
  price: number;
  rating: number;
  name: string;
  description?: string;
};

const ProductDetailsCard = (props: TProps) => {
  const dispatch = useAppDispatch();
  const cartId = useSelector(cartsSelector)?.id;
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const userId = useSelector(userDataSelector)?.id;
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(
        updateCart({
          cartId,
          products: [{ id: props.id, quantity: 1 }],
          createNew: !cartId,
          userId,
        })
      );
    } else {
      navigate("/login");
    }
  };
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "18px", width: "460px", p: 4, height: "auto" }}
    >
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          {props.name}
        </Typography>
        <Typography variant="body1">{props.description}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Rating rating={props.rating} />
          <Typography variant="h6" fontWeight="bold">
            ${props.price}
          </Typography>
        </Stack>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <QuantitySelector />
          <StyledButton
            onClick={() => handleAddToCart()}
            size="large"
            variant="contained"
          >
            <Stack spacing={1} direction="row" alignItems="center">
              <LocalMallOutlinedIcon fontSize="small" />
              <Typography variant="body2">Add to cart</Typography>
            </Stack>
          </StyledButton>
        </Stack>
      </Stack>
    </Card>
  );
};

export default ProductDetailsCard;
