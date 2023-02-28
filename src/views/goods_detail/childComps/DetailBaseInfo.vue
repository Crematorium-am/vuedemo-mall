<template>
  <div v-if="Object.keys(baseInfo).length !== 0" class="base_info">  <!-- 通过Object.keys(对象实例)来判断数据是否为空，为空则不显示-->
    <div class="name">{{baseInfo.name}}</div>
    <div class="collect">
      <div class="collect_icon"></div>
      <p>收藏</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailBaseInfo',
    props: {
      baseInfo: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .base_info{
    display: flex;
    margin: 10px 0 0 0;
    padding: 8px;
    font-size: var(--font-size);
    border-top: 2px solid #eee;
    border-bottom: 2px solid #eee;
    
  }
  .name{
    flex: 4;
    margin-right: 10px;
    display:-webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
  }
  .collect{
    flex: 1;
    text-align: center;
    overflow: hidden;
    border-left: 1px solid #000;
  }
  .collect_icon{
    margin: auto;
    width: 17px;
    height: 17px;
    background: url("~@/assets/img/detail/detail_bottom.png") 0 0/100%;
  }
</style>