<template>
  <div class="login">
    <div class="container">
      <img src="../assets/avatar.jpg" class="avatar" alt />
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username" label="用户名">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="密码">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" plain @click="dengl">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import { login } from "@/apis/user.js";
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 6, message: "长度在 5 到 6 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    dengl() {
      this.$refs.ruleForm.validate(async value => {
        if (value) {
          let res = await login(this.ruleForm);
          // console.log(res);
          this.$message(res.data.message)
          if(res.data.message==='登录成功'){
              localStorage.setItem('token',res.data.data.token)
              this.$router.push({name:'index'})
          }
        }else{
          this.$message.warning('数据格式输入不正确')
          return false
        }
      });
    }
  }
};
</script>

<style lang='less' scoped>
/deep/ .el-button {
  width: 100%;
}
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .container {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 0px 40px 15px 40px;
    margin: 200px auto;
    background: white;
    .avatar {
      position: relative;
      left: 50%;
      width: 120px;
      height: 120px;
      margin-left: -60px;
      margin-top: -60px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 10px solid #fff;
      box-shadow: 0 1px 5px #ccc;
      overflow: hidden;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>