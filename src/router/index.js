import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Cart = () => import('@/views/cart/Catr.vue')
const Profile = () => import('@/views/profile/Profile.vue')
const GoodsList = () => import('@/views/category/childComps/Goods_list.vue')
const GoodsDetail = () => import('@/views/goods_detail/goods_detail.vue')


Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/goods_list/:cid', //当路由携带返回参数时，需要以:xx格式编写代码
    name: 'GoodsList',
    component: GoodsList
  },
  {
    path: '/goods_detail',
    name: 'GoodsDetail',
    component: GoodsDetail
  }
]

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return originalReplace.call(this, location).catch(err => err)
}


const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
