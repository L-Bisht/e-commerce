import { Stack, Typography } from "@mui/material";
import GradeIcon from "@mui/icons-material/Grade";

type TProps = {
  rating: number | undefined;
};

const Rating = (props: TProps) => {
  return (
    <Stack direction="row" spacing={0.25} alignItems="center">
      <GradeIcon color="warning" fontSize="small" />
      <Typography variant="body2" color="gray">
        {props.rating}
      </Typography>
    </Stack>
  );
};

export default Rating;
