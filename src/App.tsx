import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <BrowserRouter>
            {/*<Route path={'/hello'} component={}/>*/}
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <Profile/>
            </div>
        </BrowserRouter>
    );
}

export default App;
