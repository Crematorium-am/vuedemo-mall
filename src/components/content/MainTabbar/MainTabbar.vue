<template>
  <TabBar>
    <TabBarItem itempath="/home">
      <img slot="img" src="~@/assets/img/tabbar/home.svg" alt="">
      <img slot="img-o" src="~@/assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </TabBarItem>
    <TabBarItem itempath="/category">
      <img slot="img" src="~@/assets/img/tabbar/category.svg" alt="">
      <img slot="img-o" src="~@/assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </TabBarItem>
    <TabBarItem itempath="/cart">
      <img slot="img" src="~@/assets/img/tabbar/cart.svg" alt="">
      <img slot="img-o" src="~@/assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </TabBarItem>
    <TabBarItem itempath="/profile">
      <img slot="img" src="~@/assets/img/tabbar/profile.svg" alt="">
      <img slot="img-o" src="~@/assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar';
  import TabBarItem from '@/components/common/tabbar/TabBarItem';

  export default {
    name: 'MainTabbar',
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  
</style>