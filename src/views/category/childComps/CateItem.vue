<template>
  <div class="cate_item">
    <div class="cate_title">/ {{child_list.cat_name}} /</div>
    <ul>
      <li v-for="(item, index) in this.child_list.children" :key="index" @click="toGoodsList(item.cat_id)">
        <img :src="item.cat_icon" alt="" @load="imageLoad">
        <p>{{item.cat_name}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CateItem',
    data(){
      return {
      }
    },
    props: {
      child_list: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      imageLoad(){
        this.$bus.$emit('imageLoad')
      },
      //路由跳转并携带参数
      toGoodsList(cid){
        this.$router.push('/goods_list/' + cid)
      }
    }
  }
</script>

<style scoped>
  .cate_item{
    text-align: center;
    font-size: 14px;
  }
  .cate_title{
    margin: 0 0 10px 0;
  }
  img{
    width: 60%;
  }

  ul{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-evenly;
  }

  ul li{
    width: 30%;
    list-style: none;
    font-size: 12px;
    margin-bottom: 10px;
  }
</style>
