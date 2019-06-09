<template lang="pug">
	.registration-container
		h1.aa-h1 {{ $t('components.registration_form.header') }}
		text-input.text-input(:placeholder="$t('global.email')" type="email")
		.name-container
			text-input.text-input(:placeholder="$t('global.first_name')" type="text")
			text-input.text-input(:placeholder="$t('global.last_name')" type="text")
		.password-container
			text-input.text-input(:placeholder="$t('global.password')" type="password")
			text-input.text-input(:placeholder="$t('global.password_confirmation')" type="password")
		button.aa-btn.aa-primary-btn {{ $t('global.sign_up') }}
</template>

<script>
	import TextInput from '../components/text-input'

	export default {
		name: "registration-form",
		components: {
			TextInput
		}
	}
</script>

<style scoped lang="scss">
	@import "../assets/stylesheets/vars";

	.name-container, .password-container {
		display: flex;
		justify-content: space-between;
		.text-input {
			width: 48.5%;
		}
	}
	.text-input {
		/deep/ .aa-text-input {
			height: 2.8em;
		}
	}
	.aa-btn {
		width: 50%;
		font-weight: bold;
	}
</style>