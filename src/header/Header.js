import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
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
    }
}));



export default function Header() {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start"
                    className={
                        classes.menuButton
                    }
                    color="inherit"
                    aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6"
                    className={
                        classes.title
                }>
                   <Link to="/" style={{ textDecoration: "none" }}>
                        <h3 style={{ color: "white" }}>Meu Apê</h3>
                   </Link> 
                </Typography>
                <Button color="inherit">Anuncie aqui</Button>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
