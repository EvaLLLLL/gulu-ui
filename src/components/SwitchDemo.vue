<template>
	<h1>Switch 组件示例 </h1>
	<Demo :component="Switch1Demo"/>
	<Demo :component="Switch2Demo"/>
</template>

<script lang="ts">
	import Demo from '../components/Demo.vue';
	import {Switch, Button} from '../lib/index.ts';
	import Switch1Demo from '../components/Switch1.demo.vue';
	import Switch2Demo from '../components/Switch2.demo.vue';
	
	export default {
		components: {
			Switch,
			Button,
			Demo
		},
		setup() {
			return {Switch1Demo, Switch2Demo};
		}
	};
</script>