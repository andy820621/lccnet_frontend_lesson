<template>
	<div>
		<li v-for="list in filterLists" :key="list.id">
			<input type="checkbox" :id="list.name" v-model="list.isComplete" />
			<label :for="list.name">
				{{ list.name }}
			</label>
		</li>
	</div>
</template>

<script>
export default {
	name: "List",
	props: ["filterLists"],
};
</script>
