<template>
  <div class="shopcart">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      active-text-color="#409eff"
    >
      <el-menu-item index="1" @click="activeIndex='1'">全部商品</el-menu-item>
      <el-menu-item index="2" @click="activeIndex='2'">购物车</el-menu-item>
      <el-menu-item index="3" @click="activeIndex='3'">关于</el-menu-item>

      <div class="so">
        <el-input placeholder="请输入搜索内容">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
      </div>
    </el-menu>
    <div v-if="activeIndex=='1'" class="main-container">
      <goodslist></goodslist>
    </div>
    <div v-if="activeIndex=='2'" class="main-container">2</div>

    <div v-if="activeIndex=='3'">
      <about></about>
    </div>
  </div>
</template>

<script>
import goodslist from '@/components/goodslist'
import about from '@/components/about'
export default {
  components: { goodslist, about },
  data() {
    return {
      // 激活状态,默认为1
      activeIndex: '1',
    }
  },
  methods: {},
}
</script>

<style scoped lang="less">
.el-menu {
  max-width: 1000px;
  display: flex;
  margin: 0 auto;
}
.so {
  margin-top: 10px;
  width: 450px;
  margin-left: auto;
  margin-right: 10px;
}
.main-container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>