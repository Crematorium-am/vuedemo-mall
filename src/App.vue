<template>
  <div id="app">
    <keep-alive exclude="goods_list">   <!-- keep-alive中可以是include或者exclude对组件进行选择性缓存或者不缓存 -->
      <router-view></router-view>  
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabbar from '@/components/content/MainTabbar/MainTabbar';

  export default {
    name: "App",
    data(){
      return {
      }
    },
    components: { 
      MainTabbar
    },
  }
</script>

<style>
  @import url(./assets/css/base.css);
</style>
