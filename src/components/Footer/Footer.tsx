import { Box, Divider, Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box width="100%">
      <Stack width="100%" divider={<Divider />}>
        <Stack></Stack>
        <Stack p={2} direction="row">
          <Typography variant="body1" color="A8A8">
            e-Commerce. © 2024
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
