import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hashHistory, IndexRoute } from 'react-router';
import Layout from './pages/Layout';
import './index.css';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
	  <Route path="/" component={Layout} />
  </Router>,
app);