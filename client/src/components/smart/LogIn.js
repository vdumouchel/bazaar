import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router-dom';

// css & styles imports
import 'antd/dist/antd.less';
import '../../css/signup.less';
import { Form, Input, Icon, Checkbox, Button, Alert } from 'antd';
// components imports
import { LogInMutation } from '../gql-mutations/gql-mutations';
import { LogInValidation } from '../yup-validation/yupValidation';

// declaring variables

const formItemLayout = {
	labelCol: {
		xs: { span: 16 },
		sm: { span: 8 },
	},
	wrapperCol: {
		xs: { span: 24 },
		sm: { span: 24 },
	},
};

// declaring the exported function

const LogIn = history => {
	console.log(history);
	return (
		<Mutation
			mutation={LogInMutation}
			onError={error => {
				console.log(error);
				alert('No Bazaar account yet with this email. Please create an account.');
			}}
			onCompleted={data => {
				console.log(`${data.login.message}`);
				if (data.login.message === 'You successfully logged in!') {
					alert(`${data.login.message}`);
					console.log(history);
				} else {
					alert(`Login failed. Incorrect password. Please try again!`);
				}
			}}
		>
			{(signup, { data }) => (
				<Formik
					initialValues={{
						user_email: '',
						user_password: '',
					}}
					onSubmit={(values, { setSubmitting }) => {
						signup({
							variables: {
								user_email: values.user_email,
								user_password: values.user_password,
							},
						});
						setSubmitting(false);
					}}
					validationSchema={LogInValidation}
				>
					{props => {
						const { errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched, values } = props;
						return (
							<Form {...formItemLayout} onSubmit={handleSubmit}>
								<Form.Item>
									<Input
										id="user_email"
										placeholder="Email"
										type="user_password"
										prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
								</Form.Item>
								<Form.Item>
									<Input
										id="user_password"
										placeholder="Password"
										type="user_password"
										prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
								</Form.Item>

								<Form.Item>
									<Checkbox>Remember me</Checkbox>
									<span className="login-form-forgot">
										<a>Forgot password</a>
									</span>
									<Button
										type="primary"
										htmlType="submit"
										className="login-form-button"
										disabled={isSubmitting}
									>
										Log in
									</Button>
								</Form.Item>
							</Form>
						);
					}}
				</Formik>
			)}
		</Mutation>
	);
};

export default LogIn;
