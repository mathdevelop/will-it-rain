import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Container, Typography, Avatar, IconButton } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import './styles.css';
import Matheus from './Matheus.jpg';

const useStyles = makeStyles(theme => ({
    large: {
        width: "150px",
        height: "150px",
    },
}));

export default function About() {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <main id="about">
            <Container fixed>
                <Typography component="h3">{ t('about') }</Typography>
                <Avatar alt="Matheus" src={ Matheus } className={ classes.large } />
                <Typography component="p">Matheus Alves</Typography>
                <Typography component="span"><strong>{ t('aboutSubtitle') } - Marília/SP</strong></Typography>
                <Typography component="span">{ t('aboutDescription') }</Typography>
                <hr></hr>
                <IconButton color="inherit" href="https://www.facebook.com/mathdevelop">
                    <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://www.linkedin.com/in/matheus-alves-681364165/">
                    <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" href="https://github.com/mathdevelop">
                    <GitHubIcon />
                </IconButton>
            </Container>
        </main>
    );
}