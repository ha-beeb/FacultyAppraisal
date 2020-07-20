import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import '../App/App.css';
import Main from './login/main';

const jumborton = () =>{
    return(
        <BrowserRouter>
        <Jumbotron >
            <h3>
                Muffakham Jah College of Engineering and Technology 
            </h3>
            <h1>
                Annual Faculty Performance Appraisal
            </h1>
            <p>
                The purpose of the Annual Performance Appraisal is to provide <br />
                a process of evaluating each faculty member based on<br /> 
                his/her individual combination of professional activities 
            </p>
            <p>
                <Button variant="dark" onClick={Main.js}>Log In</Button>
            </p>
        </Jumbotron>
        </BrowserRouter>
            
    )
};

export default jumborton