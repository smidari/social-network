import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter} from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";

const App = () => (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <MyNavbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/news' component={Dialogs}/>
                <Route path='/music' component={Dialogs}/>
                <Route path='/settings' component={Dialogs}/>
                <Route path='/users' render={() => <UsersContainer/>} />
            </div>
        </div>
    </BrowserRouter>
);


export default App;
