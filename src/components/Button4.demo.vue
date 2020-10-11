<demo>
	disabled 样式示例
</demo>

<template>
	<div>
		<Button disabled>不可操作</Button>
		<Button :disabled="true">不可操作</Button>
	</div>
</template>

<script lang="ts">
	import {Button} from '../lib/index.ts';
	
	export default {
		components: {Button}
	};
</script>