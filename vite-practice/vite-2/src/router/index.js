import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import("@/views/About.vue"),
	},
	{
		path: "/service",
		name: "Service",
		component: () => import("@/views/Service.vue"),
		children: [
			{
				path: "first",
				name: "Service.first",
				component: () => import("@/views/ServiceFirst.vue"),
			},
			{
				path: "second",
				name: "Service.second",
				component: () => import("@/views/ServiceSecond.vue"),
			},
			{
				path: "third",
				name: "Service.third",
				component: () => import("@/views/ServiceThird.vue"),
			},
		],
	},
	{
		path: "/contact",
		name: "Contact",
		component: () => import("@/views/Contact.vue"),
	},
	{
		path: "/product/:id",
		name: "Product",
		component: () => import("@/views/Product.vue"),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NotFound",
		component: () => import("@/views/404.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: "nav-active-link",
});

export default router;
