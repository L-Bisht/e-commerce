import { IconButton, InputBase, Paper } from "@mui/material";
import { ChangeEvent, FormEvent } from "react";
import SearchIcon from "@mui/icons-material/Search";

type TProps = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchBar = ({ value, onChange, onSubmit }: TProps) => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        width: 400,
        borderRadius: "40px",
        paddingLeft: "15px",
      }}
      onSubmit={onSubmit}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search products"
        inputProps={{ "aria-label": "search products in store" }}
        value={value}
        // onChange={(e: ChangeEvent<HTMLInputElement>) =>
        //   setSearchText(e.target.value)
        // }
        onChange={onChange}
      />
      <IconButton
        type="submit"
        sx={{ p: "5px", color: "#011627" }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
