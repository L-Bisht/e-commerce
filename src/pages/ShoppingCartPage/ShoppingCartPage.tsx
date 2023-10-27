import { Box, Card, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import "./ShoppingCartPage.css";
import {  useSelector } from "react-redux";
import { TRootState } from "../../store/store";
import CartItem from "../../components/CartItem";

function ShoppingCartPage() {
  const currentCart = useSelector((state: TRootState) => state.cart.allCarts?.[0] || {});
  return <Box className='page' padding='80px'>
    <Card variant="outlined" sx={{ height: '100%', borderRadius: '30px' }}>
      <Grid height='100%' container>
        <Grid item sm={12} md={9} >
          <Box height='100%' padding='50px'>
            <Typography variant='h4'>Shopping Cart</Typography>
            <List>
              {currentCart.products?.map((cartItem, i, allItems) => (
                <>
                  <ListItem alignItems="flex-start">
                    <CartItem item={cartItem} />
                  </ListItem>
                  {(i < (allItems.length - 1)) && <Divider variant="fullWidth" component='li' />}
                </>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item sm={12} md={3} >
          <Box height='100%' bgcolor='#eafbfe' padding='50px'>
            <Typography variant='h4'>Order Details</Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>;
}

export default ShoppingCartPage;
