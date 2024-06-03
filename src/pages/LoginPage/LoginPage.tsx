import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Divider, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import TextField from "../../components/FormsUI/TextField";

import "./LoginPage.css";
import useAppDispatch from "../../shared/utils/customHooks/useAppDispatch";
import { loginUser } from "../../store/authenticationSlice";

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
    <Stack
      className="page"
      maxWidth="440px"
      mt={4}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={LOGIN_VALIDATIONS}
        onSubmit={login}
      >
        <Form>
          <Stack maxWidth="100vw" spacing={4}>
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
            <Button type="submit" variant="contained">
              LogIn
            </Button>
            <Divider>
              <Typography variant="body2">OR</Typography>
            </Divider>
            <Typography>
              New user? <Link to="/register">Sign up</Link>
            </Typography>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  );
}

export default LoginPage;
