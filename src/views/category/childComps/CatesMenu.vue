<template>
  <div class="catas_menu">
    <ul>
      <li v-for="(item, index) in cate_name_list" :key="index" @click="cateclick(index)" :class="{currentStyle:currentCate===index}">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CatesMenu',
    data(){
      return {
        currentCate: 0
      }
    },
    props: {
      cate_name_list: {
        type: Array,
        default: []
      }
    },
    methods: {
      cateclick(i){
        if(i !== this.currentCate){
          this.currentCate = i
          this.$emit('chooseCate', i)
        }
      },
    }
  }
</script>

<style scoped>
  li{
    font-size: 14px;
    text-align: center;
    list-style: none;
    padding: 10px;
  }
  .currentStyle{
    color: #ff5777;
    border-left: #ff5777 solid 3px;
  }
</style>