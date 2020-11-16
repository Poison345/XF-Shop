<template>
  <div>购物车</div>
</template>

<script>
export default {
  name: "keep",
  async created() {
    await this.$http({
      url: "/api/v1/shop-cart?pageNumber=1",
    });
  },
};
</script>

<style>
</style>