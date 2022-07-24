<template>
	<div>
		<input type="text" v-model="item" />
		<button @click="addNewItem()">Add Item</button>
	</div>
</template>

<script setup>
import { useTodoStore } from "@/stores/todoStore";
import { ref } from "vue";
const TodoStore = useTodoStore();
const item = ref("");
function addNewItem() {
	TodoStore.addNewTodo(item.value);
	item.value = "";
}
</script>

<style lang="scss" scoped></style>
