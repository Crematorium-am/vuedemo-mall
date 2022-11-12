<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <Scroll ref="scroll" :probeType=3 class="content">
      <home-swiper :swiperdata="swiperdata"></home-swiper>
      <home-cate-item :catitems="catitems"></home-cate-item>
      <home-floor :floordata="floordata"></home-floor>
    </Scroll>
  </div>
</template>             

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeCateItem from './childComps/HomeCateItem'
  import HomeFloor from './childComps/HomeFloor'

  import { getswiperdata, getcatitems, getFloordata } from '@/networks/home'
  import { debounce } from '@/common/utils'

  export default {
    name: 'Home',
    data(){
      return {
        swiperdata: [],
        catitems: [],
        floordata: [],

        scrollY: 0
      }
    },
    components: {
      NavBar,
      Scroll,
      HomeSwiper,
      HomeCateItem,
      HomeFloor
    },
    created(){
      //调用网络请求的方法
      this.getswiperdata()
      this.getcatitems()
      this.getFloordata()
    },
    mounted(){
      const res = debounce(this.$refs.scroll.refresh, 100)

      this.$bus.$on('swiperImageLoad', () => {
        res()
      })
    },
    methods: {
      //网络请求方法
      getswiperdata(){
        getswiperdata().then(res => {
          this.swiperdata = res.message
        })
      },
      getcatitems(){
        getcatitems().then(res => {
          this.catitems = res.message
        })
      },
      getFloordata(){
        getFloordata().then(res => {
          this.floordata = res.message
        })
      },
    },
    activated(){
      this.$refs.scroll.scrollTo(0, this.scrollY, 0)
    },
    deactivated(){
      this.scrollY = this.$refs.scroll.getScrollY()
    }
  }
</script>


<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
}

.content {
  height: calc(100vh - 93px);
  overflow: hidden;
}
</style>