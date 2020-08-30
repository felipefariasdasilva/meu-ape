import React from 'react';
import {Button, Card, CardHeader} from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ToogleButton from '../ToogleButton';
import HabitationList from '../HabitationList'
import AddressSearch from '../AddressSearch'
import { useHistory } from 'react-router-dom';
import backgroundImage from '../assets/casa-room.jpg'
import './style.css'



export default function ChooseCard() {
    const history = useHistory()

    function handleClick(){
        history.push("/sales")
    }

    return (
        <div style={{ position: "relative" }}>
        <img src={backgroundImage} alt="casa" className="div-image"/>
            
            <Card className="div-card">
            
            <CardHeader title="Encontre o imóvel perfeito para você"/>

            <CardContent className="div-card-content">
    
                <ToogleButton/>
            
                <HabitationList/>
            
                <AddressSearch/>
            
                <CardActions>
                    <Button onClick={handleClick} variant="contained" color="primary">Buscar</Button>
                </CardActions>


            </CardContent>


        </Card>
        </div>
        
    )
}
