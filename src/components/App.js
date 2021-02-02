import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../assets/styles/Main.scss";
import 'bootstrap';
import NavBar from './NavBar';
import Hero from './Hero';
import AboutMe from './AboutMe';

function App() {
    return (
    <div>
        <NavBar />
        <Hero />
        <AboutMe />
    </div>
    );
}

export default App;