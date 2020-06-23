import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ChooseCard from './ChooseCard';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function App() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Header />
      <ChooseCard />
    </div>
  )
}
