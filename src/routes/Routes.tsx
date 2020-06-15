import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import {UserItem} from '../components/Users/components/UserItem/UserItem';
import {UserList} from '../components/Users/components/UserList/UserList';

const routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <UserItem/>
                </Route>
                <Route exact path="/users/list">
                    <UserList/>
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    )
};

export default routes;
