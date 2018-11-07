import Vue        from 'vue'
import Router     from 'vue-router'
import YdIndex    from '@/pages/YdIndex'
import YdHomepage from '@/pages/YdHomepage'
import Shopping from '@/pages/shopping'
import Discount from '@/pages/discount'
import Voucher   from '@/pages/voucher'
import signin from  '@/pages/signin'
import admin from  '@/pages/admin'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'YdIndex',
      component: YdIndex
    },
    {
      path: '/YdHomepage',
      name: 'YdHomepage',
      component: YdHomepage
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path:'/Discount',
      name:'Discount',
      component: Discount
    },
    {
      path:'/Voucher',
      name:'Voucher',
      component: Voucher
    },
    {
      path:'/signin',
      name:'signin',
      component: signin
    },
    {
      path:'/admin',
      name:'admin',
      component:admin,
    }
  ]
})
