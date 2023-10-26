import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import suiteOne from '../../assets/images/suit-one.jpg';
import "./HomePage.css";
function HomePage() {
  return <Box padding="10px">
    <Box
      sx={{
        // background: 'linear-gradient(to right bottom, #6482aecc, #021d46cc), ' + `url(${storeFront})`,
        // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 60% 75% ,50% 85%, 40% 75%, 0 100%)',
        background: `url(${suiteOne})`,
        borderRadius: '10px',
        backgroundSize: "cover",
        height: '80vh',
        color: 'white',
        padding: '10px'
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
