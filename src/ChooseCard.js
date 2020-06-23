import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Typography,
    Button,
    Card
} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './App.css';
import ToogleButton from './ToogleButton';
import HabitationList from './HabitationList'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: "10% 10% 10% 10%"
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize: 14,
    },
    cardRoot: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    pos: {
      marginBottom: 12,
    },
  }));

export default function ChooseCard() {
    const classes = useStyles();

    return (
        <Card className={
                classes.cardRoot
            }
            variant="outlined">
            <CardContent>

                <Typography className={
                        classes.title
                    }
                    color="textSecondary"
                    gutterBottom>
                    Encontre o imóvel perfeito para você!
                </Typography>

                <ToogleButton />
                <HabitationList />

            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    )
}
