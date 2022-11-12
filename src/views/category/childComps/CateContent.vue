<template>
  <div class="cate_content">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'CateContent',
    props: {
    }
  }
</script>

<style scoped>
  .cate_content{
    padding-top: 10px;
  }
</style>
