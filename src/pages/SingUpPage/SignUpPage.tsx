import { Form, Formik } from "formik";
import * as yup from "yup";
import { Box, Button, Card, Grid, Stack } from "@mui/material";

import TextField from "../../components/FormsUI/TextField";
import { Link } from "react-router-dom";
import "./SignUpPage.css";
function SignUpPage() {
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
  const LOGIN_VALIDATIONS = yup.object().shape({
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
  return (
      <Box
        sx={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="page"
      >
        <Card variant="outlined" sx={{ padding: "60px 40px", width: "300px" }}>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={LOGIN_VALIDATIONS}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            <Form>
              <Grid container spacing={5} direction="column">
                <Grid item>
                  <TextField name="email" label="Email" />
                </Grid>
                <Grid item>
                  <TextField name="password" type="password" label="Password" />
                </Grid>
                <Grid item>
                  <TextField
                    name="confirmPassword"
                    type="password"
                    label="Confirm Password"
                  />
                </Grid>
                <Grid item>
                  <Stack>
                    <Button type="submit" variant="contained">
                      SignUp
                    </Button>
                  </Stack>
                </Grid>
                <Grid item>
                  Already a user? <Link to="/login">Log In</Link>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Card>
      </Box>
  );
}

export default SignUpPage;
