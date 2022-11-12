<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">分类</div>
    </nav-bar>
    <div class="scroll-content">
      <Scroll class="cates_name" ref="scroll1" :data="cate_name_list">
        <cates-menu :cate_name_list="cate_name_list" @chooseCate="chooseCate"></cates-menu>
      </Scroll>
      <Scroll class="cates_content" :probeType="3" :pullUpLoad="true" ref="scroll2" @scroll="contentScroll">
        <cate-content>
          <cate-item v-for="(item, index) in cate_child_list" :key="index" :child_list="cate_child_list[index]"></cate-item>
        </cate-content>
      </Scroll>
    </div>
    <back-top @click.native="backtopclick" v-show="isshow"></back-top>  <!-- 当需要监听组件的原生事件的，需要加.native -->
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import BackTop from '@/components/content/Backtop/BackTop'
  import CatesMenu from './childComps/CatesMenu'
  import CateContent from './childComps/CateContent'
  import CateItem from './childComps/CateItem'

  import { getcategories } from '@/networks/category'
  import { debounce } from '@/common/utils'

  export default {
    name: 'category',
    data(){
      return {
        isshow: false,

        cates: [],
        cate_name_list: [],
        cate_child_list: []
      }
    },
    components: {
      NavBar,
      Scroll,
      BackTop,
      CatesMenu,
      CateContent,
      CateItem
    },
    created(){
      this.getcategories()
    },
    methods: {
      //放回顶层
      backtopclick(){
        this.$refs.scroll2.scrollTo(0, 0)
      },
      
      //封装网络请求
      getcategories(){
        getcategories().then(res => {
          this.cates = res.message
          this.cate_name_list = this.cates.map(v => v.cat_name)
          this.cate_child_list = this.cates[0].children
        })
      },

      //滚动事件
      contentScroll(position){       
        this.isshow = -(position.y) > 1000
      },

      //侧边栏点击切换
      chooseCate(i){
        this.cate_child_list = this.cates[i].children
        this.backtopclick()
      },

    },
    mounted(){    
      const res = debounce(this.$refs.scroll2.refresh, 100)

      this.$bus.$on('imageLoad', () => {
        res()
      })    
    },
    computed: {
      
    },
    activated(){
      this.$refs.scroll2.refresh()
    },
  }
</script>

<style scoped>
  .category-nav{
    background-color: var(--color-tint);
    color: white;
  }
  .scroll-content{
    display: flex;
  }
  .cates_name{
    height: calc(100vh - 93px);
    overflow: hidden;
    flex: 1;
    border-right: 1px solid #eee;
  }
  .cates_content{
    height: calc(100vh - 93px);
    overflow: hidden;
    flex: 3;
  }
</style>