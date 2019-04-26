// basic react imports
import React, { Component } from 'react';

// advanced module imports

// css & styles immports
import 'antd/dist/antd.less';
import '../../css/style';
import '../../css/signup.less';
import { Card } from 'antd';

// components imports
import SignUp from '../smart/SignUp';

class signup extends Component {
	render() {
		return (
			<div style={{ width: 456, margin: 'auto' }}>
				<Card>
					<h1>Sign Up</h1>
					<SignUp />
				</Card>
			</div>
		);
	}
}

export default signup;
