import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import suitOne from "../../assets/images/suit-one.jpg";
import suitTwo from "../../assets/images/suit-two.jpg";
import suitThree from "../../assets/images/suit-three.jpg";

import "./HomePage.css";
import Carousel from "react-material-ui-carousel";
function HomePage() {
  return (
    <Box className="page">
      <Carousel>
        <Box
          sx={{
            background: `url(${suitTwo})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "80vh",
            color: "white",
          }}
        >
          <Grid container height="100%" columns={{ xs: 12 }}>
            <Grid height="100%" item xs={6}>
              <Stack
                height="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="space-evenly"
                >
                  <Typography fontWeight="700" variant="h2">
                    Branded Clothing
                  </Typography>
                  <Typography fontWeight="600" variant="h4">
                    Upto 50% off
                  </Typography>
                  <Button variant="contained" size="large" color="error">
                    <Typography variant="h6">Shop Now</Typography>
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: `url(${suitThree})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "80vh",
            color: "white",
          }}
        >
          <Grid container height="100%" columns={{ xs: 12 }}>
            <Grid height="100%" item xs={6}>
              <Stack
                height="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="space-evenly"
                >
                  <Typography fontWeight="700" variant="h2">
                    Branded Watches
                  </Typography>
                  <Typography fontWeight="600" variant="h4">
                    Upto 30% off
                  </Typography>
                  <Button variant="contained" size="large" color="error">
                    <Typography variant="h6">Shop Now</Typography>
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: `url(${suitOne})`,
            backgroundSize: "cover",
            borderRadius: "10px",
            height: "80vh",
            color: "white",
          }}
        >
          <Grid container height="100%" columns={{ xs: 12 }}>
            <Grid height="100%" item xs={6}>
              <Stack
                height="100%"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Stack
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="space-evenly"
                >
                  <Typography fontWeight="700" color="#4B5563" variant="h6">
                    Starting from $49.99
                  </Typography>
                  <Typography color="#111827" fontWeight="600" variant="h4">
                    Exclusive collection for everyone
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{ backgroundColor: "#111827", borderRadius: "40px" }}
                  >
                    <Typography variant="h6">Explore Now</Typography>
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Carousel>
    </Box>
  );
}

export default HomePage;
