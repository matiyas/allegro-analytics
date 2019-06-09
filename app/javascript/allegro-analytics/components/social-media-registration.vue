<template lang="pug">
	.social-media-container
		button.aa-btn.fb-btn
			font-awesome-icon.social-media-icon(:icon="['fab', 'facebook-f']")
			label
				| {{ $t('global.sign_up_with_facebook') }}
		button.aa-btn.google-btn
			font-awesome-icon.social-media-icon(:icon="['fab', 'google']")
			label
				| {{ $t('global.sign_up_with_google') }}
</template>

<script>
	export default {
		name: "social-media-registration"
	}
</script>

<style scoped lang="scss">
	@import '../assets/stylesheets/vars';

	.social-media-container {
		padding-top: 1.5em;
		display: flex;
		justify-content: space-between;
	}
	.aa-btn {
		border: none;
		width: 48.5%;
		font-size: .6em;
		font-weight: bold;
		padding: .3em 1.4em;
		display: flex;
		align-items: center;
		color: white;
		label {
			width: 100%;
		}
	}
	.social-media-icon {
		height: 100%;
		font-size: 1.5em;
		margin-right: .5em;
	}
	.fb-btn {
		background-color: $facebook-primary-color;
	}
	.google-btn {
		background-color: $google-red-color;
	}
</style>