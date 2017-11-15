import React from "react";
import { NavLink } from "react-router-dom";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Nav extends React.Component {
  constructor(props){
    super(props);
    this.extra = props.extra;
    this.state = {collapsed : true};
  }
  toggleCollapse(){
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }
  render() {
    const { location } = this.extra;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    
    const navClass = collapsed ? "collapse" : "";
    console.log(location);

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
          </div>

          <div className={"navbar-collapse " + navClass} id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className={featuredClass}>
                <NavLink exact to="/" onClick={this.toggleCollapse.bind(this)}>Featured</NavLink>
              </li>
              <li className={archivesClass}>
                <NavLink to="/archives" onClick={this.toggleCollapse.bind(this)}>Archives</NavLink>
                </li>
              <li className={settingsClass}>
                <NavLink to="/settings" onClick={this.toggleCollapse.bind(this)}>Settings</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      );
}
}
export default Nav;