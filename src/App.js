import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import SearchAppBar from './components/SearchAppBar';
import DisplayJobs from './components/DisplayJobs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <Container maxWidth="xl">
          <DisplayJobs />
        </Container>
        <Button
          sx={{
            position: 'fixed',
            bottom: 12,
            left: 12,
          }}
          variant="contained"
          onClick={() => setDarkMode(!darkMode)}
        >
          Toggle {darkMode ? 'LIGHT' : 'DARK'}
        </Button>
      </ThemeProvider>
    </>
  );
};

export default App;
