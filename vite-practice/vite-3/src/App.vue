<script setup>
import { reactive, ref, computed } from "@vue/reactivity";

const title = ref("helleo vue");
const users = reactive(["John", "Mary", "test"]);
const totalUser = computed(() => {
	return users.length;
});

const input = ref("");
const addUser = () => {
	users.push(input.value);
	input.value = "";
};
</script>

<template>
	<div>
		<h1>{{ title }}</h1>
		<input type="text" v-model="input" />
		<button @click="addUser">Add New</button>
		<ul>
			<li v-for="(user, i) in users" :key="i">{{ user }}</li>
		</ul>
		<div>{{ totalUser }}</div>
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
