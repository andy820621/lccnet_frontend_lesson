<script>
import Todos from "./components/Todos.vue";
export default {
	components: {
		Todos,
	},
};
</script>

<template>
	<Todos></Todos>
</template>

<style>
.active {
	background-color: #306478;
	color: #eee;
}
ul {
	list-style: none;
}
button {
	border: solid 1px #306478;
}
</style>
