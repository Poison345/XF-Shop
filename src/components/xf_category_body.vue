<template>
  <div>
    <div class="category" v-for="item in categoryinfo" :key="item.categoryId">
      <div class="category_title">
        {{ item.categoryName }}
      </div>
      <div class="category_body">
        <div
          class="category_item"
          v-for="it in item.thirdLevelCategoryVOS"
          :key="it.categoryId"
        >
          <div>
            <img
              src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png"
              alt=""
            />
          </div>
          <p>{{ it.categoryName }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["categoryinfo"],
};
</script>

<style lang="less" scoped>
.category {
  padding: 15px;
  .category_title {
    text-align: left;
    font-size: 18px;
  }
  .category_body {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    .category_item {
      width: 30%;
      padding: 10px 0;
      div {
        text-align: center;
        img {
          width: 30px;
          height: 30px;
        }
      }
      p {
        text-align: center;
        white-space: nowrap;
        margin: 10px 0;
      }
    }
  }
}
</style>