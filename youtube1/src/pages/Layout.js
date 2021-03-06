import React from "react";
import { NavLink } from "react-router-dom";
import './Layout.css'
import Archived from './Archived'
import Settings from "./Settings";
import Featured from "./Featured";
import Nav from "../components/Nav"



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hashHistory, IndexRoute } from 'react-router';

class Layout extends React.Component {
  render() {
  	const { history } = this.props;
  	console.log(history);
    console.log("layout");
    console.log(this.props);
    return (
    	<div className="title">
    		<Nav extra={history} />
	        <h1>KillerNews.net</h1>
	        <div className="content">
			    <Switch>
				    <Route exact path="/" component={Featured}></Route>
				    <Route path="/archives/:article?" component={Archived}></Route>
				    <Route path="/settings" component={Settings}></Route>
			    </Switch>
			</div>
         </div>
    );
  }
}
export default Layout;