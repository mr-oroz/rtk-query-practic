import React from 'react';
import { authApi } from '../services/auth-api';

const Home = () => {
  const {data} = authApi.useGetMeQuery('');
  return (
    <div>
      Home
    </div>
  );
};

export default Home;