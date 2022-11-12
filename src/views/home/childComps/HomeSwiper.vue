<template>
  <div>
    <Swiper>     
      <swiper-item v-for="(item, index) in swiperdata" :key="index">
        <a :href="item.navigator_url">
          <img :src="item.image_src" alt="">
        </a>
      </swiper-item>
    </Swiper>
  </div>
</template>

<script>
  import {Swiper, SwiperItem} from '@/components/common/swiper/index'

  export default {
    name: 'HomeSwiper',
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      swiperdata: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      // swiperImageLoad(){
      //   this.$emit('swiperImageLoad')
      // }
    }
  }
</script>

<style>
  
</style>