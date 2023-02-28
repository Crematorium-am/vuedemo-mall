import BackTop from '@/components/content/Backtop/BackTop'
import { debounce } from './utils'

//在混入对象中，生命周期函数，方法，组件，data数据都是可以混入的
export const BackTopMixin = {
  data() {
    return {
      isshow: false
    }
  },
  methods: {
    backTop(){
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position){
      this.isshow = -(position.y) > 1000
    },
  },
  components: {
    BackTop
  }
}

export const itemListenerMixin = {
  data(){
    return {
      itemImgListener: null,
      newrefresh: null
    }
  },
  mounted() {
    this.itemImgListener = debounce(this.$refs.scroll.refresh, 100)
    this.newrefresh = () => {
      this.itemImgListener()
    },
    this.$bus.$on('imageLoad', this.itemImgListener)
  },
}