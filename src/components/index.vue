<template>
  <div id="index" style="background-image: url('../../static/img/bg.jpg')">
    <keep-alive>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </keep-alive>
  </div>
</template>
<script>

  export default {

    components: {
    },
    data() {
      return {
        winWidth1: '',
        winHeight1: '',
      }
    },
    methods: {},
    mounted() {
      var winWidth = 0;
      var winHeight = 0;
      var oLogin = document.getElementById("index");
      //获取窗口高度
      if (window.innerHeight) {
        winHeight = window.innerHeight;
      }
      else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
      }
      oLogin.style.height = winHeight + "px";

    }
  }
</script>
<style lang="less">
  @import '../less/index.less';
</style>
