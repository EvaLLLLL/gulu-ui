<demo>
	按钮等级示例
</demo>

<template>
	<div>
		<Button>默认</Button>
		<Button level="main">主要按钮</Button>
		<Button level="normal">正常按钮</Button>
		<Button level="danger">危险按钮</Button>
	</div>
</template>

<script lang="ts">
	import {Button} from '../lib/index.ts';
	
	export default {
		components: {Button}
	};
</script>