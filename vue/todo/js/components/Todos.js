import Todo from "./Todo.js";
export default {
	components: {
		Todo,
	},
	template: `
    <Todo :lists="listUncomplete" h1Text="代辦項目"/>
    <Todo :lists="listComplete" h1Text="已完成"/>
    <hr>
    <form @submit.prevent='add'>
      <input type="text" placeholder="新增事項" v-model="newList">
      <input type="text" placeholder="標籤" list="tag-select" v-model="newTag">
			<datalist name="tag" id="tag-select">
				<option :value="tag" v-for="tag of filterTags">{{tag}}</option>
			</datalist>
      <button>新增</button>
    </form>
  `,
	methods: {
		add(e) {
			// e.preventDefault();
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
			lists: [],
			newList: "",
			newTag: "",
		};
	},
	created() {
		fetch("http://localhost:3333/lists")
			.then((res) => res.json())
			.then((data) => (this.lists = data));
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
