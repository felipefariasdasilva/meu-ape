import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Typography, Button, Card, Grid} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import ToogleButton from './ToogleButton';
import HabitationList from './HabitationList'
import AddressSearch from './AddressSearch'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: "15%"

    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        fontSize: 14
    },
    cardRoot: {
        minWidth: 275
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    pos: {
        marginBottom: 12
    },
    gridroot: {
        flexGrow: 1
    },
    gridcomp: {
        marginLeft: 5
    }
}));

export default function ChooseCard() {
    const classes = useStyles();

    return (
        <Card className={
                classes.root
            }
            variant="outlined">
            <CardContent>

                <center>
                    <Typography className={
                            classes.title
                        }
                        color="textSecondary"
                        gutterBottom>
                        <h1>
                            Encontre o imóvel perfeito para você!
                        </h1>
                    </Typography>
                </center>

                <Grid container
                    className={
                        classes.gridroot
                    }
                    spacing={2}>
                    <Grid item
                        xs={12}>

                        <Grid className={
                                classes.gridcomp
                            }
                            container
                            justify="center"
                            spacing={2}>

                            <Grid item
                                xs={3}>
                                <ToogleButton/>
                            </Grid>

                            <Grid item
                                xs={3}>
                                <HabitationList/>
                            </Grid>

                            <Grid item
                                xs={3}>
                                <AddressSearch/>
                            </Grid>

                            <Grid item
                                xs={3}>
                                <CardActions>
                                    <Button variant="contained" color="primary">Buscar</Button>
                                </CardActions>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </CardContent>


        </Card>
    )
}
