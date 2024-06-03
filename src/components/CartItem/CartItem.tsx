import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { TCartProduct } from "../../store/cartSlice";
import ItemCounter from "../ItemCounter/ItemCounter";

type TProps = {
  item: TCartProduct;
};

const CartItem = (props: TProps) => {
  return (
    <Stack
      height="100%"
      padding="10px"
      width="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box height="100%">
            <img height="60px" src={props.item.thumbnail} />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">{props.item.title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <ItemCounter count={2} setCount={(n) => console.log(n)} />
        </Grid>
        <Grid item xs={2}>
          <Typography variant="h6">{`$${props.item.discountedPrice}`}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="text" color="error">
            Delete
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CartItem;
