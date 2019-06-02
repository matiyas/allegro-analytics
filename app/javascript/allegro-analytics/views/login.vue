<template lang="pug">
	.container
		.side(:class="[ isLoginForm ? 'left' : 'right' ]")
			.images-container(:class="[ isLoginForm ? 'left' : 'right' ]")
				.images-wrapper
					.oval
					.square
			.content
				button.go-to-registration(@click="changeForm")
					transition(name="button-text-slide-right")
						.text-wrapper(v-show="isLoginForm")
							.text Sign up
					transition(name="button-text-slide-left")
						.text-wrapper(v-show="!isLoginForm")
							.text Sign in
		.main(:class="{ left: !isLoginForm }")
			transition(name="component-fade", mode="out-in")
				component.form(:is="activeForm")
</template>

<script>
	import LoginForm from '../components/login-form'
	import RegistrationForm from '../components/registration-form'

  export default {
    name: "login",
	  comments: { LoginForm, RegistrationForm },
    data () {
    	return {
		    activeForm: LoginForm
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
		  }
	  }
  }
</script>

<style scoped lang="scss">
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
	/deep/ .form {
		width: 70%;
		text-align: center;
		input {
			display: block;
			width: 100%;
			padding: 5% 10px;
			margin: 20px 0;
		}
		h1 {
			margin: auto;
		}
	}
	.main {
		position: absolute;
		display: flex;
		align-items: center;
		align-content: center;
		justify-content: center;
		width: 70%;
		left: 30%;
		height: 100vh;
		&.left {
			left: 0;
		}
	}
	.content {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: absolute;
		display: flex;
		align-items: center;
		overflow: hidden;
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
	.oval {
		position: absolute;
		top: 0;
		right: 0;
		border: 2px solid white;
		width: 130px;
		height: 130px;
		transform: rotate(30deg);
	}
	.square {
		position: absolute;
		top: 0;
		left: 0;
		border: 2px solid red;
		width: 230px;
		height: 230px;
		border-radius: 100%;
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
</style>