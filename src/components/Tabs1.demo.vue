<demo>
	示例一
</demo>

<template>
	<Tabs v-model:selected="x">
		<Tab title="导航1">内容一</Tab>
		<Tab title="导航2222222">内容二</Tab>
	</Tabs>
</template>

<script lang="ts">
	import {Tabs, Tab} from '../lib/index.ts';
	import {ref} from 'vue';
	
	export default {
		components: {Tabs, Tab},
		setup() {
			const x = ref('导航1');
			return {x};
		}
	};
</script>