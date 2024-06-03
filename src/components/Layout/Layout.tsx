import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Box, CssBaseline } from "@mui/material";

const Layout = () => {
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "grid",
          gridTemplateRows: "80px 1fr 414px",
          minHeight: "100vh",
        }}
      >
        <Header />
        <Box pt={4} pb={8} pl={10} pr={10} sx={{ overflowY: "auto" }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
