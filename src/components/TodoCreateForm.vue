<template>
	<form class="app-form">
		<div class="form-control">
			<label class="label">Title</label>
			<input v-model="title" type="text" class="form-input" />
		</div>
		<div class="form-control">
			<label class="label">Description</label>
			<textarea v-model="description" type="text" class="form-input" rows="5" cols="25"></textarea>
		</div>
		<div class="app-error">
			<div class="form-error">{{errorMessage}}</div>
		</div>
		<button type="button" @click="confirmCreate" class="app-btn is-primary">Confirm</button>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				title: "",
				description: "",
				errorMessage: ""
			};
		},
		methods: {
			confirmCreate() {
				if (
					this.title.trim().length <= 8 ||
					this.description.trim().length <= 10
				) {
					this.errorMessage =
						"Invalid form inputs!\n Title must be greater than 8 characters & description must be greater than 10 characters";
					return;
				}
				this.$emit("createTodo", {
					title: this.title,
					description: this.description
				});
				this.title = "";
				this.description = "";
			}
		}
	};
</script>

<style lang="scss" scoped>
	.app {
		&-form {
			.label {
				display: block;
				font-size: 18px;
				font-weight: bold;
			}
			.form-input {
				padding: 10px;
				font-size: 17px;
			}
			.form-control {
				margin-bottom: 10px;
			}
			.form-error {
				margin: 5px 0 10px 0;
			}
		}
		&-error {
			color: #ff1212;
		}
		&-btn {
			font-size: 20px;
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
	}
</style>