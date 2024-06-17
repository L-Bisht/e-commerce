import { Card, Stack, Typography } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

import Rating from "../Rating/Rating";
import StyledButton from "../FormsUI/StyledButton/StyledButton";
import QuantitySelector from "../QuantitySelector/QuantitySelector";

type TProps = {
  price: number;
  rating: number;
  name: string;
};

const ProductDetailsCard = (props: TProps) => {
  const updateCart = () => {};
  return (
    <Card
      variant="outlined"
      sx={{ borderRadius: "18px", width: "460px", p: 4, height: "auto" }}
    >
      <Stack spacing={4}>
        <Typography variant="h4" fontWeight="bold">
          {props.name}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          <Rating rating={props.rating} />
          <Typography variant="h6" fontWeight="bold">
            ${props.price}
          </Typography>
        </Stack>
        <Stack width="100%" direction="row" justifyContent="space-between">
          <QuantitySelector />
          <StyledButton
            onClick={() => updateCart()}
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
