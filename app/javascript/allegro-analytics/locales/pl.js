export default {
	global: {
		email: 'Email',
		password: 'Hasło',
		log_in: 'Zaloguj się',
		sign_up: 'Utwórz konto',
		first_name: 'Imię',
		last_name: 'Nazwisko',
		password_confirmation: 'Powtórz hasło',
		sign_up_with_facebook: 'Załóż konto za pomocą Facebooka',
		sign_up_with_google: 'Załóż konta za pomocą Google',
		or: 'lub'
	},
	components: {
		login_form: {
			header: 'Zaloguj się'
		},
		registration_form: {
			header: 'Zarejestruj się'
		}
	},
	views: {
		auth: {
			side_left: {
				header: 'Nie masz jeszcze konta?',
				text: 'Stwórz konto i analizuj każdy produkt.'
			},
			side_right: {
				header: 'Masz już konto?',
				text: 'Zaloguj się i analizuj każdy produkt.'
			}
		}
	}
}