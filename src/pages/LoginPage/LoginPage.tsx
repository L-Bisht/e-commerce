import { Form, Formik } from "formik";
import * as yup from "yup";
import { Box, Button, Card, Grid, Stack } from "@mui/material";

import TextField from "../../components/FormsUI/TextField";

import "./LoginPage.css";

type TLoginFormSchema = {
  email: string;
  password: string;
};
const INITIAL_FORM_STATE: TLoginFormSchema = { email: "", password: "" };
const LOGIN_VALIDATIONS = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter your email"),
  password: yup.string().required("Please enter your password"),
});
function LoginPage() {
  return (
    <div className="page">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
                  <Stack>
                    <Button type="submit" variant="contained">
                      LogIn
                    </Button>
                  </Stack>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Card>
      </Box>
    </div>
  );
}

export default LoginPage;
