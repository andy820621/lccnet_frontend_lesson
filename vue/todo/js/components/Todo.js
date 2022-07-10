import Tag from "./Tag.js";
export default {
	components: {
		Tag,
	},
	props: ["lists", "h1Text"],
	template: `
    <section v-show="lists.length">
      <h1>{{h1Text}}</h1>
      <Tag :tags="tags" :currentTag="currentTag" @change="currentTag = $event" v-model="currentTag" />
      <ul>
          <li v-for="list in filterLists" :key="list.id">
              <input type="checkbox" :id="list.name" v-model="list.isComplete">
              <label :for="list.name">
                  {{list.name}}
              </label>
          </li>
      </ul>
    </section>
  `,
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
