import React, { useEffect } from "react";
import { authApi } from "../services/auth-api";
import { setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  
  const [getMe, {data: user}] = authApi.useLazyGetMeQuery()

  const dispatch = useDispatch();

  useEffect(() => {
    getMe()
    if (user) {
      dispatch(setUser(user.user))
    } 
  }, [getMe, dispatch, user]);

  return <div>Home</div>;
};

export default Home;
