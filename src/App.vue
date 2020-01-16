<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<app-todo-list @updateTodo="updateList" :list="list"></app-todo-list>
				<app-todo-create @add="addTodo"></app-todo-create>
			</div>
		</div>
	</div>
</template>

<script>
	import TodoList from "@/components/TodoList";
	import TodoCreate from "@/components/TodoCreate";
	import { EventBus } from "@/main.js";
	export default {
		components: {
			"app-todo-list": TodoList,
			"app-todo-create": TodoCreate
		},
		data() {
			return {
				list: [
					{
						_id: "1",
						title: "Walk the dog",
						description: "Go to the forest near the zoo"
					},
					{
						_id: "2",
						title: "Buy grocery",
						description: "Bread, tomatoes and potatoes"
					},
					{
						_id: "3",
						title: "Learn coding",
						description: "Tomorrow learn VueJs"
					}
				]
			};
		},
		methods: {
			addTodo(data) {
				this.list.push(data);
			},
			updateList(data) {
				const index = this.list.findIndex(el => el._id === data.id);
				this.list[index].title = data.title;
				this.list[index].description = data.description;
			}
		},
		created() {
			EventBus.$on("delete", id => {
				const index = this.list.findIndex(el => el._id === id);
				this.list.splice(index, 1);
			});
		}
	};
</script>

<style lang="scss">
	$color-gray: #ededed;
	#app {
		font-family: "Avenir", Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		margin-top: 60px;
	}
	.is-primary {
		background-color: #47ca47 !important;
	}
	.is-warning {
		background-color: #ffa753 !important;
	}
	.is-danger {
		background-color: #ff5a5a !important;
	}
	.todo {
		&-wrapper {
			display: flex;
			justify-content: center;
			width: 100%;
		}
		&-container {
			width: 400px;
			min-height: 400px;
			background-color: $color-gray;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
		}
	}
</style>
