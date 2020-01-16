<template>
	<div class="todo-list">
		<div v-if="list.length">
			<app-todo-item
				@update="updateTodo"
				v-for="(item,index) in list"
				:key="index"
				:title="item.title"
				:description="item.description"
				:id="item._id"
			></app-todo-item>
		</div>
		<div v-else class="empty-list">Sorry,there are no todos left.Get started by clicking on the create button</div>
	</div>
</template>

<script>
	import TodoItem from "@/components/TodoItem";
	export default {
		components: {
			"app-todo-item": TodoItem
		},
		methods: {
			updateTodo(data) {
				this.$emit("updateTodo", data);
			}
		},
		props: ["list"]
	};
</script>

<style lang="scss" scoped>
	.todo-list {
		flex: 1;
	}
	.empty-list {
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		background-color: gray;
		color: #ccc;
	}
</style>