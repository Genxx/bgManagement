<template>
  <div id="main">
    <navbar></navbar>
    <el-row class="tac">
      <el-col :xs="4" :sm="5" :md="5" :lg="4">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark">
          <el-submenu index="1">
            <template slot="title">数据统计</template>
            <el-submenu index="1-1">
              <template slot="title">总体概况</template>
              <el-menu-item index="1-1-2" @click="go('device')">设备地区分布</el-menu-item>
              <el-menu-item index="1-1-3" @click="go('codeRegion')">扫码地区分布</el-menu-item>
              <el-menu-item index="1-1-4" @click="go('codeTime')">扫码时间分布</el-menu-item>
              <el-menu-item index="1-1-5" @click="go('codeSex')">扫码性别比例</el-menu-item>
              <el-menu-item index="1-1-6" @click="go('codeDevice')">扫码设备类型分布</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">分析报告</template>
              <el-menu-item index="1-2-1" @click="go('codeData')">扫码数据统计</el-menu-item>
              <el-menu-item index="1-2-2" @click="go('codeAttention')">扫码关注统计</el-menu-item>
              <el-menu-item index="1-2-3" @click="go('balanceChange')">余额变化统计</el-menu-item>
            </el-submenu>
            <el-menu-item index="1-3"  @click="go('codeOrder')">
              <template slot="title">扫码订单统计</template>
            </el-menu-item>
            <el-menu-item index="1-4" @click="go('adverOrder')">
              <template slot="title" >广告订单统计</template>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title" >广告产品管理</template>
            <el-menu-item index="2-1" @click="go('adverList')">广告列表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">账号管理</template>
            <el-menu-item index="3-1" @click="go('userInfo')">账号信息</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :xs="20" :sm="19" :md="19" :lg="20">
        <router-view id="main_right"></router-view>
      </el-col>
    </el-row>

  </div>

</template>
<style lang="less">
  @import '../../less/main.less';
</style>
<script>
//  import tab from './tab/tab';
  import navbar from './nav/nav';

  export default {

    components: {
      navbar
    },
    data() {
      return {}
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      go(addr){
        this.$router.push('/main/'+addr);
      }
    },
    mounted() {

    }
  }
</script>
