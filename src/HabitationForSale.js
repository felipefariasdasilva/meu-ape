import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AspectRatio from '@material-ui/icons/AspectRatio'
import SingleBed from '@material-ui/icons/SingleBed'
import DriveEta from "@material-ui/icons/DriveEta"
import MyImage from './casa-escrivaninha.jpg'
import Bathhub from '@material-ui/icons/Bathtub'

export default function HabitationForSale() {

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          marginTop: "2%",
          marginRight: "2%",
          marginLeft: "2%",
          marginBottom: "2%",
        },
        details: {
          display: 'flex',
          flexDirection: 'column',
        },
        content: {
          flex: '1 0 auto',
        },
        cover: {
          width: 151,
        },
        controls: {
          display: 'flex',
          alignItems: 'center',
          paddingLeft: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        },
        playIcon: {
          height: 38,
          width: 38,
        },
      }));

    const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
        <CardMedia
            className={classes.cover}
            image={MyImage}
            title="Live from space album cover"
        />
          
          <Typography component="h5" variant="h5">
            R$100.000
          </Typography>
          
          <Typography variant="subtitle1" color="textSecondary">
            Condominio:
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            IPTU:
          </Typography>

        </CardContent>
        <div className={classes.controls}>
            
          <IconButton aria-label="square">
            <AspectRatio/> 
            <label>120 m²</label>
          </IconButton>

          <IconButton aria-label="bed">
            <SingleBed />
            <label>3</label>
          </IconButton>
          
          <IconButton aria-label="car">
            <DriveEta/>
            <label>1</label>
          </IconButton>

          <IconButton aria-label="bathroom">
            <Bathhub/>
            <label>2</label>
          </IconButton>

        </div>
      </div>
      
    </Card>
  );
}
