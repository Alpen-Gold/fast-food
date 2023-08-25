import * as React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  ImageListItem,
  TextField,
  Typography,
  useThemeProps,
} from "@mui/material";

// Component
import imgLogin from "../img/3390.png";
import { grey, red } from "@mui/material/colors";

// Data
// import { ordersData } from "./data/ordersData";
// import { ContextApi } from "./context/context";

function _LoginPage(props) {
  let [loginEmail, setLoginEmail] = useState("");
  let [loginPassword, setLoginPassword] = useState("");

  let changeLogin = (name, value) => {
    if (name === "password") {
      setLoginPassword(value);
    }

    console.log(value);

    if (name === "email") {
      setLoginEmail(value);
    }
  };

  let sabmitLogin = () => {
    if (loginPassword === "12345") {
      props.setAdminActivated(true);
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={imgLogin}
          style={{ height: "100vh", minWidth: "60vw", objectFit: "cover" }}
          alt=""
        />

        <Box
          sx={{
            textAlign: "start ",
            bgcolor: "#EDEFF3",
            minHeight: "100vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">Tizimga xush kelibsiz !</Typography>

          <Typography
            sx={{ maxWidth: "350px", color: grey[500], marginTop: "10px" }}
          >
            Tizimga kirish uchun, login va parol orqali autentifikatsiya
            jarayonidan o’ting
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                minWidth: "300px",
                bgcolor: "white",
                padding: "5px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                mt: "50px",
                mb: "30px",
                borderRadius: "6px",
                boxShadow: "0px 20px 25px 0px rgba(176, 177, 181, 0.43)",
                "& #outlined-basic": {
                  padding: "10px 0",
                  paddingLeft: "10px",
                  "&:focus": {
                    borderLeft: "3.5px solid rgba(252, 182, 0, 1)",
                  },
                },

                "& .MuiTextField-root": {
                  paddingLeft: "40px",
                  padding: "7px",
                },
              }}
            >
              <TextField
                id="outlined-basic"
                label="E-email"
                variant="standard"
                name="email"
                value={loginEmail}
                onChange={(e) => changeLogin(e.target.name, e.target.value)}
                sx={{
                  minWidth: "100%",
                  "& #outlined-basic-label": {
                    left: "20px",
                    top: "15px",
                  },
                  "& .MuiInputLabel-shrink": {
                    top: "10px",
                    left: "20px",
                    color: "rgba(47, 47, 47, 0.8)",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Parol"
                variant="standard"
                name="password"
                type="password"
                value={loginPassword}
                onChange={(e) => changeLogin(e.target.name, e.target.value)}
                placeholder="Password:12345"
                sx={{
                  minWidth: "100%",
                  "& #outlined-basic-label": {
                    left: "20px",
                    top: "15px",
                  },
                  "& .MuiInputLabel-shrink": {
                    top: "10px",
                    left: "20px",
                    color: "rgba(47, 47, 47, 0.8)",
                  },
                }}
              />
            </Box>
            <button className="btn-login" onClick={sabmitLogin}>
              Tizimga kirish
            </button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default _LoginPage;
