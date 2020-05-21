import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Homepage'
import MyQr from './components/qrcoder';
import Qrcode from './pages/Qrcode';

function App() {
  return (
   <div>
     <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/qrcode">
        <Qrcode />
      </Route>
     </Switch>
   </div>
  );
}

export default App;
