import React from "react";
import {
  useHistory,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './Navbar';
import Splash from './Splash';

const App = () => {
  const history = useHistory();
  return (
    <>
      <Navbar history={history} />
      <Switch>
        <Route path ="/pizza">

          <div><p>Pizza</p></div>
        </Route>
        <Route path="/">
        <Splash history={history}/>
        </Route>
      </Switch>
    </>
  );
};
export default App;
