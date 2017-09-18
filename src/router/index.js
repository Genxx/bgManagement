import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import regis from '@/components/regis'
import main from '@/components/main/main'
import codeRegion from '@/components/main/generalOverview/codeRegion'
import adverOrder from '@/components/main/adverOrder/adverOrder'
import userInfo from '@/components/main/userInfo/userInfo'
import generalSurvey from '@/components/main/generalSurvey/generalSurvey'
import cashNotice from '@/components/main/cashNotice/cashNotice'
import addAdver from '@/components/main/addAdver/addAdver'

var router = Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/login',
      children: [
        {
          path: '/login',
          component: login,
        },
        {
          path: '/regis',
          component: regis
        }
      ],

    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: '/main/generalSurvey',
          component: generalSurvey
        },
        {
          path: '/main/codeRegion',
          component: codeRegion
        },
        {
          path: '/main/adverOrder',
          component: adverOrder
        },
        {
          path: '/main/userInfo',
          component: userInfo
        },
        {
          path: '/main/cashNotice',
          component: cashNotice
        },
        {
          path: '/main/addAdver',
          component: addAdver
        }

      ],
    }

  ]
})
