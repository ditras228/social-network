import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
const App = (props) => {
    return (

        <BrowserRouter>

        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path='/profile' render={()=><Profile/>}/>
                <Route path='/dialogs' render={()=> <DialogsContainer/>}/>
            </div>
        </div>
        </BrowserRouter>
    );
}

export default App;
