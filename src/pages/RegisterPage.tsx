import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

const RegisterPage = () => {
  React.useEffect(() => {
    document.title = "Register";
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "85vh", marginBottom: "0px" }}>
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "25px" }}>
          {/* Register form */}
          <RegisterForm />
          <Stack spacing={0.5} direction="row" useFlexGap flexWrap="wrap" justifyContent={"center"} marginTop={"16px"}>
            <Typography>Already have an account?</Typography>
            <Link to={"/login"} style={{ textDecoration: "none", color: "#0074D9" }}>
              Login
            </Link>
          </Stack>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
