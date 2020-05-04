import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path ="/pizza">
          <div><p>Pizza</p></div>
        </Route>
        <Route path="/">
          <div><p>Hello World</p></div>
        </Route>
      </Switch>
    </>
  );
};
export default App;
