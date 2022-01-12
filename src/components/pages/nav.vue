<template>
    <div class="dewu">
      <div class="dewu-left">
        <span >{{initParam.first}}</span>&nbsp;>
        <span>{{initParam.second}}</span>
        <span v-if="initParam.currentTab">&nbsp;>&nbsp; {{initParam.currentTab}}</span>
      </div>
      <div class="dewu-right">
        <i class="el-icon-menu"></i>
        <span>{{initParam.three | threeParam}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'navi',
  props: {
    initParam: {
      type: Object,
      required: true
    }
  },
  methods: {
  },
  filters: {
    threeParam (value) {
      return !value ? '攻破得物防线' : value
    }
  }
}
</script>