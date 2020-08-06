import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import {Route, BrowserRouter} from "react-router-dom";
import MyNavbar from "./components/MyNavbar/MyNavbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppType = {
    // state: RootStateType
    // dispatch: (action: ActionsType) => void
    store: any
}

const App: React.FC<AppType> = props => (
    <BrowserRouter>
        <div className='app-wrapper'>
            <Header/>
            <MyNavbar/>
            <div className='app-wrapper-content'>
                <Route
                    path='/profile'
                    render={() => <Profile store={props.store}/>}
                />
                <Route path='/dialogs' render={() =>
                    <DialogsContainer store={props.store}/>}/>
                <Route path='/news' component={Dialogs}/>
                <Route path='/music' component={Dialogs}/>
                <Route path='/settings' component={Dialogs}/>
            </div>
        </div>
    </BrowserRouter>
);


export default App;
