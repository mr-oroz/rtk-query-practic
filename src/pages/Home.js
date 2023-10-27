import React, { useEffect } from "react";
import { authApi } from "../services/auth-api";
import { setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const { data: user } = authApi.useGetMeQuery("");

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(user);
    if (user) {
      dispatch(setUser(user.user))
    } 
  }, [user, dispatch]);

  return <div>Home</div>;
};

export default Home;
