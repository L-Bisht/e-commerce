import { Card, Stack, Typography } from "@mui/material";
import Rating from "../Rating/Rating";
import StyledButton from "../FormsUI/StyledButton/StyledButton";

type TProps = {
  price: number;
  rating: number;
  name: string;
};

const ProductDetailsCard = (props: TProps) => {
  return (
    <Card variant="outlined" sx={{ width: "460px", p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Rating rating={props.rating || 4} />
        <Typography variant="h6" fontWeight="bold">
          ${props.price}
        </Typography>
      </Stack>
      <Typography variant="h4" fontWeight="bold">
        {props.name}
      </Typography>
      <StyledButton variant="contained">Add to cart</StyledButton>
    </Card>
  );
};

export default ProductDetailsCard;
