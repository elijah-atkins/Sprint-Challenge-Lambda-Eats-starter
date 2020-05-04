import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Splash from './Splash';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path ="/pizza">

          <div><p>Pizza</p></div>
        </Route>
        <Route path="/">
        <Splash />
        </Route>
      </Switch>
    </>
  );
};
export default App;
