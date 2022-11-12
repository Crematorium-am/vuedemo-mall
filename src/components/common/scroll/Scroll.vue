<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import bScroll from 'better-scroll'

  export default {
    name: 'Scroll',
    data(){
      return {
        bscroll: null,
      }
    },
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      },
      data: {
        type: Array,
        default(){
          return []
        }
      }
    },
    mounted(){
      //创建一个SCroll对象
      this.bscroll = new bScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      //触发滚动事件
      this.bscroll.on('scroll', positon => {    //this.bscroll.on监听scroll事件，参数position是记录的滚动位置
        this.$emit('scroll', positon)
      })

      //触发上拉事件
      if (this.pullUpLoad){   //当pullUpLoad为false时，this.bscroll.on('pullingUp',fun)会报错，故添加一层判断
        this.bscroll.on('pullingUp', () => {
          this.$emit('loadMore')
        })
      }
    },
    methods:{
      //滚动到指定位置
      scrollTo(x, y, time=500){
        this.bscroll && this.bscroll.scrollTo(x, y, time)  //this.bscroll.scrollTo()有三个参数，前两个是需要跳转的位置，第三个是滚动到要求位置的所用时间
      },
      //滚动刷新
      refresh(){
        this.bscroll && this.bscroll.refresh()
      },
      //获取当前滚动停留的位置
      getScrollY(){
        return this.bscroll ? this.bscroll.y : 0
      },
      //上拉动作的结束
      finishPullUp(){
        this.bscroll && this.bscroll.finishPullUp()
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.bscroll.refresh()
        }, 20)
      }
    }
  }
</script>

<style scoped>
</style>