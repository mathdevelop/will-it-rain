import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography } from '@material-ui/core';
import './styles.css';

export default function Project() {
    const { t } = useTranslation();

    return (
        <main id="project">
            <Container fixed>
                <Typography component="h3">{ t('project') }</Typography>
                <Typography component="p">{ t('projectSubtitle') }</Typography>
                <Typography component="span"><strong>{ t('title') }</strong> { t('projectDescription') }</Typography>
                <hr></hr>
                <ul>
                    <Typography component="li">React</Typography>
                    <Typography component="li">React Hooks</Typography>
                    <Typography component="li">Context API</Typography>
                    <Typography component="li">{ t('projectAPI') }</Typography>
                    <Typography component="li">{ t('projectInternationalization') }</Typography>
                    <Typography component="li">{ t('projectRouting') }</Typography>
                    <Typography component="li">Material Design (Material-UI)</Typography>
                </ul>
            </Container>
        </main>
    );
}