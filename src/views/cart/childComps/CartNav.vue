<template>
  <div class="cart_nav">
    <nav-bar>
      <div slot="center">购物车({{getCartList}})</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  import { mapGetters } from 'vuex'  //从vue导入一个mapGetters

  export default {
    name: 'CartNav',
    components: {
      NavBar
    },
    //mapGetters可以将store中的getters映射到局部计算属性中
    computed: {
      //数组方式映射
      ...mapGetters(['getCartList']),

      //对象方式映射,可以给原getters起别名
      // ...mapGetters({
      //   cartList: 'getCartList'
      // })
    }
  }
</script>

<style scoped>
  .cart_nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
