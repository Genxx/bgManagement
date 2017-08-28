import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import regis from '@/components/regis'
import main from '@/components/main/main'
import device from '@/components/main/generalOverview/device'
import codeRegion from '@/components/main/generalOverview/codeRegion'
import codeDevice from '@/components/main/generalOverview/codeDevice'
import codeSex from '@/components/main/generalOverview/codeSex'
import codeTime from '@/components/main/generalOverview/codeTime'
import balanceChange from '@/components/main/analysisReport/balanceChange'
import codeAttention from '@/components/main/analysisReport/codeAttention'
import codeData from '@/components/main/analysisReport/codeData'
import adverList from '@/components/main/adverList/adverList'
import adverOrder from '@/components/main/adverOrder/adverOrder'
import codeOrder from '@/components/main/codeOrder/codeOrder'
import userInfo from '@/components/main/userInfo/userInfo'

var router = Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component:index,
      redirect:'/login',
      children:[
        {
          path:'/login',
          component:login,
        },
        {
          path:'/regis',
          component:regis
        }
      ],

    },
    {
      path: '/main',
      component:main,
      children:[
        {
          path:'/main/device',
          component:device,
        },
        {
          path:'/main/codeRegion',
          component:codeRegion
        },
        {
          path:'/main/codeDevice',
          component:codeDevice
        },
        {
          path:'/main/codeSex',
          component:codeSex
        },
        {
          path:'/main/codeTime',
          component:codeTime
        },
        {
          path:'/main/balanceChange',
          component:balanceChange
        },
        {
          path:'/main/codeAttention',
          component:codeAttention
        },
        {
          path:'/main/codeData',
          component:codeData
        },

        {
          path:'/main/adverList',
          component:adverList
        },
        {
          path:'/main/adverOrder',
          component:adverOrder
        },
        {
          path:'/main/codeOrder',
          component:codeOrder
        },
        {
          path:'/main/userInfo',
          component:userInfo
        }
      ],
    }

  ]
})
