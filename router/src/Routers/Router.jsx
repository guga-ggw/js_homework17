import React from 'react';
import Main from '../Components/Main';
import About from '../Components/About';
import Layout from '../Layout/Layout';
import Paramex from '../Paramex/Paramex';
import { useState } from 'react';

const Router = [
    {
        element: <Layout/>,
        path : "",
        children : [
            {
                element: <Main />,
                index: true
            },
            {
                element: <About/>,
                path:'/about'
            }
        ]
    },
    {
        element : <Paramex/>,
        path: ":fact",
        
    }
];

export default Router;