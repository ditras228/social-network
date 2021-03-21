import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {addPost} from "./redux/state";
const App = (props) => {

    return (
        <BrowserRouter>

        <div className="app-wrapper">
            <Header/>
            <Nav/>

            <div className="app-wrapper-content">
                <Route path='/profile' render={()=> <Profile state={props.state.profilePage} addPost={addPost}/>}/>
                <Route path='/dialogs' render={()=> <Dialogs  state={props.state.dialogsPage}/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
