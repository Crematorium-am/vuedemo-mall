<template>
  <div class="home-floor">
    <div class="floor-item" v-for="(item, index) in catitems" :key="index">
      <img :src="item.image_src" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Homefloor',
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
  .home-floor{
    display: flex;
    padding: 10px 0px 20px 0px;
  }

  .floor-item{
    flex: 1;
  }

  .floor-item img{
    width: 100%
  }
</style>