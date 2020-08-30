import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Header from './Header';
import Routes from './Routes';
import {BrowserRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));


export default function App() {
    const classes = useStyles();


    return (
        <div>
            homeeee
        </div>

    )
}
