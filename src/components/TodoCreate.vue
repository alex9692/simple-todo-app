<template>
	<div class="todo-create-btn-container">
		<div @click="openModalWindow" class="todo-button">Create</div>
		<app-modal>
			<app-form></app-form>
		</app-modal>
	</div>
</template>

<script>
	import Modal from "@/components/Modal";
	import Form from "@/components/TodoCreateForm";
	import { mapState } from "vuex";
	
	export default {
		components: {
			"app-modal": Modal,
			"app-form": Form
		},
		computed: {
			...mapState(["modalOpen"])
		},
		methods: {
			openModalWindow() {
				this.$store.dispatch("openModalWindow");
			}
		}
	};
</script>

<style lang="scss" scoped>
	.todo {
		&-create-btn-container {
			text-align: center;
			margin: 10px;
		}
		&-button {
			font-size: 20px;
			padding: 10px;
			border-radius: 5px;
			background-color: #795899;
			color: #fff;
			font-weight: bold;

			&:hover {
				cursor: pointer;
			}
		}
	}
</style>