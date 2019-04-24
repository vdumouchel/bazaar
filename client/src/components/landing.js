//basic react imports
import React, { Component } from 'react';
// advanced module imports
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
// css & styles imports
import '../App.css';
import Button from 'antd/lib/button';
// components imports
//...//

class landing extends Component {
	render() {
		return (
			<div className="App">
				<h1>Bazaar landing page</h1>

				<Link to="/signup">
					<Button>sign up</Button>
				</Link>
			</div>
		);
	}
}

export default landing;
