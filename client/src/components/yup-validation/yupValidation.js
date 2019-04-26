import * as Yup from 'yup';

export const signUpValidation = Yup.object().shape({
	user_first_name: Yup.string()
		.required('You must have a name. Please provide one. ')
		.min(2, 'Your first name is most likely longer than that!'),
	user_last_name: Yup.string()
		.required('Bazaar users need to provide a last name to sign up. Please do so.')
		.min(2, 'Your last name most likely longer than that!'),
	user_username: Yup.string()
		.required('Bazaar users need to be unique!  Please choose a decent username. ')
		.min(3, 'Your username needs to be at least 3 characters long. Sorry!'),
	user_country: Yup.string().required('Yup needs to set up your marketplace currency. Please choose a country. '),
	user_email: Yup.string()
		.email()
		.required('Bazaar users need to provide an email to sign up. Please do so.'),
	user_password: Yup.string().required(
		'Bazaar users need to provide a password to protect their accounts on sign up. Please do so. '
	),
});
