<template lang="pug">
	.container
		.side(:class="[ isLoginForm ? 'left' : 'right' ]")
			.images-container(:class="[ isLoginForm ? 'left' : 'right' ]")
				.images-wrapper
					NetworkGlobe.network-globe-left
					NetworkGlobe.network-globe-right
			.side-content
				transition(:name="sideContentTransition" mode="out-in")
					.content(v-if="isLoginForm" key="side-content-left")
						h2 {{ $t('views.auth.side_left.header') }}
						p {{ $t('views.auth.side_left.text') }}
					.content(v-else key="side-content-right")
						h2 {{ $t('views.auth.side_right.header') }}
						p {{ $t('views.auth.side_right.text') }}
				button.go-to-registration(@click="changeForm")
					transition(name="button-text-slide-right")
						.text-wrapper(v-show="isLoginForm")
							.text {{ $t('global.sign_up') }}
					transition(name="button-text-slide-left")
						.text-wrapper(v-show="!isLoginForm")
							.text {{ $t('global.log_in') }}
		.main(:class="{ left: !isLoginForm }")
			.main-content
				.form-content
					transition(name="component-fade", mode="out-in")
						component.form(:is="activeForm")
					label.alternative-container {{ $t('global.or') }}
				social-media-registration

</template>

<script>
	import LoginForm from '../components/login-form'
	import RegistrationForm from '../components/registration-form'
	import SocialMediaRegistration from '../components/social-media-registration'
	import NetworkGlobe from '../assets/images/network-globe.svg'

  export default {
    name: "login",
	  components: { LoginForm, RegistrationForm, SocialMediaRegistration, NetworkGlobe },
    data () {
    	return {
		    activeForm: RegistrationForm
	    }
    },
	  methods: {
    	changeForm () {
    		this.activeForm = this.isLoginForm ? RegistrationForm : LoginForm
	    }
	  },
	  computed: {
		  isLoginForm () {
    		return this.activeForm === LoginForm
		  },
		  sideContentTransition () {
		  	return this.isLoginForm ? 'slide-content-right' : 'slide-content-left'
		  }
	  }
  }
</script>

<style scoped lang="scss">
	@import "../assets/stylesheets/vars";

	$transition-speed-curve: ease-in-out;
	$transition-duration: .8s;

	.flapper {
		position: relative;
	}
	.container {
		width: 100%;
		height: 100vh;
		position: relative;
	}
	.main {
		position: absolute;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		flex-direction: column;
		width: 70%;
		left: 30%;
		height: 100vh;
		&.left {
			left: 0;
		}
	}
	.main-content {
		width: 70%;
		max-width: 750px;
	}
	.form-content {
		text-align: center;
		padding-bottom: 1.2em;
		border-bottom: 1px solid $border-color;
		position: relative;
	}
	.alternative-container {
		margin: auto;
		left: 0;
		right: 0;
		bottom: -0.5em;
		padding: 0 .7em;
		width: fit-content;
		position: absolute;
		display: block;
		color: $dark-gray-color;
		font-size: .6em;
		background-color: $background-color;
	}
	.side-background {
		stroke: white;
		fill: white;
		color: white;
	}
	.side-content {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		overflow: hidden;
		flex-direction: column;
		.content {
			padding: 3em 2em;
			text-align: center;
			h2 {
				font-size: 1em;
				font-weight: bold;
				color: white;
			}
			p {
				font-size: .7em;
				color: white;
			}
		}
	}
	.images-container {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		overflow: hidden;
		right: 0;
		transition: all $transition-duration $transition-speed-curve;
		&.left {
			transform: translateX(70vw);
		}

	}
	.images-wrapper {
		position: relative;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	.network-globe-right {
		position: absolute;
		bottom: -10em;
		right: -5em;
		fill: white;
		width: 20em;
		height: 20em;
	}

	.network-globe-left {
		position: absolute;
		bottom: -10em;
		left: 4em;
		fill: white;
		width: 20em;
		height: 20em;
	}
	.side {
		background-image: linear-gradient(70deg, #6f11c1 0, #1161d8 100%);
		overflow: hidden;
		position: absolute;
		width: 30%;
		height: 100%;
		z-index: 20;
		&.left {
			left: 0;
			animation: slide-left $transition-duration $transition-speed-curve;

			@keyframes slide-left {
				30% {
					transform: translateX(-30%);
					width: 60%;
				}
				100% {
					width: 30%;
				}
			}
		}
		&.right {
			left: 70%;
			animation: slide-right $transition-duration $transition-speed-curve;
			@keyframes slide-right {
				30% {
					width: 60%;
				}
				100% {
					width: 30%;
				}
			}
		}
	}
	.side, .main {
		transition: left $transition-duration $transition-speed-curve;
	}
	.go-to-registration {
		width: 50%;
		height: 60px;
		background-color: unset;
		border: 2px solid white;
		border-radius: 45px;
		color: white;
		font-size: 24px;
		display: block;
		margin: 0 auto;
		outline: none;
		position: relative;
	}
	.text-wrapper {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.component-fade-enter-active,
	.component-fade-leave-active {
		transition: all .1s $transition-speed-curve .2s;
	}
	.button-text-slide-right-enter-active,
	.button-text-slide-right-leave-active,
	.button-text-slide-left-enter-active,
	.button-text-slide-left-leave-active {
		transition: all $transition-duration $transition-speed-curve .2s;
	}
	.button-text-slide-right-enter,
	.button-text-slide-right-leave-to {
		transform: translateX(-40%);
		opacity: 0;
	}
	.button-text-slide-right-enter-to,
	.button-text-slide-right-leave,
	.button-text-slide-left-enter-to,
	.button-text-slide-left-leave {
		opacity: 1
	}
	.button-text-slide-left-enter,
	.button-text-slide-left-leave-to {
		transform: translateX(40%);
		opacity: 0;
	}

	.slide-content-left-enter,
	.slide-content-right-leave-to {
		transform: translateX(100%);
		opacity: 0;
	}
	.slide-content-left-leave-to,
	.slide-content-right-enter {
		transform: translateX(-100%);
		opacity: 0;
	}
	.slide-content-left-enter-active,
	.slide-content-left-leave-active,
	.slide-content-right-enter-active,
	.slide-content-right-leave-active {
		transition: all .3s $transition-speed-curve;
	}
</style>