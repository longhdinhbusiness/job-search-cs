import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

export default function SignInForm({
  loginOpen,
  handleClose,
  isLogin,
  setIsLogin,
  setCardOpen,
  loginSource,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    if (data.username === 'Long Hoang Dinh' && data.password === '12345678') {
      setIsLogin(true);
      localStorage.setItem('isLogin', 'true');
      alert('Successful Login!');
      handleClose();

      if (loginSource) {
        setCardOpen(true);
      }

      navigate('/');
    } else {
      alert('Invalid Credentials');
    }
    console.log(isLogin);
  };

  useEffect(() => {
    setValue('username', 'Long Hoang Dinh');
    setValue('password', '12345678');
  }, [setValue]);

  const handleClickSignUp = () => {
    alert("You've Signed Up!");
    handleClose();
  };

  const handleClickForgotPassword = () => {
    alert("You've recovered your password!");
    handleClose();
  };

  return (
    <Dialog
      open={loginOpen}
      onClose={() => {
        handleClose();
        navigate('/');
      }}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'center' }}>
        Login
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: '80%' }}>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="text"
            variant="outlined"
            {...register('username', {
              required: 'Username is required',
              minLength: {
                value: 8,
                message: 'minimum username length is 8 characters',
              },
            })}
            error={errors.username}
            helperText={errors.username ? errors.username.message : ''}
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="outlined"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'minimum password length is 8 characters',
              },
            })}
            error={errors.password}
            helperText={errors.password ? errors.password.message : ''}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <DialogActions>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                width: '100%',
                gap: 2,
                marginBottom: 2,
                marginTop: 0,
              }}
            >
              <Button
                type="submit"
                sx={{
                  width: '75%',
                  backgroundColor: 'limegreen',
                  alignSelf: 'center',
                  color: 'ivory',
                  fontWeight: 'bold',
                  letterSpacing: 2,
                  fontSize: '0.9rem',
                }}
                color="primary"
              >
                LOGIN
              </Button>

              <Button
                onClick={() => {
                  handleClose();
                  navigate('/');
                }}
                color="primary"
                sx={{
                  width: '75%',
                  backgroundColor: 'firebrick',
                  alignSelf: 'center',
                  color: 'floralwhite',
                  fontSize: '0.8rem',
                  letterSpacing: 1,
                  fontWeight: 'bold',
                }}
              >
                CANCEL
              </Button>
            </Box>
          </DialogActions>
        </form>
      </DialogContent>

      <DialogActions>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            gap: 2,
            margin: 2,
            marginTop: 0,
            marginBottom: 1,
          }}
        >
          <Button
            color="inherit"
            sx={{ fontWeight: 'bold' }}
            onClick={handleClickForgotPassword}
          >
            Forgot Password?
          </Button>
          <Button
            color="inherit"
            sx={{ fontWeight: 'bold' }}
            onClick={handleClickSignUp}
          >
            Sign Up
          </Button>
        </Box>
      </DialogActions>
    </Dialog>
  );
}
