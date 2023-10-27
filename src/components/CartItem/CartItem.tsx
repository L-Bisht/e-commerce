import { Box, Button, Grid, Typography } from "@mui/material";
import { TCartProduct } from "../../store/cart";

type TProps = {
    item: TCartProduct;
}

const CartItem = (props: TProps) => {
    return <Box height='100px' padding='10px' width='100%'>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <img width="100%" height="100%" src={props.item.thumbnail} />
            </Grid>
            <Grid item xs={4}>
                <Typography variant='h6'>{props.item.title}</Typography>
            </Grid>
            <Grid item xs={3}>
                {`$${props.item.discountedPrice}`}
            </Grid>
            <Grid item xs={3}>
                <Button variant="text">Delete</Button>
            </Grid>
        </Grid>
    </Box>
}

export default CartItem;