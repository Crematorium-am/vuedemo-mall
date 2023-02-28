<template>
  <div id="app">
    <keep-alive exclude="goods_list,goods_detail">   <!-- keep-alive中可以是include或者exclude对组件进行选择性缓存或者不缓存 -->
      <router-view></router-view>  
    </keep-alive>
    <main-tabbar v-show="isshow"></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from '@/components/content/MainTabbar/MainTabbar';

  export default {
    name: "App",
    data(){
      return {
        isshow: true
      }
    },
    components: { 
      MainTabbar
    },
    mounted(){
    },
    //监听路由变化，设置底部导航显示状态
    watch: {
      '$route'(to, from){
        this.isshow = to.meta.closeTabbar
      }
    }
  }
</script>

<style>
  @import url(./assets/css/base.css);
</style>
