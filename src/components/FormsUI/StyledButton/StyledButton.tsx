import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)<ButtonProps>((_) => ({
  borderRadius: 9999,
  textTransform: "none",
}));

export default StyledButton;
