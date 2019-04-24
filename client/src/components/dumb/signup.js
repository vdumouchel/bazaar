// basic react imports
import React, { Component } from 'react';
// advanced modules imports
import { withFormik } from 'formik';
import * as Yup from 'yup';
import classnames from 'classnames';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Mutation } from 'react-apollo';
// import gql from 'graph-tag';

// css & styles imports
import { Button } from 'antd';
// import '../App.css';
import styled from 'styled-components';

// components imports
import SignUp from '../smart/SignUp';

class signup extends Component {
	render() {
		return (
			<div>
				<SignUp />
			</div>
		);
	}
}

export default signup;
