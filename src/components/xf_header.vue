<template>
  <div class="header">
    <div class="goback" @click="goback"><van-icon name="arrow-left" /></div>
    <div class="title"><slot></slot></div>
  </div>
</template>

<script>
export default {
  methods: {
    goback() {
      this.$router.push("/index");
    },
  },
};
</script>

<style scoped lang="less">
.header {
  height: 50px;
  position: fixed;
  top: 0;
  background-color: #fff;
  width: 100%;
  line-height: 50px;
  box-shadow: 0 1px 6px #ddd;
  .goback {
    position: absolute;
    left: 0;
    width: 50px;
    text-align: center;
    font-size: 16px;
    .van-icon {
      vertical-align: middle;
    }
  }
  .title {
    text-align: center;
    font-size: 16px;
  }
}
</style>