import React, { Component } from 'react';
import { Route } from 'react-router'

// The Todo Container Component
import Excursions from './containers/Excursions/Excursions';
import Login from './containers/Login/Login';


// The Routing Component providing all the routing Configuration

const Routes = (props) => {
    return (
        <div>
            <Route path="/excursions" component={Excursions} />
            <Route path="/login" component={Login} />
        </div>
    )
}

export { Routes }