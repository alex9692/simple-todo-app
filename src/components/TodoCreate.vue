<template>
	<div class="todo-create-btn-container">
		<div @click="isActive=true" class="todo-button">Create</div>
		<app-modal @close="isActive=false" :isActive="isActive">
            <app-form @createTodo="confirmCreate"></app-form>
        </app-modal>
	</div>
</template>

<script>
	import Modal from "@/components/Modal";
	import Form from "@/components/TodoCreateForm";
	export default {
		components: {
			"app-modal": Modal,
			"app-form": Form
		},
		data() {
			return {
				isActive: false
			};
		},
		methods: {
			confirmCreate(data) {
                this.isActive = false;
                this.$emit('add',data);
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