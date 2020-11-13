<template>
  <div>
    <div class="goods_title">新品上线</div>
    <div class="goods_body">
      <div class="goods_item" v-for="item in goods" :key="item.goodsId">
        <img
          v-lazy="
            item.goodsCoverImg.startsWith('http')
              ? item.goodsCoverImg
              : 'http://47.99.134.126:28019' + item.goodsCoverImg
          "
          alt=""
        />
        <p>{{ item.goodsName }}</p>
        <div class="price">￥{{ item.sellingPrice }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goods"],
};
</script>

<style lang="less" scoped>
.goods_title {
  text-align: center;
  line-height: 50px;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #1baeae;
}
.goods_body {
  display: flex;
  flex-wrap: wrap;
  .goods_item {
    width: 50%;
    height: 192px;
    padding: 10px;
    border-bottom: 2px solid #f9f9f9;
    &:nth-child(2n) {
      border-left: 2px solid #f9f9f9;
    }
    img {
      width: 120px;
      height: 120px;
    }
    p {
      height: 32px;
    }
    .price {
      color: #1baeae;
    }
  }
}
</style>