<template>
  <div>
    <div class="search_header">
      <div class="search">
        <van-icon name="search" />
        <span>全场50元起步</span>
      </div>
    </div>
    <div class="category_body">
      <!-- 侧边栏 -->
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          v-for="item in categoryList"
          :key="item.categoryId"
          :title="item.categoryName"
        />
      </van-sidebar>
      <!-- 分类列表 -->
      <happy-scroll hide-vertical hide-horizontal>
        <xf-category
          class="category_info"
          :categoryinfo="
            categoryList[0]
              ? categoryList[activeKey].secondLevelCategoryVOS
              : []
          "
        ></xf-category
      ></happy-scroll>
    </div>
    <xf-bar></xf-bar>
  </div>
</template>

<script>
export default {
  name: "keep",
  data() {
    return {
      categoryList: [],
      activeKey: 0,
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    //获取页面数据
    async getInfo() {
      let res = await this.$http({
        url: "/api/v1/categories",
      });
      this.categoryList = res.data.data;
    },
  },
};
</script>

<style lang="less" scoped>
.search_header {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 0 3px #ccc;
  .search {
    width: 80%;
    background-color: #f7f8fa;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-indent: 10px;
    font-size: 14px;
    .van-icon {
      font-size: 18px;
      vertical-align: middle;
      margin-right: 10px;
    }
  }
}
.category_body {
  display: flex;
  overflow: hidden;
  .van-sidebar {
    background-color: #f7f8fa;
    width: 105px;
    .van-sidebar-item {
      font-size: 12px;
      text-align: center;
      padding: 0;
      line-height: 56px;
      white-space: nowrap;
      overflow: hidden;
      &::before {
        content: "";
        display: none;
      }
      &.van-sidebar-item--select {
        color: #1baeae;
      }
    }
  }
  .happy-scroll {
    height: calc(100vh - 100px);
    flex: 1;
    /deep/.happy-scroll-content {
      width: 100% !important;
    }
    .category_info {
      padding: 10px;
      width: 100%;
    }
  }
}
</style>