<template>
	<div>
		<h1>Service</h1>
		<nav>
			<router-link to="first">First</router-link> |
			<router-link to="second">Second</router-link> |
			<router-link to="third">Third</router-link>
			<!-- <router-link :to="{ name: 'Service.first' }">First</router-link> |
			<router-link :to="{ name: 'Service.second' }">Second</router-link> |
			<router-link :to="{ name: 'Service.third' }">Third</router-link> -->
		</nav>
		<router-view></router-view>
		<Back />
	</div>
</template>

<script setup>
import Back from "@/components/Back.vue";
</script>

<style lang="scss" scoped></style>
