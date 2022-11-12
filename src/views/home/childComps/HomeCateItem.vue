<template>
  <div class="cateitems">
    <div class="cate-item" v-for="(item, index) in catitems" :key="index">
      <img :src="item.image_src" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeCateItem',
    props: {
      catitems: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .cateitems{
    display: flex;
    padding: 10px 0px 20px 0px;
  }

  .cate-item{
    flex: 1;
    padding: 10px;
  }

  .cate-item img{
    width: 100%
  }
</style>