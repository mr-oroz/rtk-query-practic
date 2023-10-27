import React, { useState } from "react";
import MyModal from "./MyModal";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import {
  setUser,
  toggleLoginModal,
  toggleRegisterModal,
} from "../redux/slices/authSlice";
import { Typography } from "@mui/material";
import { authApi } from "../services/auth-api";
import { useNavigate } from "react-router-dom";

// хранилищи браузер
import Cookies from "js-cookie";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, isError }] = authApi.useLoginMutation();
  const [getMe, {data: userData}] = authApi.useLazyGetMeQuery();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { openLogin } = useSelector((state) => state.auth);

  const handleLogin = async () => {
    try {
      const response = await login({ username, password }).unwrap();
      Cookies.set("token-dastan", response.token, {
        secure: true,
      });
      getMe();
      dispatch(setUser(userData?.user));
      dispatch(toggleLoginModal(false));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MyModal
      handleClose={() => dispatch(toggleLoginModal(false))}
      open={openLogin}
    >
      <Typography sx={{ textAlign: "center" }} variant="h4" component="div">
        Войти
      </Typography>
      <form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField
          error={isError}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          id="standard-error-helper-text"
          helperText={isError && "Username неверный"}
          label="Username"
          variant="outlined"
        />
        <TextField
          error={isError}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="standard-error-helper-text"
          helperText={isError && "Пароль неверный"}
          label="Password"
          variant="outlined"
        />
        <Button onClick={handleLogin} variant="contained">
          {isLoading ? "Загрузка..." : "Войти"}
        </Button>
        <Button
          onClick={() => dispatch(toggleRegisterModal(true))}
          variant="outlined"
        >
          Если нет аккаунт?
        </Button>
      </form>
    </MyModal>
  );
};

export default Login;
