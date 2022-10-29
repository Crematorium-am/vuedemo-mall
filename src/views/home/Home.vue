<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">首页</div>
    </nav-bar>
    <home-swiper :swiperdata="swiperdata"></home-swiper>
    <home-floor :catitems="catitems"></home-floor>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeFloor from './childComps/HomeFloor'

  import {getswiperdata, getcatitems} from '@/networks/home/home.js'

  export default {
    name: 'Home',
    data(){
      return {
        swiperdata: [],
        catitems: []
      }
    },
    components: {
      NavBar,
      HomeSwiper,
      HomeFloor
    },
    created(){
      getswiperdata().then(res => {
        this.swiperdata = res.message
      }),

      getcatitems().then(res => {
        this.catitems = res.message
      })
    },
    methods: {
      
    }
  }
</script>


<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: white;
  /*position: fixed;*/
  /*  left: 0;*/
  /*  top: 0;*/
  /*  right: 0;*/
  /*  z-index: 9;*/
}

#home {
  height: 100vh;
  position: relative;
}

/*.tabcontrol{*/
/*  position: sticky;*/
/*  top: 44px;*/
/*  z-index: 9;*/
/*}*/
.content {
  /*height: calc(100% - 50px);*/
  /*overflow: hidden;*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;

}

.tabcontrol {
  position: relative;
  z-index: 9;
}

</style>