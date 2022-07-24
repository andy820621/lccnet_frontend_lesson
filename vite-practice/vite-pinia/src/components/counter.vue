<template>
	<div>
		<button @click="increment()">+</button>
		<button @click="decrement()">-</button>
		<h2>{{ count }}</h2>
	</div>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
const Counter = useCounterStore();
// const { count, increment, decrement } = Counter;
const { count } = storeToRefs(Counter);
const { increment, decrement } = Counter;
</script>

<style lang="scss" scoped></style>
