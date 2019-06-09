export default {
	global: {
		email: 'Email',
		password: 'Password',
		log_in: 'Log in',
		sign_up: 'Sign up',
		first_name: 'First name',
		last_name: 'Last name',
		password_confirmation: 'Password confirmation',
		sign_up_with_facebook: 'Sign up with Facebook',
		sign_up_with_google: 'Sign up with Google',
		or: 'or'
	},
	components: {
		login_form: {
			header: 'Log in'
		},
		registration_form: {
			header: 'Sign up'
		}
	},
	views: {
		auth: {
			side_left: {
				header: 'You do not have an account yet?',
				text: 'Create an account and analyze any product.'
			},
			side_right: {
				header: 'You have an account already?',
				text: 'Sign in and analyze any product.'
			}
		}
	}
}