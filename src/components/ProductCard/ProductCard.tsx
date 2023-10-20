import { Button, Card, Grid, Rating, Typography } from "@mui/material"

import './ProductCard.css'
import { TProduct } from "../../shared/types/productTypes"

function ProductCard({ name, description, images, price, rating }: TProduct) {
	return (
		<Card className="product-card" variant="outlined">
			<Grid container spacing={3} justifyContent='space-between'>
				<Grid xs={12} textAlign='center' item>
					<img
						src={images?.[0]}
						alt={name}
						className="product-card__image"
					/>
				</Grid>
				<Grid xs={12} spacing={3} item>
					<Grid xs={12} item>
						<Typography variant="h6" className="truncate-text">{name}</Typography>
					</Grid>
					<Grid xs={12} item>
						<Typography variant="body2" color="#939393" className="truncate-text">{description}</Typography>
					</Grid>
					<Grid xs={12} container>
						<Grid xs={6} item>
							<Typography variant="h5" fontWeight='600'>$ {price}</Typography>
						</Grid>
						<Grid xs={6} textAlign='right' item>
							<Typography variant="subtitle2" color='green'>Rating: {rating}<Rating value={rating} size="small" precision={0.1} readOnly /></Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button fullWidth onClick={e => e.stopPropagation()} className="product-card__add" sx={{backgroundColor: '#50cccc', ':hover': {backgroundColor: '#3c9e9e'} }} variant="contained">Add to cart</Button>
				</Grid>
			</Grid>
		</Card>
	)
}

export default ProductCard