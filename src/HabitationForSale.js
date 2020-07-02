import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AspectRatio from '@material-ui/icons/AspectRatio'
import SingleBed from '@material-ui/icons/SingleBed'
import DriveEta from "@material-ui/icons/DriveEta"
import Bathhub from '@material-ui/icons/Bathtub'
import { ButtonBase, Grid } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


export default function HabitationForSale() {
    const history = useHistory()
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

  const handleClick = () =>{
    history.push("/sales-detail")
  }

  return (
    <Card className={classes.root}>
      <ButtonBase   
           onClick={handleClick}
      >
      <div className={classes.details}>
        <CardContent className={classes.content}>
        
        <Grid container spacing={3}>

          <Grid>
            <img height="200px" src={require('./assets/casa-room.jpg')} alt="sala-de-casa"/>
          </Grid>

          <Grid>
            <Typography component="h5" variant="h5">
              R$100.000
            </Typography>
            
            <Typography variant="subtitle1" color="textSecondary">
              Condominio: R$360
            </Typography>

            <Typography variant="subtitle1" color="textSecondary">
              IPTU: R$200
            </Typography>

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
        
          </Grid>


        </Grid>

        </CardContent>
      </div>
      </ButtonBase>
    </Card>
  );
}
