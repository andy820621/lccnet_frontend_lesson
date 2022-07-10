<template>
	<div>
		<Todo :lists="listUncomplete" h1Text="代辦項目" />
		<Todo :lists="listComplete" h1Text="已完成" />
		<hr />
		<form @submit.prevent="add">
			<input type="text" placeholder="新增事項" v-model="newList" />
			<input
				type="text"
				placeholder="標籤"
				list="tag-select"
				v-model="newTag"
			/>
			<datalist name="tag" id="tag-select">
				<option :value="tag" v-for="tag of filterTags" :key="tag">
					{{ tag }}
				</option>
			</datalist>
			<button>新增</button>
		</form>
	</div>
</template>

<script>
import Todo from "./Todo.vue";
export default {
	name: "Todos",
	components: {
		Todo,
	},
	methods: {
		add(e) {
			if (this.newList === "" || this.newTag === "")
				return alert("請填選所有欄位");
			this.lists.push({
				id: this.lists.length + 1,
				name: this.newList,
				isComplete: false,
				tag: this.newTag,
			});
			this.newList = "";
			this.newTag = "";
		},
	},
	data() {
		return {
			lists: [
				{ id: 1, name: "發票寄限掛", isComplete: false, tag: "急件" },
				{ id: 2, name: "洗衣服", isComplete: false, tag: "重要" },
				{ id: 3, name: "網站輪播處裡", isComplete: false, tag: "急件" },
				{ id: 4, name: "買晚餐", isComplete: false, tag: "普通" },
				{ id: 5, name: "DFASFDA", isComplete: false, tag: "重要" },
				{ id: 6, name: "買DFAF晚餐", isComplete: false, tag: "普通" },
				{ id: 7, name: "買FDAFDASF晚餐", isComplete: false, tag: "普通" },
				{ id: 8, name: "買晚FDAFD餐", isComplete: false, tag: "重要" },
			],
			newList: "",
			newTag: "",
		};
	},
	computed: {
		listComplete() {
			return this.lists.filter((data) => data.isComplete);
		},
		listUncomplete() {
			return this.lists.filter((data) => !data.isComplete);
		},
		filterTags() {
			return new Set(this.lists.map((list) => list.tag));
		},
	},
};
</script>

<style scoped></style>
