<template>
  <div class="body" @scroll="MyScroll($event)">
    <!-- 搜索框 -->
    <div :class="{ xf_header: true, green: headerColor }">
      <div :class="{ xf_menu: true, white: headerColor }">
        <van-icon name="apps-o" size="30px" />
      </div>
      <div class="search">
        <span>新蜂商城</span>
        <span> {{ searchTip }} </span>
      </div>
      <div :class="{ login: true, white: headerColor }">登录</div>
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#1baeae">
      <van-swipe-item v-for="item in imgList.carousels" :key="item.id">
        <img v-lazy="item.carouselUrl" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 格子菜单 -->
    <div class="menu_table">
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png"
          alt=""
        />
        <span>新蜂超市</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png"
          alt=""
        />
        <span>新蜂服饰</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png"
          alt=""
        />
        <span>新蜂超市</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png"
          alt=""
        />
        <span>新蜂服饰</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png"
          alt=""
        />
        <span>新蜂超市</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png"
          alt=""
        />
        <span>新蜂服饰</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png"
          alt=""
        />
        <span>新蜂超市</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png"
          alt=""
        />
        <span>新蜂服饰</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png"
          alt=""
        />
        <span>新蜂超市</span>
      </div>
      <div>
        <img
          src="//s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png"
          alt=""
        />
        <span>新蜂服饰</span>
      </div>
    </div>
    <!-- 新品上线 -->
    <goods-list :goods="imgList.newGoodses">新品上线</goods-list>
    <!-- 热门商品 -->
    <goods-list :goods="imgList.hotGoodses">热门商品</goods-list>
    <!-- 最新推荐 -->
    <goods-list :goods="imgList.recommendGoodses">最新推荐</goods-list>
    <xf-bar></xf-bar>
  </div>
</template>

<script>
export default {
  name: "keep",
  data() {
    return {
      headerColor: false,
      searchTip: "山河无恙，人间皆安",
      imgList: Object,
    };
  },
  created() {
    this.getInfo();
  },
  mounted() {
    //页面滚动事件
    window.addEventListener("scroll", this.MyScroll, true);
  },
  methods: {
    // 滚动控制搜索框颜色
    MyScroll() {
      if (window.scrollY < 200) {
        this.headerColor = false;
      } else {
        this.headerColor = true;
      }
    },
    //获取主页数据
    async getInfo() {
      let res = await this.$http({
        url: "/api/v1/index-infos",
      });
      this.imgList = res.data.data;
    },
  },
};
</script>

<style lang="less" scoped>
.xf_header {
  position: fixed;
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  background-color: #f2f2f2;
  z-index: 999;
  &.green {
    background-color: #1baeae;
  }
  .search {
    flex: 1;
    border-radius: 15px;
    height: 30px;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    span {
      color: #787878;
      text-align: center;
      &:nth-child(1) {
        color: #1baeae;
        font-size: 18px;
        font-weight: 900;
        width: 100px;
        position: relative;
        &::after {
          position: absolute;
          content: "";
          right: 0;
          top: 50%;
          display: inline-block;
          width: 1px;
          height: 20px;
          background-color: black;
          transform: scaleX(0.3) translateY(-50%);
        }
      }
      &:nth-child(2) {
        line-height: 24px;
        flex: 1;
      }
    }
  }
  .xf_menu,
  .login {
    width: 50px;
    font-size: 16px;
    text-align: center;
    color: #1baeae;
  }
}
.white {
  color: white !important;
}
.van-swipe-item {
  margin-top: 50px;
  /deep/img {
    width: 100%;
    height: 168px;
    vertical-align: middle;
  }
}
@media screen and (min-width: 768px) {
  .van-swipe-item {
    margin-top: 50px;
    /deep/img {
      width: 100%;
      height: 248px;
      vertical-align: middle;
    }
  }
}
.menu_table {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  text-align: center;
  div {
    width: 20%;
    padding: 16px 0;
    img {
      margin: 0 auto;
      display: block;
      width: 36px;
      height: 36px;
    }
  }
}
</style>