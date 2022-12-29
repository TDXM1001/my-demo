<template>
  <el-container class="main-container">
    <!-- 左侧导航 -->
    <el-aside width="200px">
      <div class="logo">
        <img src="http://vue.ruoyi.vip/static/img/logo.4eeb8a8e.png" alt />
        <span>练习所用demo</span>
      </div>
      <el-aside width="200px">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#304156"
          text-color="#fff"
          router
        >
          <el-menu-item index="/home" class="el-menu-item">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item index="/user-system">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>用户管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="/goods-system">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
              </template>
            </el-menu-item>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-picture-outline-round"></i>
              <span>组封装管理</span>
            </template>
            <el-menu-item index="/enlarge">
              <template slot="title">
                <i class="el-icon-search"></i>
                <span>放大镜</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
    </el-aside>
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <!-- 头部左侧区域 -->
        <div class="head-left">
          <i class="el-icon-s-fold" v-if="isCollapse" aria-setsize="20px"></i>
          <i class="el-icon-s-unfold" v-else></i>
        </div>
        <!-- 头部右侧区域 -->
        <div class="head-right">
          <el-menu
            :default-active="activeIndex"
            mode="horizontal"
            @select="handleSelect"
            background-color="#fff"
          >
            <el-submenu index="1">
              <template slot="title">
                <span>个人中心</span>
              </template>
              <el-menu-item index="1-1">
                <i class="el-icon-s-operation"></i>基本资料
              </el-menu-item>
              <el-menu-item index="1-2">
                <i class="el-icon-camera"></i>更换头像
              </el-menu-item>
              <el-menu-item index="1-3">
                <i class="el-icon-key"></i>重置密码
              </el-menu-item>
            </el-submenu>
            <!-- 退出按钮 -->
            <el-menu-item>
              <i class="el-icon-switch-button"></i>退出
            </el-menu-item>
          </el-menu>
        </div>
      </el-header>
      <!-- 挂载二级路由 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '1',
      // 导航栏伸缩
      isCollapse: true,
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    },
  },
}
</script>

<style lang="less" scoped>
@fontcolor: #fff;
@bgcolor: #304156;

.main-container {
  height: 100%;
}
.el-header {
  background-color: @fontcolor;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
}

.el-aside {
  background-color: @bgcolor;
  color: @fontcolor;
}

.el-main {
  background-color: #e9eef3;
}

.head-left {
  i {
    font-size: 25px;
  }
}

.el-menu {
  width: 100%;
  height: 100%;
}

.logo {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    padding-left: 10px;
    font-size: 12px;
  }
}
.el-aside::-webkit-scrollbar {
  display: none;
}
</style>