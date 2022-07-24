import { defineStore } from "pinia";

export const useTodoStore = defineStore("todoStore", {
	state: () => {
		let id = 0;
		return {
			todos: [
				{ id: id++, name: "HTML", isCompleted: false },
				{ id: id++, name: "CSS", isCompleted: false },
				{ id: id++, name: "JavaScript", isCompleted: false },
				{ id: id++, name: "Vue", isCompleted: false },
				{ id: id++, name: "React", isCompleted: false },
				{ id: id++, name: "SolidJS", isCompleted: false },
			],
		};
	},
	getters: {
		completedTodos: (state) => {
			return state.todos.filter((todo) => todo.isCompleted);
		},
		unCompletedTodos: (state) => {
			return state.todos.filter((todo) => !todo.isCompleted);
		},
	},
	actions: {
		addNewTodo(data) {
			this.todos.push({
				id: this.todos.length,
				name: data,
				isCompleted: false,
			});
		},
	},
});
