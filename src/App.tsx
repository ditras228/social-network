import './App.css';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/LoginContainer";
import React, {Component} from "react";
import {initializeApp} from "./redux/app-reducer";
import {connect} from "react-redux";
import Fetch from "./components/Common/Fetch/Fetch";
import {withSuspense} from "./components/hoc/withSupsense";
import {UsersContainer} from "./components/Users/UsersContainer";
import {AppStateType} from "./redux/redux-store";
import {ChatPage} from "./components/Chat/ChatPage";

const SuspendedDialogs  = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

type DispatchPropsType ={
    initializeApp: ()=> void
    initialized: boolean
}
class App extends Component<typeof mapStateToProps & DispatchPropsType> {
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
                        <Route path='/profile/:userId?' render={() => <SuspendedProfile/>}/>
                        <Route path='/dialogs' render={() => <SuspendedDialogs/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/logIn' render={() => <LoginContainer />}/>
                        <Route path='/chat' render={() => <ChatPage />}/>
                        <Route path='*' render={() => <div>404</div>}/>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>

        );
    }
}
let mapStateToProps=(state: AppStateType)=>({
    initialized: state.app.initialized
})  
export default connect(mapStateToProps, {initializeApp})(App);
