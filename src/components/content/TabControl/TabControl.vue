<template>
  <div class="tab_control">
    <p v-for="(item, index) in tabcontrol" :key="index" @click="currentClick(index)" :class="{isactive: currentIndex === index}">{{item}}</p>
  </div>
</template>

<script>
  export default {
    name: 'TabControl',
    data(){
      return {
        currentIndex : 0
      }
    },
    props: {
      tabcontrol: {
        type: Array,
        default(){
          return []
        }
      }
    },
    methods: {
      currentClick(i){
        this.currentIndex = i
      }
    }
  }
</script>

<style scoped>
  .tab_control{
    display: flex;
    text-align: center;
    box-shadow: 0px 1px 1px #eee;
  }
  p{
    flex: 1;
    padding: 13px 0;
    font-size: 14px;
  }
  .isactive{
    color: var(--color-tint);
    border-bottom: 2px solid var(--color-tint);
  }
</style>