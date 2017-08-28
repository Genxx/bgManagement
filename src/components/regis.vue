<template>
  <div id="regis">
    <el-form :model="ruleForm2" :label-position="labelPosition" label-width="100px" :rules="rules">
      <img src="../assets/logo.png" alt="脑洞科技">
      <el-form-item label="用户名称：" prop="userName" required>
        <el-input type="text" v-model="ruleForm2.userName" placeholder="请输入内容" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="手机号：" prop="userName" required>
        <el-input type="text" v-model="ruleForm2.userName" placeholder="请输入内容" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passWord" required>
        <el-input type="password" v-model="ruleForm2.passWord" placeholder="请输入内容" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码：" prop="passWord2" required>
        <el-input type="password" v-model="ruleForm2.passWord2" placeholder="请输入内容" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="验证：" prop="passWord2" required>
        <el-input type="password" v-model="ruleForm2.passWord2" placeholder="发送短信验证手机号" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="goLogin()">注册</el-button>
      </el-form-item>
      <el-form-item>
        <a href="javascript:void(0);" @click="goLogin()">已注册，返回登陆</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {

    components: {},
    data() {
      return {
        ruleForm2: {
          userName: '',
          passWord: '',
          passWord2: '',
        },
        labelPosition: "right",
        rules: {
          userName: [
          ],
          passWord:[
          ]
        }
      }
    },
    methods: {
      goLogin(){
        this.$router.push("/login")
      }
    },
    mounted() {

    }
  }
</script>
<style lang="less">
  @import '../less/regis.less';
</style>
