import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar, 
  Toolbar, 
  Typography,
  Button, 
  IconButton,
  Card, 
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  cardRoot: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));


export default function App() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Meu Apê
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Card className={classes.cardRoot} variant="outlined">
        <CardContent>
          
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            Encontre o imóvel perfeito para você!
          </Typography>
          
          

        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>

      </Card>
    </div>
  )
}
