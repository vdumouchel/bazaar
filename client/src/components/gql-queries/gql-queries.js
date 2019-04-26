import gql from 'graphql-tag';

export const listAllAvailableItems = gql`
	query {
		listAllAvailableItems {
			item_id
			item_name
			item_price
			item_description
		}
	}
`;
