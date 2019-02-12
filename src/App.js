import React, {Component} from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "antd/dist/antd.css";
import {Route, Switch, withRouter} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Post from "./components/Post/Post";

class App extends Component {
  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const {location} = this.props;

    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    const {location} = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <div className="app">
        <Header/>
        <main className="content">
          <div className="header-spacer"/>
          <Switch location={isModal ? this.previousLocation : location}>
            <Route exact path="/" component={Profile} />
            <Route path="/p/:id" component={Post} />
          </Switch>
          {isModal && <Route path="/p/:id" component={Post} />}
        </main>
      </div>
    );
  }
}

export default withRouter(App);
