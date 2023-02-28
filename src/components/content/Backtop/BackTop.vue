<template>
  <div class="back_top">
    <img src="~@/assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'BackTop',
    methods: {
      
    },
  }
</script>

<style scoped>
  img{
    width: 50px;
    height: 50px;
    opacity: 0.6;
  }
  .back_top{
    position: absolute;
    right: 6px;
    bottom: 50px;
  }
</style>