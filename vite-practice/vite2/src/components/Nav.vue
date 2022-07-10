<template>
	<nav>
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
		<router-link to="/service">Service</router-link>
		<router-link to="/contact">Contact</router-link>
		<!-- <router-link to="/product/123">Product</router-link> -->
		<router-link
			:to="{
				name: 'Product',
				params: {
					id: 3064,
				},
				query: {
					test: 'fdsaf',
				},
			}"
			>Product</router-link
		>
	</nav>
</template>

<script>
// import Product from "@/views/Product.vue";
// export default {
// 	components: {
// 		Product,
// 	},
// 	data() {},
// };
//
</script>

<style scoped>
nav {
	display: flex;
	gap: 0.24rem;
	padding: 1rem;
	background-color: #eee;
}
nav a {
	color: rgb(0, 0, 0);
	text-decoration: none;
	padding: 1rem;
	border-radius: 0.24rem;
	transition: 0.3s;
}
nav a:hover {
	background-color: #306478a4;
	color: #fff;
}
.nav-active-link {
	background-color: #306478;
	color: #fff;
}
</style>
