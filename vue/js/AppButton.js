export default {
	name: "AppButton",
	template: `<button :disabled="isDisabled">click</button>`,
	data() {
		return {
			isDisabled: false,
		};
	},
};
