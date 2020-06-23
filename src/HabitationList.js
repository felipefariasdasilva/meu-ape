import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    }
}));

export default function HabitationList() {

    const classes = useStyles();
    const [habitations, setHabitation] = React.useState([
        "Apartamento",
        "Studio",
        "Kitnet",
        "Casa",
        "Casa de Condomínio",
        "Casa de Vila",
        "Cobertura",
        "Flat",
        "Loft",
        "Terreno / Lote / Condomínio",
        "Fazenda / Sítio / Chácara",
        "Loja / Salão / Ponto Comercial",
        "Conjunto Comercial / Sala",
        "Casa Comercial",
        "Hotel / Motel / Pousada",
        "Andar / Laje Corporativa",
        "Prédio Inteiro",
        "Terrenos / Lotes Comerciais",
        "Galpão / Depósito / Armazém",
        "Garagem"
    ]);
    const [selectedHabitation, setSelectedHabitation] = React.useState('')

    const handleChange = (event) => {
        console.log(
            event.target.value
        );
        setSelectedHabitation(event.target.value);
    };

    const handleSelect = (event) => {
        console.log(
            event.target.value
        );
        setSelectedHabitation(event.target.value);
    };

    return (
        <FormControl className={
            classes.formControl
        }>
            <InputLabel id="demo-simple-select-label">Habitation</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select"
                value={selectedHabitation}
                onChange={handleChange}>
                {
                habitations.map(habitation => (
                    <MenuItem onSelected={handleSelect} >{habitation}</MenuItem>
                ))
            } </Select>
        </FormControl>
    )
}
