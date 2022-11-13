import React from 'react';
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Visualiser from './Visualiser'
import Error from './Error'
const Navlink = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/Visualiser' element={<Visualiser/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
            
            <Route path='/*' element={<Error/>}></Route>
            
        </Routes>
    );
}
export default Navlink ;