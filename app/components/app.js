import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import {Navbar} from './navbar';
import {Map} from './states/map';

import crossfilter from 'crossfilter2';


export default class App extends Component {	
  render() {
    const radius = 6
    return (
	    	<div>	    		
	       	<svg id='main-map' viewBox={`0 0 ${26*radius} ${16*radius}`}>
	       		<Map r={radius}/>
	       	</svg>
       	</div>
    );
  }
}
