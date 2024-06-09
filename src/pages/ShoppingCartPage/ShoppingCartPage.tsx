import { Box, Card, Divider, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import CartItem from "../../components/CartItem";
import { cartsSelector } from "../../store/cartSlice";

function ShoppingCartPage() {
  const currentCart = useSelector(cartsSelector)?.[0];
  return (
    <Box className="page" padding="80px">
      <Card variant="outlined" sx={{ height: "100%", borderRadius: "30px" }}>
        <Grid height="100%" container>
          <Grid item sm={12} md={9}>
            <Box height="100%" padding="50px">
              <Typography variant="h4">Shopping Cart</Typography>
              <Box>
                {currentCart.products?.map((cartItem, i, allItems) => (
                  <>
                    <CartItem key={cartItem.id} item={cartItem} />
                    {i < allItems.length - 1 && <Divider variant="fullWidth" />}
                  </>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={3}>
            <Box height="100%" bgcolor="#eafbfe" padding="50px">
              <Typography variant="h4">Order Details</Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}

export default ShoppingCartPage;
