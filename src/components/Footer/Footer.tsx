import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const FOOTER_DATA = [
  {
    id: 1,
    title: "Getting started",
    subItems: ["Release Note", "Upgrade Guide", "Browser Support", "Dark Mode"],
  },
  {
    id: 2,
    title: "Explore",
    subItems: ["Prototyping", "Design systems", "Pricing", "Security"],
  },
  {
    id: 3,
    title: "Community",
    subItems: [
      "Discussion Forums",
      "Code of Conduct",
      "Contributing",
      "API Reference",
    ],
  },
];

const socialIcons = [
  { name: "Facebook", icon: <FacebookIcon htmlColor="#4267B2" /> },
  { name: "YouTube", icon: <YouTubeIcon htmlColor="#FF0000" /> },
  { name: "Twitter", icon: <TwitterIcon htmlColor="#1DA1F2" /> },
  { name: "Instagram", icon: <InstagramIcon htmlColor="#E1306C" /> },
];

const Footer = () => {
  return (
    <Box bgcolor="primary.main" color="white" width="100%">
      <Stack width="100%">
        <Grid width="100%" px={12} py={6} container rowGap={3} columnGap={3}>
          <Grid item xs={12} sm={2.5}>
            <Stack spacing={1}>
              <Typography>eCommerce</Typography>
              {socialIcons.map(({ name, icon }) => (
                <Stack direction="row" spacing={2} key={name}>
                  {icon}
                  <Typography>{name}</Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>
          {FOOTER_DATA.map((item) => (
            <Grid item key={item.id} xs={12} sm={2.5}>
              <Stack spacing={1}>
                <Typography>{item.title}</Typography>
                {item.subItems.map((item) => (
                  <Typography key={item} color="gray">
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ backgroundColor: "#E7E7E7" }} flexItem />
        <Stack px={12} py={3} direction="row">
          <Typography variant="body1" color="A8A8">
            e-Commerce. © 2024
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
