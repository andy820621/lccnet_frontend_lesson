<template>
	<div>
		<button
			v-for="tag in tags"
			@click="$emit('update:modelValue', tag)"
			:class="{ active: modelValue === tag }"
			:key="tag"
		>
			{{ tag }}
		</button>
	</div>
</template>

<script>
export default {
	name: "Tag",
	props: {
		tags: Array,
		currentTag: String,
		modelValue: String,
	},
};
</script>
