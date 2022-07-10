export default {
	name: "Tag",
	props: {
		tags: Array,
		currentTag: String,
		modelValue: String,
	},
	// template: `
	//   <div>
	//     <button v-for="tag in tags" @click="$emit('change',tag)" :class="{active: currentTag === tag}">{{tag}}</button>
	//   </div>
	// `,
	template: `
    <div>
      <button v-for="tag in tags" @click="$emit('update:modelValue',tag)" :class="{active: modelValue === tag}">{{tag}}</button>
    </div>
  `,
};
