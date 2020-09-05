import React from 'react';
import Home from './compoents/Home';
import UsersList, { loadData } from './compoents/UsersList'; 

export default [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        loadData,
        path: '/users',
        component: UsersList
    }
]