import React, { useState, useEffect } from 'react';
import { Button, Container } from '@mui/material';
import SearchAppBar from './components/SearchAppBar';
import DisplayJobs from './components/DisplayJobs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import SignInForm from './components/SignInForm';
import CenteredCard from './components/IndividualJobCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const [cardOpen, setCardOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [loginSource, setLoginSource] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const loginStatus = localStorage.getItem('isLogin');
    if (loginStatus === 'true') {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  const handleClickOpen = () => {
    setLoginOpen(true);
  };

  const handleClose = () => {
    setLoginOpen(false);
  };

  const handleLogOut = () => {
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar
          handleClickOpen={handleClickOpen}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setLoginSource={setLoginSource}
          handleLogOut={handleLogOut}
          setSearchQuery={setSearchQuery}
        />
        <Container maxWidth="xl">
          <Routes>
            <Route
              path="/"
              element={
                <DisplayJobs
                  setLoginOpen={setLoginOpen}
                  isLogin={isLogin}
                  setCardOpen={setCardOpen}
                  setSelectedJob={setSelectedJob}
                  setLoginSource={setLoginSource}
                  searchQuery={searchQuery}
                />
              }
            />

            <Route
              path="/login"
              element={
                <SignInForm
                  setCardOpen={setCardOpen}
                  loginOpen={loginOpen}
                  handleClose={handleClose}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  loginSource={loginSource}
                />
              }
            />
          </Routes>
        </Container>

        <Button
          sx={{
            position: 'fixed',
            bottom: 12,
            left: 12,
            fontSize: 12,
            paddingX: 1,
          }}
          variant="contained"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? 'LIGHT' : 'DARK'}
        </Button>

        <CenteredCard
          cardOpen={cardOpen}
          setCardOpen={setCardOpen}
          selectedJob={selectedJob}
        />
      </ThemeProvider>
    </Router>
  );
};

export default App;
