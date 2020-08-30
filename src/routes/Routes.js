import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import ChooseCard from '../choose-card/ChooseCard';
import HabitationForSaleDetail from '../HabitationForSaleDetail';
import HabitationForSale from '../house-list/HabitationForSale';
import MainContainer from '../containers/MainContainer'

export default function Routes() {

    return (
        <Router>
            <MainContainer>
                <Switch>
                    <Route path="/sales"component={HabitationForSale}/>
                    <Route path="/sales-detail" component={HabitationForSaleDetail}/>
                    <Route exact={true}  path="/" component={ChooseCard}/>
                </Switch>
            </MainContainer>
        </Router>
    )
}
