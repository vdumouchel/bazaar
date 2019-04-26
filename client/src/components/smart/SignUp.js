// basic react imports
import React from 'react';
import { Formik, FormikErrors } from 'formik';
import { Mutation } from 'react-apollo';
// css & styles imports
import 'antd/dist/antd.less';
import '../../css/signup.less';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
// components imports
import { signUpMutation } from '../gql-mutations/gql-mutations';
import { signUpValidation } from '../yup-validation/yupValidation';

//declaring variables
const residences = [
	{
		value: 'zhejiang',
		label: 'Zhejiang',
		children: [
			{
				value: 'hangzhou',
				label: 'Hangzhou',
				children: [
					{
						value: 'xihu',
						label: 'West Lake',
					},
				],
			},
		],
	},
	{
		value: 'jiangsu',
		label: 'Jiangsu',
		children: [
			{
				value: 'nanjing',
				label: 'Nanjing',
				children: [
					{
						value: 'zhonghuamen',
						label: 'Zhong Hua Men',
					},
				],
			},
		],
	},
];

interface FormValues {
	user_email: string;
	user_password: string;
}

interface Props {
	submit: (values: FormValues) => Promise<FormikErrors<FormValues> | null>;
}

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
const tailFormItemLayout = {
	wrapperCol: {
		xs: {
			span: 24,
			offset: 0,
		},
		sm: {
			span: 16,
			offset: 8,
		},
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
						user_email: '',
						user_password: '',
					}}
					onSubmit={(values, { setSubmitting }) => {
						signup({ variables: { user_email: values.user_email, user_password: values.user_password } });
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

								<Button
									type="primary"
									style={{ marginTop: 10 }}
									htmlType="submit"
									disabled={isSubmitting}
									className="login-form-button"
								>
									Create an account
								</Button>
							</Form>
						);
					}}
				</Formik>
			)}
		</Mutation>
	);
};

export default SignUp;
