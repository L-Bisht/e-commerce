import { Box, Grid, Stack, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

import suitOne from "../../assets/images/suit-one.jpg";
import suitTwo from "../../assets/images/suit-two.jpg";
import suitThree from "../../assets/images/suit-three.jpg";
import StyledButton from "../../components/FormsUI/StyledButton/StyledButton";

function HomePage() {
  return (
    <Box mt={-4} ml={-10} mr={-10}>
      <Carousel>
        <Box
          sx={{
            background: `url(${suitTwo})`,
            backgroundSize: "cover",
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
                  <StyledButton variant="contained" size="large">
                    <Typography variant="h6">Shop Now</Typography>
                  </StyledButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: `url(${suitThree})`,
            backgroundSize: "cover",
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
                  <StyledButton
                    variant="contained"
                    size="large"
                    color="secondary"
                  >
                    <Typography variant="h6">Shop Now</Typography>
                  </StyledButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            background: `url(${suitOne})`,
            backgroundSize: "cover",
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
                  <StyledButton variant="contained" size="large">
                    <Typography variant="h6">Explore Now</Typography>
                  </StyledButton>
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
