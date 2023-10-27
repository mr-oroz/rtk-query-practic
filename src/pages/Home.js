import React, { useCallback, useEffect } from "react";
import { authApi } from "../services/auth-api";
import { setUser } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";
const Home = () => {
  const [getMe, { data: user }] = authApi.useLazyGetMeQuery();

  const load = useCallback(async () => {
    await getMe();
  }, [getMe]);

  const dispatch = useDispatch();

  useEffect(() => {
    load()
    if (user) {
      dispatch(setUser(user.user));
    }
  }, [load, dispatch, user]);

  return <div>Home</div>;
};

export default Home;
