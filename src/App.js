import React from "react"
import {Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Products from "./Products"

function App() {
  return (
    <div >
      <Link to="/">Home</Link>
      <Link to="/">Products</Link>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
