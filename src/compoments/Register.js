import React from 'react';
import MyModal from './MyModal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { toggleRegisterModal, toggleLoginModal } from '../redux/slices/authSlice';
import { Typography } from '@mui/material';

const Register = () => {
  const dispatch = useDispatch();
  const { openRegister } = useSelector(state => state.auth)
  return (
    <MyModal
      handleClose={() => dispatch(toggleRegisterModal(false))}
      open={openRegister}>
      <Typography sx={{textAlign: 'center'}} variant='h4' component='div'>
        Регистрация
      </Typography>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Регистрация</Button>
        <Button onClick={() => dispatch(toggleLoginModal(true))} variant="outlined">Если есть аккаунт?</Button>
      </form>
    </MyModal>
  );
};

export default Register;