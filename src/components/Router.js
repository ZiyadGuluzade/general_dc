import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import About from '../components/about/About';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ App } />
                <Route exact path='/about' component={ About } />
            </Switch>
        </BrowserRouter>
        )
    }

export default Router;