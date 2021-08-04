import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Service from './Service';
import ServicesList from './ServicesList';

const Services = () => (
    <Switch>
        <Route exact path='/services' component={ServicesList}/>
        <Route path='/services/:id' component={Service}/>
    </Switch>
);

export default Services;
