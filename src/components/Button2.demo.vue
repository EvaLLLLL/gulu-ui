<demo>
	按钮大小示例
</demo>

<template>
	<div>
		<Button>默认默认</Button>
		<Button size="big">大大大大</Button>
		<Button size="normal">正常正常</Button>
		<Button size="small">小小小小</Button>
	</div>
</template>

<script lang="ts">
	import {Button} from '../lib/index.ts';
	
	export default {
		components: {Button}
	};
</script>