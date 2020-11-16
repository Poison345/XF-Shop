<template>
  <div>
    <xf-header>登录</xf-header>
    <div class="logo">XF&nbsp;SHOP</div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="userInfo.loginName"
        name="loginName"
        label="用户名"
        placeholder="用户名"
        :rules="[
          {
            required: true,
            pattern: /^[a-z0-9]{5,12}$/i,
            message: '请填写正确的用户名',
          },
        ]"
      />
      <van-field
        v-model="userInfo.passwordMd5"
        type="password"
        name="passwordMd5"
        label="密码"
        placeholder="密码"
        :rules="[
          {
            required: true,
            pattern: /^[a-z0-9]{5,12}$/i,
            message: '请填写正确的密码',
          },
        ]"
      />
      <div style="margin: 16px">
        <van-button
          color="#1baeae"
          round
          block
          type="info"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import md5 from "js-md5";
export default {
  name: "nokeep",
  data() {
    return {
      userInfo: {
        loginName: "",
        passwordMd5: "",
      },
    };
  },
  methods: {
    async onSubmit(e) {
      e.passwordMd5 = md5(e.passwordMd5);
      let res = await this.$http({
        url: "/api/v1/user/login",
        method: "post",
        data: e,
      });
      const { resultCode, message } = res.data;
      if (resultCode === 200) {
        this.$toast.success(message);
        this.$router.go(-1);
      } else {
        this.$toast.fail(message);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.logo {
  width: 180px;
  height: 180px;
  margin: 80px auto;
  font-size: 38px;
  color: white;
  background-color: #1baeae;
  border-radius: 50%;
  line-height: 180px;
  text-align: center;
}
</style>