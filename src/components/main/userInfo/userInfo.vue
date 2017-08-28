<template>
    <div class="userInfo">
      <h2>用户信息管理</h2>
      <div class="fl card"  >
        <div>
          <p>用户名：<span>{{userInfo.userName}}</span></p>
          <p>用户ID：<span>{{userInfo.userId}}</span></p>
          <p>手机号码：<span>{{userInfo.phone}}</span></p>
          <p>注册时间：<span>{{userInfo.regisTime}}</span></p>
          <p>账户余额：<span>{{userInfo.balance}}</span></p>
        </div>
      </div>
      <div class="fl buttons" >
        <el-button type="primary">修改信息</el-button>
        <br>
        <el-button type="primary">账户充值</el-button>
        <br>
        <el-button type="primary">退款</el-button>
        <br>
        <el-button type="primary">修改密码</el-button>
      </div>
      <div style="clear:both;"></div>
    </div>
</template>
<style lang="less">
  @import '../../../less/userInfo.less';
</style>
<script>
    export default {

        data() {
            return {
              userInfo:{
                userName:'testtest',
                userId:'16546546526',
                phone:13455555554,
                regisTime:'2017-06-05',
                balance:16632.00
              }
            }
        },
        methods: {},
        mounted() {

        }
    }
</script>
