<demo>
	加载中示例
</demo>

<template>
	<div>
		<Button loading>加载中</Button>
		<Button :loading="true">加载中</Button>
	</div>
</template>

<script lang="ts">
	import {Button} from '../lib/index.ts';
	
	export default {
		components: {Button}
	};
</script>