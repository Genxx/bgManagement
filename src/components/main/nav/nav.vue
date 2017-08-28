<template>
  <div id="nav" class="grid-content bg-purple-dark">
    <el-row>
      <el-col :xs="14" :sm="11" :md="9" :lg="7">
        <h1>趣扫扫后台管理系统</h1>
      </el-col>
      <el-col :xs="4" :sm="7" :md="9" :lg="11">
        &nbsp;
      </el-col>
      <el-col  :xs="6" :sm="6" :md="6" :lg="6">
        <div id="right">
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
    data() {
      return {
        user: 'xiaowainag',
      }
    },
    methods: {},
    mounted() {

    }
  }
</script>
