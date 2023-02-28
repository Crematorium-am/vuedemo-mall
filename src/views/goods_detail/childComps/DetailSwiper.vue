<template>
  <div class="detail_swiper">
    <Swiper>
      <swiper-item v-for="(item, index) in pics" :key="index" class="img_style" @load="imageLoad">
        <img :src="item.pics_mid" alt="">
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import Swiper from '@/components/common/swiper/Swiper'
  import SwiperItem from '@/components/common/swiper/SwiperItem'

  export default {
    name: 'DetailSwiper',
    props: {
      pics: {
        type: Array,
        default(){
          return []
        }
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad(){
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .img_style{
    height: 280px;
    text-align: center;
  }
  img{
    width: 70% !important;
  }
</style>