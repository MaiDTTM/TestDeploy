import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Home from './components';
import Login from './components/Login';
import Register from './components/Register';
function App() {
    // state
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' exact component={Login} />
                    <Route path='/register' exact component={Register} />
                </Switch>
            </Router>
            <MessengerCustomerChat pageId='106941058270737' appId='168962168507958' />
        </div>
    );
}

export default App;
