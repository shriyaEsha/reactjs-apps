import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './Header'
import Footer from './Footer'
import Title from './Title'
class Layout extends Component {
	constructor(){
		super();
		this.state = {
			title : "Welcome"
		};
	}
	changeTitle(title){
		this.setState({title});
	}
  render() {
  	return (
      <div>
      	<Header changeTitle = {this.changeTitle.bind(this)} title={this.state.title}  /> 
      	<Footer />
      </div>
    );
  }
}

export default Layout;
