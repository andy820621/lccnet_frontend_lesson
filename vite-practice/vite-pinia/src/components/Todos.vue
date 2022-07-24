<template>
	<div>
		<h1>TODO</h1>
		<AddItem />
		<div v-show="unCompletedTodos.length">
			<h2>Uncompleted</h2>
			<ul>
				<li v-for="todo in unCompletedTodos" :key="todo.id">
					<input type="checkbox" v-model="todo.isCompleted" />
					{{ todo.name }}
				</li>
			</ul>
		</div>
		<!-- br -->
		<div v-show="completedTodos.length">
			<h2>Completed</h2>
			<ul>
				<li v-for="todo in completedTodos" :key="todo.id">
					<input type="checkbox" v-model="todo.isCompleted" />
					{{ todo.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import AddItem from "@/components/AddItem.vue";
const TodoStore = useTodoStore();
const { todos, completedTodos, unCompletedTodos } = storeToRefs(TodoStore);
</script>

<style lang="scss" scoped></style>
