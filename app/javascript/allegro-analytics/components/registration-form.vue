<template lang="pug">
	div
		h1 Sign up
			input(placeholder="Name" type="text")
			input(placeholder="Surname" type="text")
			input(placeholder="Email" type="email")
			input(placeholder="Password" type="password")
			input(placeholder="Password confirmation" type="password")
</template>

<script>
	export default {
		name: "registration-form"
	}
</script>

<style scoped>

</style>