<template>
	<div class="modal" :style="isActive ? {display:'block'} : {display:'none'}">
		<div class="modal-content">
			<span class="close" @click="closeModal">&times;</span>
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ["isActive"],
		methods: {
			closeModal() {
				this.$emit("close");
			}
		}
	};
</script>

<style lang="scss" scoped>
	.close {
		color: #aaa;
		float: right;
		font-size: 28px;
		font-weight: bold;
		line-height: 8px;

		&:hover {
			cursor: pointer;
		}
	}
	.modal {
		display: none;
		position: fixed;
		z-index: 10;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba($color: #000000, $alpha: 0.4);

		&-content {
			background-color: #fefefe;
			margin: 15% auto;
			padding: 20px;
			width: 80%;
			border: 1px solid #888;
			text-align: left;
		}
	}
</style>