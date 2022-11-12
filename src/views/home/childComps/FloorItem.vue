<template>
  <div class="floor-item">
    <div class="item-title">
      <img :src="flooritem.floor_title.image_src" alt="">
    </div>
    <div class="item_content">
      <div class="left_con">
        <img :src="flooritem.product_list[0].image_src" alt="">
      </div>
      <div class="right_con">
        <div class="right_img">
          <div v-for="(i, z) in flooritem.product_list.length-1" :key="z" class="items">
            <img :src="flooritem.product_list[z+1].image_src" alt="" @load="swiperImageLoad">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FloorItem',
    props: {
      flooritem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      swiperImageLoad(){
        this.$bus.$emit('swiperImageLoad')
      }
    }
  }
</script>

<style>
  .floor-item{
    margin: 0 0 16px 0;
  }

  img{
    width: 100%;
  }

  .item_content{
    display: flex;
  }

  .left_con{
    flex: 1;
  }

  .right_con{
    flex: 2;
  }

  .right_img{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
  }

  .items{
    width: 48%;
    height: 27.19711207vw;
    overflow: hidden;
  }

  .right_img div:nth-child(1),
  .right_img div:nth-child(2){
    margin-bottom: 4px;
  }

  .items img{
    width: 100%;
    height: 100%;
  }
</style>