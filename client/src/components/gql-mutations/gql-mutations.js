import gql from 'graphql-tag';

export const signUpMutation = gql`
	mutation signUpMutation(
		$user_first_name: String!
		$user_last_name: String!
		$user_username: String!
		$user_country: String
		$user_email: String!
		$user_password: String!
	) {
		signUp(
			user_first_name: $user_first_name
			user_last_name: $user_last_name
			user_username: $user_username
			user_country: $user_country
			user_email: $user_email
			user_password: $user_password
		) {
			message
		}
	}
`;
