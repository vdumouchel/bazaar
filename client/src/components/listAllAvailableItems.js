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

let listAllAvailableItems = gql`
	query {
		listAllAvailableItems {
			item_id
			item_name
			item_price
			item_description
		}
	}
`;

class allItems extends Component {
	render() {
		return (
			<Query query={listAllAvailableItems}>
				{({ loading, errors, data }) => {
					if (loading) return <div>Loading...</div>;
					if (errors) return <div>Errors {JSON.stringify(errors)}</div>;
					return (
						<div className="App">
							<Button>
								<Link to="/">Bazaar</Link>
							</Button>
							{data.listAllAvailableItems.map(item => (
								<div key={item.item_id}>{item.item_price}</div>
							))}
						</div>
					);
				}}
			</Query>
		);
	}
}

export default allItems;
