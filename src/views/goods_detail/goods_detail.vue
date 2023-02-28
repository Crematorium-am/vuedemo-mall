<template>
  <div class="goods_detail">
    <!-- 
      导航
      页面：
          1.轮播图
          2.内容
          3.底部菜单
     -->
    <nav-bar class="detail_nav" ref="nav">
      <div slot="left" @click="backLast">back</div>
      <div slot="center" class="titles">
        <p v-for="(item, index) in titles" :key="index" :class="{isactive: index == currentIndex}" @click="currentClick(index)">{{item}}</p>
      </div>
      <div slot="right">...</div>
    </nav-bar>
    <Scroll ref="scroll" class="detail_ctn" @scroll="contentScroll" :probeType=3>
      <detail-swiper :pics="pics"></detail-swiper>
      <div class="pirce">￥{{goodsPrice}}</div>
      <detail-base-info :baseInfo="baseInfo" ref="base"></detail-base-info>
      <detail-introduce :introduceInfo="introduceInfo" ref="introduce"></detail-introduce>
      <detail-comment-info ref="comment"></detail-comment-info>
      <detail-recommend-info ref="recommend"></detail-recommend-info>
    </Scroll>
    <bottom-nav @addToCart="addToCart"></bottom-nav>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import Scroll from '@/components/common/scroll/Scroll'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailIntroduce from './childComps/DetailIntroduce'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import DetailRecommendInfo from './childComps/DetailRecommendInfo'
  import BottomNav from './childComps/BottomNav'

  import { getDetail,BaseInfo } from '@/networks/detail'
  import { debounce } from '@/common/utils'

  export default {
    name: 'goods_detail',
    data(){
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0,
        gid: null,
        pics: [],
        goodsPrice: 0,
        baseInfo: {},
        introduceInfo: '',
        CompsY: [],
        getCompsY: null
      }
    },
    components: {
      NavBar,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailIntroduce,
      DetailCommentInfo,
      DetailRecommendInfo,
      BottomNav,
    },
    created(){
      this.gid = this.$route.params.gid
      this.getDetail()
      this.getCompsY = debounce(() => {
        this.$nextTick(() => {
          this.CompsY = [],
          this.CompsY.push(0)
          this.CompsY.push(this.$refs.introduce.$el.offsetTop)
          this.CompsY.push(this.$refs.comment.$el.offsetTop)
          this.CompsY.push(this.$refs.recommend.$el.offsetTop)
          this.CompsY.push(Number.MAX_VALUE)
        })
      },100)
    },
    mounted(){
      setTimeout(() => {
        this.$refs.scroll.refresh()
      }, 400)
    },
    updated(){
      this.getCompsY()
    },
    methods: {
      getDetail(){
        getDetail(this.gid).then(res => {
          this.pics = res.message.pics
          this.goodsPrice = res.message.goods_price
          //获取一个数据经过筛选后的实例
          this.baseInfo = new BaseInfo(res.message)
          this.introduceInfo = res.message.goods_introduce
        })
      },
      backLast(){
        this.$router.back()
      },
      currentClick(i){
        this.currentIndex = i
        this.$refs.scroll.scrollTo(0, -this.CompsY[i])
      },
      contentScroll(position){
        const positionY = -position.y
        let length = this.CompsY.length
        for (let i = 0; i < length-1; i++) {
          if((this.currentIndex !== i) && ((positionY >= this.CompsY[i]) && (positionY <= this.CompsY[i+1]))){
            this.currentIndex = i
          }
        }
      },
      addToCart(){
        this.$store.dispatch('addToCart', {
          gid: this.gid,
          name: this.baseInfo.name,
          price: this.goodsPrice,
          pic: this.pics[0].pics_sma
        }).then(res => {
          this.$toast.showControl(res)
        })
      }
    }
  }
</script>

<style scoped>
  .detail_nav{
    border-bottom: 1px solid #ddd;
  }
  .detail_ctn{
    height: calc(100vh - 93px);
    overflow: hidden;
  }
  .titles{
    display: flex;
    justify-content: space-around;
  }
  p{
    text-align: center;
    font-size: var(--font-size);
  }
  .isactive{
    color: var(--color-high-text);
  }
  .pirce{
    color: var(--color-high-text);
    margin: 10px 0 0 10px;
  }
</style>