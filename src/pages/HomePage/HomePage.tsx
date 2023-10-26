import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import suiteOne from '../../assets/images/suit-one.jpg';
import "./HomePage.css";
function HomePage() {
  return <Box className="page">
    <Box
      sx={{
        background: `url(${suiteOne})`,
        backgroundSize: "cover",
        borderRadius: '10px',
        height: '80vh',
        color: 'white',
      }}>
      <Grid container height='100%' columns={{xs: 12}}>
        <Grid height='100%' item xs={6}>
          <Stack height='100%' flexDirection='column' alignItems='center' justifyContent='center'>
            <Typography variant="h2">Branded Shirts</Typography>
            <Typography variant="h3">Upto 50% off</Typography>
            <Button variant="contained" size="large" color="error">Shop Now</Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  </Box>;
}

export default HomePage;
