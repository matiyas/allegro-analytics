<template lang="pug">
	.container
		label.input-label(v-if="label") {{ label }}
		input.aa-text-input(ref="textInput" :type="type", :placeholder="placeholder" :value="value" @input="handleInput")
</template>

<script>
	export default {
		name: "text-input",
		props: {
			value: {
				type: String,
				default: null
			},
			label: {
				type: String,
				default: null
			},
			type: {
				type: String,
				default: 'text'
			},
			placeholder: {
				type: String,
				default: null
			}
		},
		methods: {
			handleInput () {
				this.$emit('input', this.$refs.textInput.value)
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../assets/stylesheets/vars';

	.input-label {
		display: block;
		text-align: left;
		width: 100%;
		margin: 0 0 .2em 1.5em;
		font-size: .8em;
		color: $gray-color;
	}
</style>