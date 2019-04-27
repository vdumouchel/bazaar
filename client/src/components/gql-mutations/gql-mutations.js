import gql from 'graphql-tag';

export const signUpMutation = gql`
	mutation signUpMutation(
		$user_first_name: String!
		$user_last_name: String!
		$user_username: String!
		$user_email: String!
		$user_password: String!
	) {
		signUp(
			user_first_name: $user_first_name
			user_last_name: $user_last_name
			user_username: $user_username
			user_email: $user_email
			user_password: $user_password
		) {
			message
		}
	}
`;

export const LogInMutation = gql`
	mutation LogInMutation($user_email: String!, $user_password: String!) {
		login(user_email: $user_email, user_password: $user_password) {
			message
		}
	}
`;
