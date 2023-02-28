<template>
  <div class="cart">
    <cart-nav></cart-nav>
    <Scroll class="content">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"></cart-list-item>
    </Scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartNav from './childComps/CartNav'
  import Scroll from '@/components/common/scroll/Scroll'
  import CartListItem from './childComps/CartListItem'
  import CartBottomBar from './childComps/CartBottomBar'

  import { mapGetters } from 'vuex'

  export default {
    name: 'Cart',
    components: {
      CartNav,
      Scroll,
      CartListItem,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartList'])
    }
  }
</script>

<style scoped>
  .content{
    height: calc(100vh - 93px - 40px);
    overflow: hidden;
  }
</style>