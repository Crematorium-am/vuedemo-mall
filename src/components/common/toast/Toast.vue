<template>
  <div class="toast" v-show="isShow">
    <span>{{msg}}</span>
  </div>
</template>

<script>
  export default {
    name: 'Toast',
    data(){
      return {
        isShow: false,
        msg: ''
      }
    },
    methods: {
      showControl(res='文字提示', delay=2000){
        this.isShow = true
        this.msg = res
        setTimeout(() => {
          this.isShow = false
          this.msg = ''
        },delay)
      }
    }
  }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 5px 20px;
    border-radius: 5px;
  }
</style>