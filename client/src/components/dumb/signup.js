// basic react imports
import React, { Component } from 'react';

// advanced module imports
import { Link } from 'react-router-dom';

// css & styles immports
import 'antd/dist/antd.less';
import '../../css/style';
import '../../css/signup.less';
import { Card, Icon, Col } from 'antd';

// components imports
import SignUp from '../smart/SignUp';
import { genie } from '../../img/svg';

//declaring variables
const Genie = props => <Icon component={genie} {...props} />;

class signup extends Component {
	render() {
		return (
			<div style={{ width: 456, margin: 'auto' }}>
				<Card className="card">
					<Col span={12} offset={6} style={{ textAlign: 'center' }}>
						<Genie />
						<h1>Sign Up</h1>
					</Col>
					<SignUp />
				</Card>
				<Card style={{ textAlign: 'center', marginTop: 20 }}>
					Already a Bazaar techie? &nbsp;
					<Link to="/login">
						<span>Log in</span>
					</Link>
				</Card>
			</div>
		);
	}
}

export default signup;
