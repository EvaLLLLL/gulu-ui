<demo>
	示例一
</demo>

<template>
	<Button @click="toggle">toggle</Button>
	<Dialog
			v-model:visible="x"
			:closeOnClickOverlay="false"
			:ok="f1"
			:cancel="f2"
	>
		<template v-slot:content>
			<div>你好</div>
			<div>hi</div>
		</template>
		<template v-slot:title>
			<strong>加粗的标题</strong>
		</template>
	</Dialog>
</template>

<script lang="ts">
	import {Dialog, Button} from '../lib/index.ts';
	import {ref} from 'vue';
	
	export default {
		components: {Dialog, Button},
		setup() {
			const x = ref(false);
			const toggle = () => {
				x.value = !x.value;
			};
			const f1 = () => {
				return false;
			};
			const f2 = () => {
			};
			return {x, toggle, f1, f2};
		}
	};

</script>