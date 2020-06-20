import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import MainNavigation from "../components/Shared/Header/MainNavigation/MainNavigation";
import Places from "../components/Places/pages/Places/Places";
import AddPlace from "../components/Places/pages/AddPlace/AddPlace";
import UpdatePlace from "../components/Places/pages/UpdatePlace/UpdatePlace";
import MapBox from "../components/Shared/Map/Map";
import Auth from "../components/Users/pages/Auth/Auth";
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
                    <Route exact path="/:userId/place">
                        <Places/>
                    </Route>
                    <Route exact path="/places">
                        <Places/>
                    </Route>
                    <Route exact path="/place/map/:lng/:lat">
                        <MapBox/>
                    </Route>
                    <Route exact path="/place/new">
                        <AddPlace/>
                    </Route>
                    <Route exact path="/place/:placeId">
                        <UpdatePlace/>
                    </Route>
                    <Route exact path="/user/auth">
                        <Auth/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </main>
        </Router>
    )
};

export default routes;
