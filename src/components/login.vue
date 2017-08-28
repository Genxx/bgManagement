<template>
  <div id="login">
    <el-form :model="ruleForm" :label-position="labelPosition" label-width="100px" :rules="rules">
      <img src="../assets/logo.png" alt="脑洞科技">
      <el-form-item label="账号：" prop="userName" required>
        <el-input type="text" v-model="ruleForm.userName" placeholder="请输入内容" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="passWord" required>
        <el-input type="password" v-model="ruleForm.passWord" placeholder="请输入内容" style="width: 80%;"
                  auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
        <el-button @click="goRegis()">注册</el-button>
      </el-form-item>
      <el-form-item>
        <a href="">忘了密码？</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import ElFormItem from "../../node_modules/element-ui/packages/form/src/form-item.vue";

  export default {
    components: {ElFormItem},
    data() {
      var checkUser = (rule, value, callback) => {
        const pattern = /^1[34578]\d{9}$/;
        console.log(value)
        if (!value) {
          return callback(new Error('账号不能为空'));
        }
        setTimeout(() => {
          if (!pattern.test(value)) {
            callback(new Error('您输入的账号不正确，请重新输入'));
          } else {
            callback();
          }
        }, 1000);
      };
      var checkPasssword = (rule, value, callback) => {
        const pattern = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
        if (!value) {
          return callback(new Error('密码不能为空'));
        }
        setTimeout(() => {
            if (!pattern.test(value)) {
            callback(new Error("您输入的密码错误，请重新输入"));
            }else{
              callback();
            }
          },1000)
      };
      return {
        ruleForm: {
          userName: '',
          passWord: '',
        },
        labelPosition: "right",
        rules: {
          userName: [
            {validator: checkUser, trigger: 'blur'}
          ],
          passWord:[
            {validator:checkPasssword,trigger:'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
//        this.$refs[formName].validate((valid) => {
//          if (valid) {
//            alert('submit!');
//          } else {
//            console.log('error submit!!');
//            return false;
//          }
//        });
        this.$router.push("/main");
      },
      goRegis(){
        this.$router.push("/regis")
      }
    },
    mounted() {
    }
  }
</script>
<style lang="less">
  @import '../less/login.less';
</style>
