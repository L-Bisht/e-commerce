import { TextField as TextFieldMui, TextFieldProps } from "@mui/material";
import { useField } from "formik";
type TProps = {
  name: string;
  [key: string]: any;
};
function TextField({ name, ...props }: TProps) {
  const [field, metaData] = useField(name);
  const configTextField: TextFieldProps = {
    ...props,
    ...field,
    fullWidth: true,
    variant: "outlined",
  };
  if (metaData?.touched && metaData.error) {
    configTextField.error = true;
    configTextField.helperText = metaData.error;
  }
  return <TextFieldMui {...configTextField} />;
}

export default TextField;
