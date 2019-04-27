// basic react imports
import React, { Component } from 'react';

// advanced module imports
import { Link, withRouter } from 'react-router-dom';

// css & styles immports
import 'antd/dist/antd.less';
import '../../css/style';
import '../../css/signup.less';
import { Card, Icon, Col } from 'antd';

// components imports
import LogIn from '../smart/LogIn';
import { genie } from '../../img/svg';

//declaring variables
const Genie = props => <Icon component={genie} {...props} />;

class login extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div style={{ width: 456, margin: 'auto' }}>
				<Card className="card">
					<Col span={18} offset={3} style={{ textAlign: 'center' }}>
						<Genie />
						<h1>Welcome back!</h1>
					</Col>
					<LogIn />
				</Card>
				<Card style={{ textAlign: 'center', marginTop: 20 }}>
					Not a Bazaar techie yet? &nbsp;
					<Link to="/signup">
						<span>Create an account</span>
					</Link>
				</Card>
			</div>
		);
	}
}

export default login;
