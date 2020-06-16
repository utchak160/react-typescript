import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import MainNavigation from "../components/Shared/Header/MainNavigation/MainNavigation";
import {Users} from "../components/Users/pages/Users/Users";

const routes = () => {
    return (
        <Router>
            <MainNavigation/>
            <main>
                <Switch>
                    <Route exact path="/">
                        <Users/>
                    </Route>
                    <Redirect to="/" />
                </Switch>
            </main>
        </Router>
    )
};

export default routes;
