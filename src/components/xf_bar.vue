<template>
  <div class="body">
    <div class="bar">
      <div
        :class="{ green: pathId === index }"
        v-for="(item, index) in icon"
        :key="index"
        class="icon"
        @click="jump(index, item.path)"
      >
        <van-icon :name="item.icon" size="22px" />
        <div>{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      pathId: 0,
      icon: [
        {
          name: "首页",
          icon: "shop-o",
          path: "/index",
        },
        {
          name: "分类",
          icon: "qr",
          path: "/category",
        },
        {
          name: "购物车",
          icon: "cart-o",
          path: "/cart",
        },
        {
          name: "我的",
          icon: "user-o",
          path: "/user",
        },
      ],
    };
  },
  mounted() {
    this.pathId = this.$route.meta.id;
  },
  computed: {},
  methods: {
    jump(index, path) {
      if (path !== this.$route.path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.body {
  z-index: 999;
  &::after {
    content: "";
    display: block;
    height: 50px;
  }
  .bar {
    position: fixed;
    display: flex;
    justify-content: space-between;
    text-align: center;
    height: 50px;
    bottom: -1px;
    width: 100%;
    background-color: white;
    .icon {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .van-icon {
        display: block;
        font-size: 16px;
        width: 100%;
      }
      div {
        font-size: 16px;
      }
    }
    .green {
      color: #1baeae;
    }
  }
}
</style>