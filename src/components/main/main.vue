<template>
  <div id="main">
    <navbar v-on:showCollapse="reCollapse()"></navbar>
    <el-row class="tac">
        <el-col :span="spanLeft" class="tac_left" >
          <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :unique-opened="true" v-show="isShow">
            <el-menu-item index="1" @click="go('generalSurvey')">总体概况</el-menu-item>
            <el-menu-item index="4" @click="go('cashNotice')">提现通知</el-menu-item>
            <el-menu-item index="5" @click="go('adverOrder')">广告管理</el-menu-item>
            <el-menu-item index="6" @click="go('addAdver')">增加广告</el-menu-item>
            <el-menu-item index="8" @click="go('userInfo')">账号信息</el-menu-item>
          </el-menu>
      </el-col>

      <el-col :span="spanRight" id="main_right">
        <div class="divPadding">
          <transition name="fade">
            <router-view></router-view>
          </transition>
        </div>
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
      return {
        innerHeight: 0,
        sendCollapse: false,
        isCollapse: false,
        isShow: true,
        divHeight: '',
        spanRight: 20,
        spanLeft: 4,
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      go(addr) {
        this.$router.push('/main/' + addr);
      },
      reCollapse(data) {
        this.isShow = !this.isShow;
        if (this.isShow) {
          this.spanRight = 20;
          this.spanLeft = 4;
        } else {
          this.spanRight = 24;
          this.spanLeft = 0;
        }
      },
      handleResize() {
        if (window.innerHeight) {
          this.innerHeight = window.innerHeight;
        }
        else if ((document.body) && (document.body.clientHeight)) {
          this.innerHeight = document.body.clientHeight;
        }
        var height = document.getElementsByClassName("el-row")[0].clientHeight;
        document.getElementsByClassName("el-menu")[0].style.height = (this.innerHeight - height) + 'px';
        console.log(document.getElementsByClassName("el-menu")[0].style.height)
      }
    },
    watch: {},
    mounted() {
      this.handleResize();
      window.addEventListener('resize', this.handleResize)
    },
//    beforeDestroy: function () {
//      window.removeEventListener('resize', this.handleResize)
//    },
  }
</script>
