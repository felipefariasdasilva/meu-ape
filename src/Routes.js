import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import HabitationForSale from './HabitationForSale';
import ChooseCard from './ChooseCard';
import App from './App';

export default function Routes() {

    return (
        <Router>

            <Switch>
            <Route exact path="/"
                    component={ChooseCard}/>
                <Route path="/sales"
                    component={HabitationForSale}/>
                
            </Switch>

        </Router>
    )
}
