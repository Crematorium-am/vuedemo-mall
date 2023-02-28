<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button" :is-checked="isCheckedAll"></check-button>
      <span @click="checkAll">全选</span>
    </div>
      <div class="count">
        总计¥:{{totalPrice}}
      </div>
      <div class="calc">去结算</div>
  </div>
  </template>

<script>
  import CheckButton from '@/components/content/CheckButton/CheckButton'
  import { mapGetters } from 'vuex';

  export default {
    name: 'CartBottomBar',
    components: {
      CheckButton
    },
    computed: {
      ...mapGetters(['cartList']),
      totalPrice(){
        return this.cartList.filter(item => item.isChecked)
                            .reduce((total, item) => { return total + item.price * item.count },0)
      },
      isCheckedAll(){
        if(!this.cartList.length) return false
        return this.cartList.filter(item => item.isChecked).length === this.cartList.length
      }
    },
    methods: {
      checkAll(){
        if(this.isCheckedAll){
          this.$store.commit('cartCheckedAll', false)
        }else{
          this.$store.commit('cartCheckedAll', true)
        }
      }
    }
  }
</script>

<style scoped>
  .bottom-bar{
    position: relative;
    display: flex;
    height: 40px;
    line-height: 40px;
    border-top: 2px solid #eee;
    box-shadow: 0px 2px 2px #eee;
  }
  .check-button{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 10px;
  }
  .check-content{
    display: flex;
    align-items: center;
    font-size: 13px;
    margin-left: 10px;
    width: 60px;
  }
  .count{
    color: #ff5777;
    padding-left: 50px;
    flex: 1;
    font-size: 13px;
  }
  .calc{
  width: 90px;
    color: white;
    text-align: center;
    background-color: #ff8198;
    font-size: 14px;
  }
</style>