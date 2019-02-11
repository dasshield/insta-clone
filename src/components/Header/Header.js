import React, {Component} from "react";
import "./Header.css"
import { Input } from "antd";
import Button from "antd/es/button/button";
import Icon from "antd/es/icon";

const Search = Input.Search;


class Header extends Component {
  render() {
    return (
      <nav className="main-header">
        <div className="header-items-wrapper">
          <div className="header-logo">

          </div>
          <div className="main-search">
            <Search
              placeholder="input search text"
              onSearch={value => console.log(value)}
            />
          </div>
          <div className="right-menu">
            <Icon type="compass" className="header-right-menu-icon"/>
            <Icon type="heart" className="header-right-menu-icon"/>
            <Icon type="user" className="header-right-menu-icon"/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
