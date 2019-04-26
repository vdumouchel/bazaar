// basic react imports
import React, { Component } from 'react';
// Advanced module imports
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import apolloClient from './apolloclient';
//css & styling imports
import './App.css';
// component imports
import landing from './components/dumb/landing';
import signup from './components/dumb/signup';
import allItems from './components/dumb/listAllAvailableItems';

class App extends Component {
	render() {
		return (
			<ApolloProvider client={apolloClient}>
				<Router>
					<Route path="/" exact component={landing} />
					<Route path="/signup" component={signup} />
					<Route path="/allItems" component={allItems} />
				</Router>
			</ApolloProvider>
		);
	}
}

export default App;
