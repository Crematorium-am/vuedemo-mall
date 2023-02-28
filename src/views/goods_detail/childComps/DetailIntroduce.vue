<template>
  <div v-if="introduceInfo !== ''" class="detail_introduce">
    <p class="title">图文详情</p>
    <div v-html="introduceInfo"></div>
  </div>
</template>

<script>
  export default {
    name: 'DetailIntroduce',
    props: {
      introduceInfo: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
  .title{
    color: var(--color-high-text);
    margin: 10px;
    font-size: 15px;
  }
</style>