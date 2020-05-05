import React from "react";
import {
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import "./scss/index.scss"
import Navbar from './components/Navbar';
import Splash from './components/Splash';
import Form from './components/Form';

const App = () => {
  const history = useHistory();
  return (
    <>
      <Navbar history={history} />
      <Switch>
        <Route path ="/pizza">

          <Form />
        </Route>
        <Route path="/">
        <Splash history={history}/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
