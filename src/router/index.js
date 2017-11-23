import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

import Hello from '@/components/Hello'
import Index from '@/components/Index'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Home from '@/components/Home'
import Ershoufang from '@/components/Ershoufang'
import Yezhu from '@/components/Yezhu'
import Yezhumaifang from '@/components/Yezhumaifang'
import Yezhugujia from '@/components/Yezhugujia'
Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      component:Index,
      children:[
        {path:'/ershouyfang',component:Ershoufang},
        {path:'',component:Yezhu,
        children:[
          {path:'',component:Yezhumaifang},
          {path:'/gujia',component:Yezhugujia},
          {path:'/maifang',component:Yezhumaifang},
        ]
        }

      ]
    }
  ]
})
