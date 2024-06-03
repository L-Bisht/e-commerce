import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box minHeight="100vh">
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
