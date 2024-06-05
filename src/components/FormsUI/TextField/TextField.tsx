import {
  TextField as TextFieldMui,
  TextFieldProps,
  styled,
} from "@mui/material";
import { useField } from "formik";
type TProps = {
  name: string;
  [key: string]: any;
};

const StyledTextField = styled(TextFieldMui)<TextFieldProps>((_) => ({
  borderRadius: 12,
}));

function TextField({ name, ...props }: TProps) {
  const [field, metaData] = useField(name);
  const configTextField: TextFieldProps = {
    ...props,
    ...field,
    fullWidth: true,
    variant: "outlined",
    size: "small",
  };
  if (metaData?.touched && metaData.error) {
    configTextField.error = true;
    configTextField.helperText = metaData.error;
  }
  return <StyledTextField {...configTextField} />;
}

export default TextField;
