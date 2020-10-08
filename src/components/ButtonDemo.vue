<template>
  <div>Button示例</div>
  <h1>示例一</h1>
  <div>
    <Button>你好</Button>
    <Button theme="button">你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
  <h1>示例二</h1>
  <div>
    <Button>默认默认</Button>
    <Button size="big">大大大大</Button>
    <Button size="normal">正常正常</Button>
    <Button size="small">小小小小</Button>
  </div>
  <h1>示例三</h1>
  <div>
    <Button>默认</Button>
    <Button level="main">主要按钮</Button>
    <Button level="normal">正常按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <h1>示例四</h1>
  <div>
    <Button disabled>不可操作</Button>
    <Button :disabled="true">不可操作</Button>
  </div>
  <h1>示例五</h1>
  <div>
    <Button loading>加载中</Button>
    <Button :loading="true">加载中</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: { Button },
};
</script>
