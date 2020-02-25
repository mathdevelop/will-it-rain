import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { WeatherContext } from '../../App.js';
import api from '../../api.js';
import './styles.css';
import './termynal.css';
import Termynal from './termynal.js';
import { ReactComponent as Sun } from './sun.svg';
import { ReactComponent as Sunny } from './sunny.svg';
import { ReactComponent as Rain } from './rain.svg';

function Container(props) {
    const { t } = useTranslation();

    useEffect(() => {
        if(props.weather.citySearched) {
            new Termynal('#container',
                {
                    lineData: [
                        { type: 'input', value: `${ t('title') } ${ t('in') } ${ props.weather.citySearched } ?` },
                        { type: 'progress' },
                        { value: t(props.weather.rain) }
                    ]
                }
            );
        }
    }, [t, props.weather.citySearched]);

    return (
        <div id="container" data-termynal></div>
    );
}

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Home() {
    const { t } = useTranslation();
    const [weather, setWeather] = useContext(WeatherContext);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if(reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const fetchData = async (params) => {
        var param;

        if(typeof params === 'object') {
            const { latitude, longitude } = params;
            param = `lat=${ latitude }&lon=${ longitude }`;
        } else {
            param = `q=${ params }`;
        }

        try {
            const response = await api.get(`/weather?${ param }&appid=614fb2c2723dd2574a79ac4ba76112c9`); // axios 0.19.2 (params not working)

            const data = response.data;

            const id = data.weather[0].id.toString(),
                  citySearched = data.name;

            var condition = 'Sun', 
                rain = 'yes';

            if(id === '800') {
                rain = 'no';
            } else if(id.substr(0, 1) === '5') {
                condition = 'Rain';
            } else if(id.substr(0, 2) === '80') {
                condition = 'Sunny';
            }

            setWeather({ ...weather, condition, citySearched, rain });
        } catch(error) {
            setWeather({ ...weather, condition: 'Sun', citySearched: '', rain: 'no' });

            handleOpen();
        }
    };

    useEffect(() => {
        if(!weather.city) {
            if(navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    fetchData(position.coords);
                }, error => {
                    //User not authorized
                    setWeather({ ...weather, citySearched: '', dialogOpen: true });
                });
            } else {
                //Browser doesn't support
                setWeather({ ...weather, citySearched: '', dialogOpen: true });
            }
        }
    }, []);

    useEffect(() => {
        if(weather.city && !weather.citySearched) {
            fetchData(weather.city);
        }
    }, [weather.city]);

    return (
        <main id="home">
            { weather.condition === 'Sun' && <Sun /> }
            { weather.condition === 'Sunny' && <Sunny /> }
            { weather.condition === 'Rain' && <Rain /> }
            <Container weather={weather} />
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">{ t('alert') }</Alert>
            </Snackbar>
        </main>
    );
}