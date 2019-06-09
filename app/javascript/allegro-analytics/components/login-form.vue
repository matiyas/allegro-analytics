<template lang="pug">
	.login-container
		h1.aa-h1
			| {{ $t('components.login_form.header') }}
		text-input.text-input(:placeholder="$t('global.email')" type="email" v-model="email")
		text-input.text-input(:placeholder="$t('global.password')" type="password" v-model="password")
		button.aa-btn.aa-primary-btn {{ $t('global.log_in') }}
</template>

<script>
	import TextInput from '../components/text-input'
	import SocialMediaRegistration from '../components/social-media-registration'

	export default {
		name: "login-form",
		components: {
			TextInput,
			SocialMediaRegistration
		},
		data () {
			return {
				email: null
			}
		}
	}
</script>

<style scoped>

</style>