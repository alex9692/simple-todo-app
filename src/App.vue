<template>
	<div id="app">
		<div class="todo-wrapper">
			<div class="todo-container">
				<app-todo-list :list="list"></app-todo-list>
				<app-todo-create></app-todo-create>
			</div>
		</div>
	</div>
</template>

<script>
	import TodoList from "@/components/TodoList";
	import TodoCreate from "@/components/TodoCreate";
	import { mapState } from "vuex";

	export default {
		components: {
			"app-todo-list": TodoList,
			"app-todo-create": TodoCreate
		},
		computed: {
			...mapState(["list"])
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
