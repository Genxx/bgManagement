<template>
  <div id="nav" class="grid-content">
    <el-row>
      <el-col :xs="14" :sm="11" :md="9" :lg="7">
        <div class="icon" ><i v-on:click="sendCollapse()"></i></div><h3>趣扫扫</h3>
      </el-col>
      <el-col :xs="2" :sm="4" :md="7" :lg="11">
        &nbsp;
      </el-col>
      <el-col  :xs="8" :sm="9" :md="8" :lg="6" id="right">
        <div class="main_right">
          <a href="javascrpit:void(0)">帮助</a>|<a href="javascrpit:void(0)">关于</a>|<a href="javascrpit:void(0)">退出</a>
          <button>欢迎您，{{user}}</button>
        </div>
      </el-col>
    </el-row>
  </div>

</template>
<style lang="less">
  @import '../../../less/nav.less';
</style>
<script>
  export default {
    components: {},
//    props:["isCollapse"],
    data() {
      return {
        user: 'xiaowainag',
      }
    },
    methods: {
      sendCollapse(){
          this.$emit("showCollapse",'')
      }
    },
    mounted() {
    }
  }
</script>
