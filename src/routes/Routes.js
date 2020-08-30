import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HabitationForSale from '../HabitationForSale';
import ChooseCard from '../choose-card/ChooseCard';
import HabitationForSaleDetail from '../HabitationForSaleDetail';

export default function Routes() {

    return (
        <Router>

            <Switch>
                <Route path="/sales"component={HabitationForSale}/>
                <Route path="/sales-detail" component={HabitationForSaleDetail}/>
                <Route exact={true}  path="/" component={ChooseCard}/>
            </Switch>

        </Router>
    )
}
