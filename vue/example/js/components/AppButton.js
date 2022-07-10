export default {
	name: "AppButton",
	props: {
		btnStyle: {
			default: "primary",
			type: String,
		},
	},
	// template: `<button :class="{
	// 	'text-white rounded-md m-3 p-3': true,
	// 	'bg-blue-600': btnStyle === 'primary',
	// 	'bg-red-600': btnStyle === 'danger',
	// }" :disabled="isDisabled">
	// 	<slot />
	// </button>`,
	template: `
	<button 
		class="text-white rounded-md m-3 p-3" 
		:class="btnStyle ==='primary' ? 'bg-blue-600' : 'bg-red-600'"
		:disabled="isDisabled">
		<slot />
	</button>`,
	data() {
		return {
			isDisabled: false,
		};
	},
};
