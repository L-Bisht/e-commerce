import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

import { TProduct } from "../../shared/types/productTypes";

type TProps = TProduct & {
  handleClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

function ProductCard({
  name,
  images,
  price,
  rating,
  handleClick,
  category,
}: TProps) {
  return (
    <Card sx={{ borderRadius: "8px", minWidth: "300px" }} variant="outlined">
      <CardActionArea
        onClick={handleClick}
        sx={{ pt: "12px", pl: "12px", pr: "12px" }}
      >
        <CardMedia
          component="img"
          height="300"
          sizes="cover"
          image={images?.[0]}
          alt={name}
        />
        <CardContent>
          <Stack spacing={2}>
            <Stack minWidth={0} direction="row" spacing={1}>
              <Stack minWidth={0} width="100%" direction="column" spacing={0.5}>
                <Typography noWrap fontWeight="bold" variant="body1">
                  {name}
                </Typography>
                <Typography noWrap variant="body2" color="gray">
                  {category}
                </Typography>
              </Stack>
              <Typography fontWeight="bold" variant="body1">
                ${price}
              </Typography>
            </Stack>
            <Stack direction="row" spacing={0.25} alignItems="center">
              <GradeIcon color="warning" fontSize="small" />
              <Typography variant="body2" color="gray">
                {rating}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;
