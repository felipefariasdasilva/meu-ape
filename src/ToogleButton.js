import React from 'react';
import {
    Typography,
    Switch,
    Grid
} from '@material-ui/core';

import {withStyles} from '@material-ui/core/styles';
import './App.css';

export default function ToogleButton() {

    const AntSwitch = withStyles((theme) => ({
        root: {
            width: 28,
            height: 16,
            padding: 0,
            display: 'flex'
        },
        switchBase: {
            padding: 2,
            color: theme.palette.grey[500],
            '&$checked': {
                transform: 'translateX(12px)',
                color: theme.palette.common.white,
                '& + $track': {
                    opacity: 1,
                    backgroundColor: theme.palette.primary.main,
                    borderColor: theme.palette.primary.main
                }
            }
        },
        thumb: {
            width: 12,
            height: 12,
            boxShadow: 'none'
        },
        track: {
            border: `1px solid ${
                theme.palette.grey[500]
            }`,
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: theme.palette.common.white
        },
        checked: {}
    }))(Switch);

    const [state, setState] = React.useState({checkedA: true, checkedB: true, checkedC: true});

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    return (

        <Typography component="div">
            <label>O que você procura?</label>
            <Grid component="label" container alignItems="center"
                spacing={1}>
                <Grid item>Alugar</Grid>
                <Grid item>
                    <AntSwitch checked={
                            state.checkedC
                        }
                        onChange={handleChange}
                        name="checkedC"/>
                </Grid>
                <Grid item>Comprar</Grid>
            </Grid>
        </Typography>

    )
}
