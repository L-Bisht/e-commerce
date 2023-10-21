import { Form, Formik } from "formik";
import * as yup from "yup";
import { Box, Button, Card, Grid, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import TextField from "../../components/FormsUI/TextField";
import { authenticationActions } from "../../store/authentication";

import "./LoginPage.css";

type TLoginFormSchema = {
  username: string;
  password: string;
};
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const INITIAL_FORM_STATE: TLoginFormSchema = { username: "", password: "" };
  const LOGIN_VALIDATIONS = yup.object().shape({
    username: yup
      .string()
      .min(3, 'Username must contain 3 or more letters')
      .required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  });
  const login = (values: TLoginFormSchema) => {
    const url = new URL('https://dummyjson.com/auth/login');
    axios.post(url.toString(), {
      ...values
    }).then(res => res.data)
      .then(data => {
        dispatch(authenticationActions.login({ access_token: `Bearer ${data.token}`, userData: {...data} }));
        navigate('/');
      })
      .catch(console.log);
  }
  return (
    <Box
      className="page"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card variant="outlined" sx={{ padding: "40px 40px", width: "300px" }}>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={LOGIN_VALIDATIONS}
          onSubmit={login}
        >
          <Form>
            <Grid container spacing={4} direction="column">
              <Grid item>
                <Stack alignItems="center">
                  <Typography fontWeight='500' variant="h4">Login</Typography>
                </Stack>
              </Grid>
              <Grid item>
                <TextField name="username" label="Username" />
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
              <Grid item>
                <Typography>
                  Not a user? <Link to="/register">Sign up</Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Formik>
      </Card>
    </Box>
  );
}

export default LoginPage;
