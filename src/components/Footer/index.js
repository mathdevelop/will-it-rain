import React from 'react';
import { useTranslation } from 'react-i18next';
import { makeStyles, Box, Container, Grid, Typography, Link } from '@material-ui/core';
import './styles.css';
import logo from './logo.svg';

const useStyles = makeStyles(theme => ({
    title: {
        lineHeight: '36px',
    },
    link: {
        '&:hover': {
            color: theme.palette.secondary.main,
        },
    },
}));

export default function Footer() {
    const { t } = useTranslation();
    const classes = useStyles();

    return (
        <footer>
            <Box py={7.5} bgcolor="primary.main">
                <Container fixed>
                    <Grid container>
                        <Grid container item xs={12} sm={4}>
                            <Typography className={classes.title} variant="h1" component="span">{ t('created') }</Typography>
                            <img src={logo} className="logo" alt="" />
                        </Grid>
                        <Grid container item xs={12} sm={4} direction="column">
                            <Typography variant="h2">{ t('modules') }</Typography>
                            <Link className={classes.link} href="https://github.com/facebook/react" variant="h3" underline="none" color="inherit">React</Link>
                            <Link className={classes.link} href="https://github.com/axios/axios" variant="h3" underline="none" color="inherit">axios</Link>
                            <Link className={classes.link} href="https://github.com/i18next/i18next/" variant="h3" underline="none" color="inherit">i18next</Link>
                            <Link className={classes.link} href="https://github.com/ReactTraining/react-router" variant="h3" underline="none" color="inherit">React Router</Link>
                            <Link className={classes.link} href="https://github.com/mui-org/material-ui" variant="h3" underline="none" color="inherit">Material-UI</Link>
                        </Grid>
                        <Grid container item xs={12} sm={4} direction="column">
                            <Typography variant="h2">Links</Typography>
                            <Link className={classes.link} href="https://www.facebook.com/mathdevelop" variant="h3" underline="none" color="inherit">Facebook</Link>
                            <Link className={classes.link} href="https://www.linkedin.com/in/matheus-alves-681364165/" variant="h3" underline="none" color="inherit">LinkedIn</Link>
                            <Link className={classes.link} href="https://github.com/mathdevelop" variant="h3" underline="none" color="inherit">GitHub</Link>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}