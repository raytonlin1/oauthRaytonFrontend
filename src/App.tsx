import React, {useContext} from 'react';
import './GlobalStyles.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Redirect } from 'react-router'
import Homepage from './Components/Homepage/Homepage'
import Loginpage from './Components/Loginpage/Loginpage'
import NavBar from './Components/NavBar/NavBar'
import {myContext} from './Context'

function App() {
  const userObject = useContext(myContext);
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        {userObject ? null : <Route exact path="/login" component={Loginpage} />}
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
