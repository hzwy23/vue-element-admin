<template>
  <div class="tab-nav-container">
    <el-menu :default-active="activeMainMenuItem"
             mode="horizontal"
             @select="toogleMainMenu"
             background-color="inherit">
      <el-menu-item v-for="item in mainMenuItems" :key="item.id" :index="item.id">{{item.name}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
      computed: {
        ...mapGetters(['mainMenuItems', 'activeMainMenuItem'])
      },
      methods: {
        toogleMainMenu(index, indexPath) {
          this.$store.dispatch('SetActiveMainMenuItem', index)
        }
      },
      created: function() {
        this.$store.dispatch('GetMainMenus')
      }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.tab-nav-container {
  float: left;
  margin-left: 10px;
  .el-menu-item,
  .el-submenu .el-submenu__titile {
    height: 58px;
    line-height: 58px;
    color: #FFFFFF;
    font-size: 16px;
  }
  .el-menu-horizontal {
    border-bottom: none;
  }
}
</style>
