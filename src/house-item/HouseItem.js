import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AspectRatio from '@material-ui/icons/AspectRatio'
import SingleBed from '@material-ui/icons/SingleBed'
import DriveEta from "@material-ui/icons/DriveEta"
import Bathhub from '@material-ui/icons/Bathtub'
import { ButtonBase, CardMedia } from '@material-ui/core';
import house from '../fake-data/house1.json'
import { useHistory } from 'react-router-dom';
import './style.css'

export default function HouseItem(){

    const history = useHistory()

    const handleClick = () =>{
      history.push("/sales-detail")
    }

    return(
        <Card className="div-card-list">
            <ButtonBase onClick={handleClick}>

                <CardContent className="div-card-list-content">

                <CardMedia
                    className="div-card-list-content-image"
                    component="img"
                    alt="casa"
                    title="casaaaa"
                    image={require('../assets/casa-escrivaninha.jpg')}
                />

                <div className="div-title">
                    <h2>Apartamento com 2 Quartos à Venda</h2>
                </div>

                <div className="div-price">
                    <Typography component="h5" variant="h5">
                    R$ {house.price}
                    </Typography>
                </div>
                
                <div className="div-otherprice">
                    <Typography variant="subtitle1" color="textSecondary">
                    Condominio: R$ {house.condominio}
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                    IPTU: R$ {house.iptu}
                    </Typography>
                </div>
                
                <div className="div-complements">
                    <IconButton aria-label="square">
                        <AspectRatio/> 
                        <label>{house.square} m²</label>
                    </IconButton>

                    <IconButton aria-label="bed">
                        <SingleBed />
                        <label>{house.beds}</label>
                    </IconButton>
                    
                    <IconButton aria-label="car">
                        <DriveEta/>
                        <label>{house.car}</label>
                    </IconButton>

                    <IconButton aria-label="bathroom">
                        <Bathhub/>
                        <label>{house.bathroom}</label>
                    </IconButton>
                </div>

            </CardContent>

        </ButtonBase>

    </Card>
    )
}