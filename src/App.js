import './App.css';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/LoginContainer";
import React from "react";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Fetch from "./components/Common/Fetch/Fetch";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {

        if(!this.props.initialized) {
            return (<Fetch/>)

        }
        else
        return (

            <BrowserRouter>

                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <div className="app-wrapper-content">
                        <Switch>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/logIn' render={() => <Login/>}/>
                        <Route path='*' render={() => <div>404</div>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
let mapStateToProps=(state)=>({
    initialized: state.app.initialized
})
export default connect(mapStateToProps, {initializeApp})(App);
