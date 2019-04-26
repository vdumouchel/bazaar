// basic react imports
import React, { Component } from 'react';
// advanced module imports
import { BrowserRouter as Link } from 'react-router-dom';
import { Query } from 'react-apollo';
// css & styles imports
import '../../App.css';
// components imports
import { listAllAvailableItems } from '../gql-queries/gql-queries';

class allItems extends Component {
	render() {
		return (
			<Query query={listAllAvailableItems}>
				{({ loading, errors, data }) => {
					if (loading) return <div>Loading...</div>;
					if (errors) return <div>Errors {JSON.stringify(errors)}</div>;
					return (
						<div className="App">
							<button>
								<Link to="/">Bazaar</Link>
							</button>
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
