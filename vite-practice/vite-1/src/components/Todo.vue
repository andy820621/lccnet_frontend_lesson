<template>
	<section v-show="lists.length">
		<h1>{{ h1Text }}</h1>
		<Tag
			:tags="tags"
			:currentTag="currentTag"
			@change="currentTag = $event"
			v-model="currentTag"
		/>
		<ul>
			<List :filterLists="filterLists" />
		</ul>
	</section>
</template>

<script>
import Tag from "./Tag.vue";
import List from "./List.vue";
export default {
	name: "Todo",
	components: {
		Tag,
		List,
	},
	props: ["lists", "h1Text"],
	data() {
		return {
			currentTag: "全部",
		};
	},
	computed: {
		tags() {
			return ["全部", ...new Set(this.lists.map((list) => list.tag))];
		},
		filterLists() {
			if (this.currentTag === "全部") return this.lists;
			return this.lists.filter((list) => list.tag === this.currentTag);
		},
	},
};
</script>

<style scoped></style>
