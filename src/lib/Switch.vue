<template>
	<button
			class="gulu-switch"
			@click="toggle"
			:class="{ 'gulu-checked': value }"
	>
		<span></span>
	</button>
</template>

<script lang="ts">
	export default {
		props: {
			value: Boolean,
		},
		setup(props, context) {
			const toggle = () => {
				context.emit('update:value', !props.value);
			};
			return {toggle};
		},
	};
</script>

<style lang="scss">
	$h: 22px;
	$h2: $h - 4px;
	.gulu-switch {
		height: $h;
		width: $h * 2;
		border: none;
		background: #bbbbbb;
		border-radius: $h/2;
		position: relative;
		> span {
			position: absolute;
			top: 2px;
			left: 2px;
			height: $h2;
			width: $h2;
			border-radius: $h2/2;
			background: white;
			transition: left 350ms;
		}
		&:focus {
			outline: none;
		}
		&:active {
			> span {
				width: $h2 + 4px;
			}
		}
		&.gulu-checked {
			background: skyblue;
			> span {
				left: calc(100% - #{$h2} - 2px);
			}
			&:active {
				> span {
					width: $h2 + 4px;
					margin-left: -4px;
				}
			}
		}
	}
</style>
