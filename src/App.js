import React, {Component} from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "antd/dist/antd.css";
import appRoutes from "./routes/AppRoutes";
import {Redirect, Route, Switch} from "react-router-dom";

const switchRoutes = (
  <Switch>
    {
      appRoutes.map((prop, key) =>
        <Route path={prop.path} component={prop.component} key={key}/>
      )
    }
  </Switch>
);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <main className="content">
          <div className="header-spacer"/>
          {switchRoutes}
        </main>
      </div>
    );
  }
}

export default App;
