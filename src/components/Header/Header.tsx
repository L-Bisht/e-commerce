import "./Header.css";
import { TRootState } from "../../store";
import LoginMenu from "../LoginMenu";

import { FormEvent, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  IconButton,
  Button,
  Badge,
  AppBar,
  Toolbar,
  Typography,
  Stack,
  ButtonBase,
} from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import SearchBar from "../SearchBar";

function Header() {
  const [searchText, setSearchText] = useState<string>("");
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: TRootState) => state.authentication?.isAuthenticated
  );
  const cartItemCount = useSelector(
    (state: TRootState) => state.cart.allCarts?.find(Boolean)?.products?.length
  );
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate({
      pathname: "/products",
      search: createSearchParams({
        query: searchText,
      }).toString(),
    });
  };
  return (
    <AppBar
      variant="elevation"
      position="sticky"
      style={{ background: "secondary.main", color: "#fff" }}
    >
      <Toolbar>
        <Stack
          p={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <ButtonBase onClick={() => navigate("/")}>
            <Typography variant="h4" fontWeight="700">
              eCommerce
              <Typography variant="inherit" color="error" display="inline">
                .
              </Typography>
            </Typography>
          </ButtonBase>
          <SearchBar
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onSubmit={handleSearch}
          />
          <Stack direction="row" alignItems="center">
            {isAuthenticated ? (
              <>
                <IconButton
                  onClick={() => navigate("/shopping-cart")}
                  type="button"
                  sx={{ p: "10px", color: "#F6F7F8" }}
                  aria-label="shopping cart"
                >
                  <Badge badgeContent={cartItemCount} color="primary">
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
                <LoginMenu />
              </>
            ) : (
              <Button
                onClick={() => navigate("/login")}
                color="error"
                variant="contained"
              >
                Log in
              </Button>
            )}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
