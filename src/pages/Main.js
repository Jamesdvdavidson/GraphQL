import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/services' component={Services}/>
            <Route path='/about' component={About}/>
        </Switch>
    </main>
);

export default Main;
