<template>
	<div class="todo-item">
		<div class="todo-item-content">
			<div v-if="!editState">
				<div class="todo-item-content-title">{{ title }}</div>
				<div class="todo-item-content-description">{{ description }}</div>
			</div>
			<div v-else>
				<form class="app-form">
					<div class="form-control">
						<label class="label">Title</label>
						<input v-model="updatedTitle" type="text" class="form-input" />
					</div>
					<div class="form-control">
						<label class="label">Description</label>
						<textarea v-model="updatedDescription" type="text" class="form-input" rows="5" cols="25"></textarea>
					</div>
				</form>
			</div>
		</div>
		<button @click="updateTodo" class="app-btn is-warning">{{editState ? 'Update': 'Edit'}}</button>
		<button @click="deleteTodo" class="app-btn is-danger">{{editState ? 'Cancel': 'Delete'}}</button>
	</div>
</template>

<script>
	export default {
		props: ["title", "description", "id"],
		data() {
			return {
				editState: false,
				updatedTitle: this.title,
				updatedDescription: this.description
			};
		},
		methods: {
			updateTodo() {
				if (this.editState) {
					if (
						this.updatedTitle.trim().length <= 4 ||
						this.updatedDescription.trim().length <= 4
					) {
						return;
					}
					this.$store.dispatch("updateTodo", {
						id: this.id,
						title: this.updatedTitle,
						description: this.updatedDescription
					});
					this.editState = false;
				} else {
					this.editState = true;
				}
			},
			deleteTodo() {
				if (this.editState) {
					this.editState = false;
				} else {
					this.$store.dispatch("deleteTodo", this.id);
				}
			}
		}
	};
</script>

<style lang="scss" scoped>
	.todo {
		&-item {
			background-color: gray;
			margin: 10px;
			padding: 10px;
			color: white;
			border-radius: 5px;
			font-size: 23px;

			&-content {
				margin-bottom: 10px;
				&-title {
					font-weight: bold;
				}
				&-description {
					font-size: 19px;
				}
			}
		}
	}
	.app {
		&-btn {
			margin-right: 5px;
			font-size: 15px;
			padding: 10px;
			border-radius: 5px;
			color: #fff;
			background-color: #795899;
			font-weight: bold;
			border: none;
			&:hover {
				cursor: pointer;
			}
		}
		&-form {
			.label {
				display: block;
				font-size: 18px;
				font-weight: bold;
			}
			.form-input {
				border: none;
				border-radius: 5px;
				padding: 5px;
				font-size: 17px;
			}
			.form-control {
				margin-bottom: 5px;
			}
		}
	}
</style>