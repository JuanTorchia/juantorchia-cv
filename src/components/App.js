import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "../assets/styles/Main.scss";
import 'bootstrap';
import NavBar from './NavBar';
import Hero from './Hero';
import AboutMe from './AboutMe';
import Speciality from './Speciality';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
    <div>
        <NavBar />
        <Hero />
        <AboutMe />
        <Speciality />
        <Portfolio />
        <Contact />
        <Footer />
    </div>
    );
}

export default App;