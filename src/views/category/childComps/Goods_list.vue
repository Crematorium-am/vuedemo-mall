<template>
  <div class="goods_list">
    <nav-bar class="category-nav">
      <div slot="left" @click="backRoute">back</div>
      <div slot="center">商品列表</div>
    </nav-bar>
    <tab-control :tabcontrol = "['综合', '销量', '价格']"></tab-control>
    <Scroll class="content" ref='scroll' :probeType=3 :pullUpLoad=true @loadMore="loadMore"> 
      <goods-list-item v-for="(item, index) in goodsList" :key="index" :goods="item"></goods-list-item>
    </Scroll>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import TabControl from '@/components/content/TabControl/TabControl'
  import Scroll from '@/components/common/scroll/Scroll'
  import GoodsListItem from './GoodsListItem'

  import { getGoodsList } from '@/networks/category'
  import { debounce } from '@/common/utils'

  export default {
    name: 'goods_list',
    data(){
      return {
        goodsList: [],
        
        cid: null,
        pagenum: 0,
        pagesize: 10,
        //用来记录请求数据的大小，判断是否为请求的最后一页
        sort: null
      }
    },
    components: {
      NavBar,
      TabControl,
      Scroll,
      GoodsListItem
    },
    created(){
      //console.log('created')
      this.cid = this.$route.params.cid
      this.getGoodsList(this.cid, this.pagesize)
    },
    destroyed(){
      // console.log('destroyed')
      // console.log(this.goodsList)
    },
    mounted(){
      const res = debounce(this.$refs.scroll.refresh, 100)
      this.$bus.$on('goodsImageLoad', () => {
        res()
      })
    },
    methods: {
      //判断路由参数是否已发生变化而进行初始化
      // init(){
      //   if(this.cid !== this.$route.params.cid){
      //     this.goodsList = []
      //     this.cid = this.params.cid
      //     this.pagenum = 0         
      //     this.getGoodsList(this.cid, this.pagesize)
      //   }
      // },

      //网络请求
      getGoodsList(cid, pagesize){
        const pagenum = this.pagenum + 1
        this.pagenum ++
        getGoodsList(cid, pagenum, pagesize).then(res => {
          this.goodsList = [...this.goodsList, ...res.message.goods] //es6语法，对象或者数组的解构
          this.sort = res.message.goods.length
        })
      },
      //返回上一个路由
      backRoute(){
        this.$router.back()
      },
      //上拉加载更多
      loadMore(){
        this.getGoodsList(this.cid, this.pagesize)
        if(this.sort >= this.pagesize){
          this.$refs.scroll.finishPullUp()
        }
      }
    }
  }
</script>

<style scoped>
  .category-nav{
    background-color: var(--color-tint);
    color: var(--color-background);
  }
  .content{
    background: var(--color-background);
    height: calc(100vh - 88px);
    position: relative;
    z-index: 10;
    overflow: hidden;
  }
</style>
