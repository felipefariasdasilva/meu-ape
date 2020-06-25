import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ChooseCard from './ChooseCard';
import Header from './Header';
import imagemFundo from './assets/casa-room.jpg'
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
        <div className={
            classes.root
        }>
            <Header/>
            
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </div>

    )
}
