import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link as RouterLink } from 'react-router-dom';
import { WeatherContext } from '../../App.js';
import { makeStyles, AppBar, Toolbar, Typography, Link, Button, Menu, MenuItem, IconButton } from '@material-ui/core';
import TranslateIcon from '@material-ui/icons/Translate';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import './styles.css';
import { ReactComponent as Sun } from './sun.svg';
import { ReactComponent as Sunny } from './sunny.svg';
import { ReactComponent as Rain } from './rain.svg';

const useStyles = makeStyles(theme => ({
    container: {
        flexWrap: "wrap",
    },
    title: {
      flexGrow: 1,
      textTransform: "capitalize",
    },
    link: {
        margin: theme.spacing(1.5),
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
    button: {
        margin: theme.spacing(1.5),
    },
}));

export default function Header() {
    const [weather, setWeather] = useContext(WeatherContext);
    const { t, i18n } = useTranslation();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleCity = () => {
        setWeather({ ...weather, citySearched: '', dialogOpen: true, dialogTitle: t('dialogTitle') });
    };

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const capitalize = string => string.replace(/(?:^|\s)\S/g, char => char.toUpperCase());

    const changeLanguage = language => {
        handleClose();

        i18n.changeLanguage(language);

        document.title = capitalize(t('title')) + '?';
    };

    return (
        <AppBar position="static">
            <Toolbar className={classes.container}>
                { weather.condition === 'Sun' && <Sun /> }
                { weather.condition === 'Sunny' && <Sunny /> }
                { weather.condition === 'Rain' && <Rain /> }
                <Typography variant="h1" color="secondary" className={classes.title}>{ t('title') }?</Typography>
                <Link className={classes.link} component={RouterLink} to="/" variant="h3" underline="none" color="inherit">{ t('home') }</Link>
                <Link className={classes.link} component={RouterLink} to="/projeto" variant="h3" underline="none" color="inherit">{ t('project') }</Link>
                <Link className={classes.link} component={RouterLink} to="/sobre" variant="h3" underline="none" color="inherit">{ t('about') }</Link>
                <Button variant="contained" color="secondary" className={classes.button} onClick={handleCity}>{ t('dialogTitle') }</Button>
                <Button color="inherit" onClick={handleClick} startIcon={<TranslateIcon />} endIcon={<ExpandMoreIcon />}>{ t('name') }</Button>
                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => changeLanguage('en')} selected={i18n.language === 'en' ? true : false}>English</MenuItem>
                    <MenuItem onClick={() => changeLanguage('pt')} selected={i18n.language === 'pt' ? true : false}>Português</MenuItem>
                </Menu>
                <IconButton color="inherit" href="https://github.com/mathdevelop">
                    <GitHubIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}