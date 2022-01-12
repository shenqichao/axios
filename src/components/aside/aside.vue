<template>
  <el-menu
    style="height: 100%"
    router
    :default-active="defaultActive"
    class="el-menu-vertical-demo el-menu"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-menu-item index="/home" style="height: 50px; line-height: 50px ; font-size:16px">
      <i class="iconfont icon-shouye"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-submenu
      v-for="item in list"
      :key="'list' + item.name"
      :index="'list' + item.name"
    >
      <template slot="title">
        <i :class="'iconfont' + item.font"></i>
        <span>{{ item.name }}</span>
      </template>
        <el-menu-item
          v-for="it in item.children"
          :key="it.name + 'children'"
          :index="it.route"
          >{{ it.name }}</el-menu-item
        >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  created() {
    //激活菜单  选中默认菜单项
    this.getDefaultActive();
  },
  data() {
    return {
      defaultActive: "/home",
      list: [
        {
          name: "鞋子统计",
          font:' icon-tongji',
          children: [
            { name: "列表下第一个", route: "/lie/one" },
            { name: "列表下第二个", route: "/lie/two" },
            { name: "列表下第三个", route: "/lie/three" },
          ],
        },
        { name: "收入",font:' icon-shouru'},
        { name: "鞋子分类",font:' icon-xiezi'},
        { name: "鞋子涨幅",font:' icon-zhangfu'},
      ],
    };
  },
  methods: {
    getDefaultActive() {
      let URL = document.URL;
      if (URL.indexOf("/home") !== -1) {
        this.defaultActive = "/home";
        return;
      }
      this.list.map((item) => {
        if (item.children !== undefined) {
          item.children.map((it) => {
            if (URL.indexOf(it.route) !== -1) {
              this.defaultActive = it.route;
            }
          });
        }
      });
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.el-submenu .el-menu-item {
  min-width: 0;
}
.el-menu .iconfont {
  font-size: 20px;
  font-weight: 200;
  margin-right: 10px;
}
</style>