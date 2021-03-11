import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/home.vue'
import Search from '@/pages/search.vue'
import Message from '@/pages/message.vue'
import MyPage from '@/pages/myPage.vue'
import User from '@/pages/userInfo.vue'

Vue.use(VueRouter)

const mulePath = "/ecc/hisimaru/works/mule/";
const routes = [
  {
    path: mulePath,
    name: 'Home',
    component: Home
  },
  {
    path: mulePath+'search',
    name: 'Search',
    component: Search
  },
  {
    path: mulePath+'message',
    name: 'Message',
    component: Message
  },
  {
    path: mulePath+'myPage',
    name: 'MyPage',
    component: MyPage
  },
  {
    path: mulePath+'userInfo',
    name: 'User',
    component: User
  },
]

// ローカル
//   const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/search',
//     name: 'Search',
//     component: Search
//   },
//   {
//     path: '/message',
//     name: 'Message',
//     component: Message
//   },
//   {
//     path: '/myPage',
//     name: 'MyPage',
//     component: MyPage
//   },
//   {
//     path: '/userInfo',
//     name: 'User',
//     component: User
//   },
// ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
