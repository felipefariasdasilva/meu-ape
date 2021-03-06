import React from 'react';
import {
    Card,
    Button,
    IconButton,
    Grid,
    Box,
    makeStyles
} from '@material-ui/core';
import AspectRatio from '@material-ui/icons/AspectRatio'
import SingleBed from '@material-ui/icons/SingleBed'
import DriveEta from "@material-ui/icons/DriveEta"
import Bathhub from '@material-ui/icons/Bathtub'

import HabitationMap from './HabitationMap';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    buttonCol: {
        margin: "2%"
    },
    theButton: {
        margin: "1%"
    }

}));

export default function HabitationForSaleDetail() {
    const classes = useStyles()

    return (
        <div>
            <Grid>
                <center>
                    <img height="600px" width="100%"
                        src={
                            require('./assets/casa-room.jpg')
                        }
                        alt="sala-de-casa"/>
                </center>
            </Grid>

            <Grid>
                <h1>Apartamento com 2 Quartos à Venda, 50 m² por R$ 190.000</h1>
                <label>Vila Antônio Augusto Luiz, Caçapava - SP VER NO MAPA</label>
            </Grid>

            <Grid>
                <IconButton aria-label="square">
                    <AspectRatio/>
                    <label>120 m²</label>
                </IconButton>

                <IconButton aria-label="bed">
                    <SingleBed/>
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
            </Grid>

            <Grid container
                spacing={3}>
                <Grid item
                    xs={6}>
                    <label>Apartamento Residencial Paris</label>
                    <span>
                        Edifício Paris , Excelente localização próximo ao Supermercado Carrefour , Hospital da Cidade , farmácias e de escolas como Damasco , Objetivo, Mater Dei, Map
                                                
                                                                    ✔ Apartamento de 50 m² com 2 dormitórios (com sacada com peitoril em alumínio e vidro laminado);
                                                                    ✔ Piso em porcelanato na sala e nos quartos;
                                                                    ✔ Ar condicionado na suíte e na sala de TV/Jantar;
                                                                    ✔ Caso o cliente prefira , entregamos com Móveis planejados por arquiteta em todos os ambientes (cozinha, banheiros, quartos, sala);
                                                                    ✔ 1 vaga de garagem.
                    </span>
                </Grid>

                <Grid item
                    xs={6}>
                    <Card>
                        <div>
                            <label>ANUNCIANTE</label>
                        </div>
                        <div>
                            <label>Felipe Farias</label>
                        </div>


                        <Box display="flex" flexDirection="column"
                            className={
                                classes.buttonCol
                        }>

                            <Button className={
                                    classes.theButton
                                }
                                variant="contained"
                                color="primary">
                                Contato por WhatApp
                            </Button>

                            <Button className={
                                    classes.theButton
                                }
                                variant="contained"
                                color="secondary">
                                Quero visitar
                            </Button>

                            <Button className={
                                    classes.theButton
                                }
                                variant="contained">
                                Quero mais informações
                            </Button>
                        </Box>


                        <label>Telefone</label>

                    </Card>
                </Grid>
            </Grid>

            <h2>Onde fica?</h2>
            <HabitationMap />
            
        </div>
    );
}
