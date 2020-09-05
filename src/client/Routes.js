import React from 'react';
import { Route } from 'react-router-dom';
import Home from './compoents/Home';
import UsersList from './compoents/UsersList'; 

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/users" component={UsersList}/>
        </div>
    );
};