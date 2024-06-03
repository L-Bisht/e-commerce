import { Form, Formik } from "formik";
import * as yup from "yup";
import { Button, Card, Divider, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import TextField from "../../components/FormsUI/TextField";

type TSignUpFormSchema = {
  email: string;
  password: string;
  confirmPassword: string;
};
const INITIAL_FORM_STATE: TSignUpFormSchema = {
  email: "",
  password: "",
  confirmPassword: "",
};
const SIGNUP_VALIDATIONS = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("Please re-enter your password"),
});

function SignUpPage() {
  return (
    <Stack pt={3} pb={8} alignItems="center">
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={SIGNUP_VALIDATIONS}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Stack width="440px" spacing={4} alignItems="center">
            <Typography fontWeight="bold" variant="h4">
              Register
            </Typography>
            <TextField name="email" label="Email" />
            <TextField name="password" type="password" label="Password" />
            <TextField
              name="confirmPassword"
              type="password"
              label="Confirm Password"
            />
            <Button fullWidth type="submit" variant="contained">
              SignUp
            </Button>
            <Divider flexItem>
              <Typography variant="body2">OR</Typography>
            </Divider>
            <Stack direction="row" spacing={0.5}>
              <Typography>Already a member?</Typography>
              <Link style={{ textDecoration: "none" }} to="/login">
                <Typography color="#0EA5E9">Log In</Typography>
              </Link>
            </Stack>
          </Stack>
        </Form>
      </Formik>
    </Stack>
  );
}

export default SignUpPage;
