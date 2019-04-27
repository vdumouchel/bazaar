// basic react imports
import React from 'react';
import { Formik } from 'formik';
import { Mutation } from 'react-apollo';
// css & styles imports
import 'antd/dist/antd.less';
import '../../css/signup.less';
import { Form, Input, Icon, Checkbox, Button } from 'antd';
// components imports
import { signUpMutation } from '../gql-mutations/gql-mutations';
import { signUpValidation } from '../yup-validation/yupValidation';

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

const SignUp = () => {
	return (
		<Mutation
			mutation={signUpMutation}
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
						user_first_name: '',
						user_last_name: '',
						user_username: '',
						user_email: '',
						user_password: '',
					}}
					onSubmit={(values, { setSubmitting }) => {
						signup({
							variables: {
								user_first_name: values.user_first_name,
								user_last_name: values.user_last_name,
								user_username: values.user_username,
								user_email: values.user_email,
								user_password: values.user_password,
							},
						});
						setSubmitting(false);
					}}
					validationSchema={signUpValidation}
				>
					{props => {
						const { errors, handleChange, handleBlur, handleSubmit, isSubmitting, touched, values } = props;
						return (
							<Form {...formItemLayout} onSubmit={handleSubmit}>
								<Form.Item>
									<Input
										id="user_first_name"
										placeholder="First Name"
										type="user_first_name"
										prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
										value={values.user_first_name}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.user_first_name && touched.user_first_name
												? 'text-input error'
												: 'text-input'
										}
									/>
									{errors.user_first_name && touched.user_first_name && (
										<div className="input-feedback">{errors.user_first_name}</div>
									)}
								</Form.Item>
								<Form.Item>
									<Input
										id="user_last_name"
										placeholder="Last Name"
										type="user_last_name"
										prefix={<Icon type="team" style={{ color: 'rgba(0,0,0,.25)' }} />}
										value={values.user_last_name}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.user_last_name && touched.user_last_name
												? 'text-input error'
												: 'text-input'
										}
									/>
									{errors.user_last_name && touched.user_last_name && (
										<div className="input-feedback">{errors.user_last_name}</div>
									)}
								</Form.Item>
								<Form.Item>
									<Input
										id="user_username"
										placeholder="Username"
										type="user_username"
										prefix={<Icon type="star" style={{ color: 'rgba(0,0,0,.25)' }} />}
										value={values.user_username}
										onChange={handleChange}
										onBlur={handleBlur}
										className={
											errors.user_username && touched.user_username
												? 'text-input error'
												: 'text-input'
										}
									/>
									{errors.user_username && touched.user_username && (
										<div className="input-feedback">{errors.user_username}</div>
									)}
								</Form.Item>
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
									<span className="login-form-forgot" href="">
										<Checkbox>
											I accept Bazaar's <a>Terms & Policy</a>
										</Checkbox>
									</span>
									<Button
										type="primary"
										htmlType="submit"
										className="login-form-button"
										disabled={isSubmitting}
									>
										Create an account
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

export default SignUp;
