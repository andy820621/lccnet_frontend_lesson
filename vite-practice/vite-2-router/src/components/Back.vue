<template>
	<div>
		<a href="#" @click="$router.back()">Back</a>

		<div>
			<a href="#" @click="$router.go(-1)">Prev</a> |
			<a href="#" @click="$router.go(1)">Next</a>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
