import React from 'react';
import gql from 'graphql-tag';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';

const SIGN_UP_MUTATION = gql`
	mutation signUpMutation($input: SignUpInput!) {
		signup(input: $input) {
			token
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
						fullname: '',
						email: '',
						password: '',
					}}
					onSubmit={(values, { setSubmitting }) => {
						signup({ variables: { input: values } });
						setSubmitting(false);
					}}
					validationSchema={Yup.object().shape({
						email: Yup.string()
							.email()
							.required('required'),
						password: Yup.string().required('required'),
						fullname: Yup.string().required('required'),
					})}
				>
					{props => {
						const { errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched, values } = props;
						return (
							<form onSubmit={handleSubmit}>
								<label htmlFor="email" style={{ display: 'block' }}>
									Email
								</label>
								<input
									id="email"
									placeholder="Enter your email"
									type="text"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.email && touched.email ? 'text-input error' : 'text-input'}
								/>
								{errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
								<input
									id="fullname"
									placeholder="Enter your Full Name"
									type="text"
									value={values.fullname}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.fullname && touched.fullname ? 'text-input error' : 'text-input'}
								/>
								{errors.fullname && touched.fullname && (
									<div className="input-feedback">{errors.fullname}</div>
								)}
								<input
									id="password"
									placeholder="Enter your password"
									type="password"
									value={values.password}
									onChange={handleChange}
									onBlur={handleBlur}
									className={errors.password && touched.password ? 'text-input error' : 'text-input'}
								/>
								{errors.password && touched.password && (
									<div className="input-feedback">{errors.password}</div>
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
