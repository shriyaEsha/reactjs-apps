import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Title from './Title'

class Header extends Component {
	handleChange(e){
	var title = e.target.value;
	this.props.changeTitle(title);
}

  render() {
  	return (
  		<div>
	      <Title title={this.props.title} /> 
	      <input value={this.props.title} onChange={this.handleChange.bind(this)} />
	     </div>
    );
  }
}

export default Header;
