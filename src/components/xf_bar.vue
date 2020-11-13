<template>
  <div>
    <div class="bar">
      <div v-for="(item, index) in icon" :key="index" class="icon">
        <van-icon
          :class="{ green: pathId === index }"
          :name="item.icon"
          size="22px"
        />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pathId: 1,
      icon: [
        {
          name: "首页",
          icon: "shop-o",
        },
        {
          name: "分类",
          icon: "qr",
        },
        {
          name: "购物车",
          icon: "cart-o",
        },
        {
          name: "我的",
          icon: "user-o",
        },
      ],
    };
  },
  created() {
    console.log(this.$route);
    this.pathId = this.$route.meta.id;
  },
};
</script>

<style lang="less" scoped>
div {
  &::after {
    content: "";
    display: block;
    height: 50px;
  }
  .bar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    text-align: center;
    height: 50px;
    bottom: 0;
    width: 100%;
    background-color: white;
    .icon {
      flex: 1;
      .van-icon {
        display: block;
        line-height: 30px;
      }
      div {
        line-height: 20px;
      }
    }
    .green {
      color: #1baeae;
    }
  }
}
</style>