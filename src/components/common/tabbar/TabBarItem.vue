<template>
  <!-- 
    组件标签名将用下面整个div来替换，
    而组件的标签里面的内容将div里面slot替换掉
  -->
  <div class="tab-item" @click="dict">
    <div v-if="!isactive"><slot name="img"></slot></div>
    <div v-else><slot name="img-o"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: 'TabBarItem',
    data(){
      return {
        //isactive: false,
        
      }
    },
    props: {
      itempath: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      dict(){
        this.$router.replace(this.itempath)
      }
    },
    computed: {
      isactive(){
        return this.$route.path.indexOf(this.itempath) !== -1
        //通过indexOf判断pathyuitempath是否相等，如果不相等结果为-1
      },
      activeStyle(){
        return this.isactive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style>
  .tab-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 12px;
  }

  .tab-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    margin-bottom: 4px;
    vertical-align: middle;
  }
</style>