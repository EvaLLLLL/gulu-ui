<demo>
	示例二
</demo>

<template>
	<Button @click="showDialog">show</Button>
</template>

<script lang="ts">
	import {openDialog} from '../lib/openDialog';
	import Button from '../lib/Button.vue';
	
	export default {
		components: {Button},
		setup() {
			const showDialog = () => {
				openDialog({
					title: '标题',
					content: '内容内容内容内容内容内容内容内容',
					ok() {
						console.log('ok');
					},
					cancel() {
						console.log('cancel');
					},
				});
			};
			return {showDialog};
		},
	};
</script>