import React from 'react';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';

const SIGN_UP_MUTATION = gql`
	mutation signUpMutation($user_email: String!, $user_password: String!) {
		signUp(user_email: $user_email, user_password: $user_password) {
			message
		}
	}
`;

const SignUp = () => {
	return (
		<Mutation
			mutation={SIGN_UP_MUTATION}
			onError={error => {
				console.log(error);
			}}
			onCompleted={data => {
				console.log('Data: ', data);
				alert("We're signed up!");
			}}
		>
			{(signup, { data }) => (
				<Formik
					initialValues={{
						user_email: '',
						user_password: '',
					}}
					onSubmit={(values, { setSubmitting }) => {
						signup({ variables: { user_email: values.user_email, user_password: values.user_password } });
						setSubmitting(false);
					}}
					validationSchema={Yup.object().shape({
						user_email: Yup.string()
							.email()
							.required('required'),
						user_password: Yup.string().required('required'),
					})}
				>
					{props => {
						const { errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched, values } = props;
						return (
							<form onSubmit={handleSubmit}>
								<label htmlFor="user_email" style={{ display: 'block' }}>
									Email
								</label>
								<input
									id="user_email"
									placeholder="Enter your email"
									type="text"
									value={values.user_email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.user_email && touched.user_email ? 'text-input error' : 'text-input'
									}
								/>
								{errors.user_email && touched.user_email && (
									<div className="input-feedback">{errors.user_email}</div>
								)}

								<input
									id="user_password"
									placeholder="Enter your password"
									type="user_password"
									value={values.user_password}
									onChange={handleChange}
									onBlur={handleBlur}
									className={
										errors.user_password && touched.user_password
											? 'text-input error'
											: 'text-input'
									}
								/>
								{errors.user_password && touched.user_password && (
									<div className="input-feedback">{errors.user_password}</div>
								)}

								<button type="submit" disabled={isSubmitting}>
									Submit
								</button>
							</form>
						);
					}}
				</Formik>
			)}
		</Mutation>
	);
};

export default SignUp;
