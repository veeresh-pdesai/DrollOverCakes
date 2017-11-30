import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar';
import CakeList from './components/cakelist';

ReactDOM.render(
        <div>
        <NavBar></NavBar>
        <CakeList></CakeList>
        </div>
    
    , document.getElementById('root'));
