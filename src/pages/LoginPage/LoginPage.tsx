import { Form, Formik } from "formik";
import * as yup from "yup";
import { Divider, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import TextField from "../../components/FormsUI/TextField";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";
import { loginUser } from "../../store/authenticationSlice";
import StyledButton from "../../components/FormsUI/StyledButton/StyledButton";

type TLoginFormSchema = {
  username: string;
  password: string;
};

const INITIAL_FORM_STATE: TLoginFormSchema = { username: "", password: "" };
const LOGIN_VALIDATIONS = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must contain 3 or more letters")
    .required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const login = (values: TLoginFormSchema) => {
    const payload = {
      username: values.username,
      password: values.password,
    };
    dispatch(loginUser(payload));
    navigate("/");
  };
  return (
    <Stack alignItems="center">
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={LOGIN_VALIDATIONS}
        onSubmit={login}
      >
        <Form>
          <Stack width="440px" spacing={4} alignItems="center">
            <Typography fontWeight="bold" variant="h4">
              Login
            </Typography>
            <TextField name="username" label="Username" />
            <TextField
              fullWidth
              name="password"
              type="password"
              label="Password"
            />
            <StyledButton fullWidth type="submit" variant="contained">
              Continue
            </StyledButton>
            <Divider flexItem>
              <Typography variant="body2">OR</Typography>
            </Divider>
            <Stack direction="row" spacing={0.5}>
              <Typography>New user? </Typography>
              <Link style={{ textDecoration: "none" }} to="/register">
                <Typography color="#0EA5E9">Create an account</Typography>
              </Link>
            </Stack>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  );
}

export default LoginPage;
