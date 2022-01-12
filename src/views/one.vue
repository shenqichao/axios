<template>
  <div>
      <navigation :initParam="navParam" />
      <div>
          我是列表1
          {{arr1|depemTime}}
      </div>
      <el-button @click="aaa">跳转</el-button>
  </div>
</template>

<script>
import navigation from '../components/pages/nav.vue'
export default {
    data(){
        return{
        navParam: {
        first: "辣鸡得物",
        second: "我是列表1",
      },
      arr1:'早餐一共多少'
        }
    },
    filters:{
        duplicateRemoval(arr){
            arr.sort(function(a,b){
                return a-b
            })
            return arr
        }
    },
    components:{
        navigation:navigation,
    },
    methods:{
        aaa(){
            this.$router.push('/lie/two')
        }
    }
}
</script>

<style>
    .dewu{
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding:15px 10px
    }
</style>