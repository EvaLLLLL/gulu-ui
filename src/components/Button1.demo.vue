<demo>
	按钮样式示例
</demo>

<template>
	<div>
		<Button>你好</Button>
		<Button theme="button">你好</Button>
		<Button theme="link">你好</Button>
		<Button theme="text">你好</Button>
	</div>
</template>

<script lang="ts">
	import {Button} from '../lib/index.ts';
	
	export default {
		components: {Button}
	};
</script>