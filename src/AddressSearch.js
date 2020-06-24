import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
}));

export default function AddressSearch() {
    const classes = useStyles();
    return (
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Escreva uma cidade ou bairro" variant="outlined" />
      </form>
    )
}
