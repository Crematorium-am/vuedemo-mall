<template>
  <div class="list_item">
    <div class="left_img">
      <img :src="goods.goods_small_logo ? goods.goods_small_logo : 'https://ww1.sinaimg.cn/large/007rAy9hgy1g24by9t530j30i20i2glm.jpg'" alt="" @load="imageLoad">
    </div>
    <div class="right_ctn">
      <p class="context">{{goods.goods_name}}</p>
      <p class="price">￥{{goods.goods_price}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GoodsListItem',
    props: {
      goods: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$bus.$emit('goodsImageLoad')
      }
    }
  }
</script>

<style scoped>
  .list_item{
    display: flex;
    border-bottom: 1px solid #ddd;
  }
  .left_img{
    flex: 1;
    text-align: center;
    margin-left: 10px;
  }
  .right_ctn{
    flex: 2;
    font-size: 14px;
    position: relative;
    margin-right: 10px;
  }
   .context{
    margin: 20px 0 0 10px;
  }
  .price{
    position: absolute;
    left: 10px;
    bottom: 10px;
    color: var(--color-high-text);
  }
  img{
    width: 90%;
    height: 90%;
  }
</style>