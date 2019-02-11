import React, {Component} from "react";
import Header from "./components/Header/Header";
import "./App.css";
import "antd/dist/antd.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <main className="content">
          <div className="header-spacer"/>
          <div style={{width: 200, height: 200}}>dfdsf</div>
          <div style={{width: 200, height: 200}}>dfdsf</div>
          <div style={{width: 200, height: 200}}>dfdsf</div>
        </main>
      </div>
    );
  }
}

export default App;
