<script>
import Nav from "@/components/Nav.vue";
export default {
	components: {
		Nav,
	},
};
</script>

<template>
	<div>
		<h1>App</h1>
		<Nav />
		<router-view></router-view>
	</div>
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
