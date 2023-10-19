import { Box, Typography } from "@mui/material";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div
      className="page home-page"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography component="div" variant="h1">
        <Box fontWeight='700' display='inline' fontSize='200px' sx={{ textShadow: '12px 6px #adadab' }}>404</Box>
      </Typography>
      <Typography sx={{ textShadow: '3px 3px #adadab' }} variant="h2">
        Not Found
      </Typography>
    </div>
  );
}

export default NotFoundPage;
