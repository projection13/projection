import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './header';
import Home from './home';
import Contact from './contact';
import About from './about';

const Main = ()=>{
    return <>
        <BrowserRouter>
        <Header /> 
        <Routes>

        <Route exact path='/' Component={Home} />    
        <Route exact path='/about' Component={About} />    
        <Route exact path='/contact' Component={Contact} />    
        </Routes>
        
        </BrowserRouter>
    </>
};

export default Main;

// https://github.com/projection13/projection.git