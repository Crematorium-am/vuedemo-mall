<template>
  <div id="shop-item">
    <div class="item-selector">
      <CheckButton :is-checked="itemInfo.isChecked" @click.native="checkClick"></CheckButton>
    </div>
    <div class="item-img">
      <img :src="itemInfo.pic" alt="商品图片">
    </div>
    <div class="item-info" @click="toDetail">
      <!-- <div class="item-title">{{itemInfo.title}}</div> -->
      <div class="item-desc">商品描述: {{itemInfo.name}}</div>
      <div class="info-bottom">
        <div class="item-price left">￥{{itemInfo.price}}</div>
        <div class="right">
          <button @click="decrease" :disabled="itemInfo.count === 1">-</button>
          <span class="item-count">{{itemInfo.count}}</span>
          <button @click="increase">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from '@/components/content/CheckButton/CheckButton'

  export default {
    name: 'CartListItem',
    props: {
      itemInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    components: {
      CheckButton
    },
    methods: {
      toDetail(){
        this.$router.push("/goods_detail/" + this.itemInfo.gid)
      },
      checkClick(){
        this.$store.commit('cartChecked', this.itemInfo)
      },
      decrease(event){
        this.$store.dispatch('subCount', this.itemInfo)
        event.stopPropagation()
      },
      increase(event){
        this.$store.dispatch('addCount', this.itemInfo)
        event.stopPropagation()
      }
    }
  }
</script>

<style scoped>
  #shop-item {
    width: 100%;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
  }
  .item-selector {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-title, .item-desc {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-img {
    padding: 5px;
    /*border: 1px solid #ccc;*/
  }
  .item-img img {
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
  }
  .item-info {
    width: 70%;
    font-size: 16px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
  }
  .item-info .item-desc {
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
  .info-bottom {
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
  }
  .info-bottom .item-price {
    color: orangered;
  }
  .right button{
    border: none;
    background: none;
    font-size: 16px;
    font-weight: bold;
    margin: 0 5px;
  }
  .item-count{
    font-size: 13px;
    padding: 0 15px;
    background: #eee;
    border-radius: 3px;
  }

</style>