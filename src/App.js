import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button } from '@material-ui/core';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#20232a',
    },
    secondary: {
      main: '#61dafb',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "20px",
    },
    h2: {
      fontSize: "14px",
      fontWeight: 700,
      lineHeight: "42px",
      letterSpacing: "0.08em"
    },
    h3: {
      fontSize: "16px",
      lineHeight: "32px",
    },
    h4: {
      fontSize: "60px",
      fontWeight: 700,
      lineHeight: "65px",
    },
  },
});

export const WeatherContext = React.createContext();

function CityDialog() {
  const [weather, setWeather] = useContext(WeatherContext);
  const { t } = useTranslation();

  let cityInput = React.createRef();
  
  const handleClose = () => {
    setWeather({ ...weather, dialogOpen: false });
  };
  
  const handleClick = () => {
    setWeather({ ...weather, city: cityInput.value, dialogOpen: false });
  };

  return(
    <Dialog open={weather.dialogOpen} onClose={handleClose}>
      <DialogTitle>{ weather.dialogTitle }</DialogTitle>
      <DialogContent>
          <DialogContentText>{ t('dialogText') }</DialogContentText>
          <TextField type="text" id="city" inputRef={ ref => cityInput = ref } label={ t('dialogLabel') } margin="dense" fullWidth autoFocus />
      </DialogContent>
      <DialogActions>
          <Button onClick={handleClose} color="primary">{ t('dialogButtonCancel') }</Button>
          <Button onClick={handleClick} color="primary">{ t('dialogButtonSend') }</Button>
      </DialogActions>
    </Dialog>
  );
}

function App() {
  const weatherState = useState({
    condition: 'Sun',
    city: '',
    citySearched: '',
    rain: 'no',
    dialogOpen: false,
    dialogTitle: 'Erro ao determinar a localização'
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <WeatherContext.Provider value={weatherState}>
          <Header />
          <Routes />
          <CityDialog />
          <Footer />
        </WeatherContext.Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
