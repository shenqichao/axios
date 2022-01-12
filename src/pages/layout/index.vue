<template>
  <div id="index">
      <el-container style="height:100%">
    <el-aside class="asides" id="layoutAside" style="height:100%;width:250px">
      <Aside/>
    </el-aside>   
    <el-main class="main">
    <router-view></router-view>
    </el-main>
</el-container>
  </div>
</template>

<script>
import Aside from '../../components/aside/aside.vue'
export default {
  components:{
    Aside
  }
}
</script>

<style>
  #index{
    height: 100%;
  }
  .main{
      margin: 0;
      padding:0;
      background-color: #f4f4f4;
  }
</style>