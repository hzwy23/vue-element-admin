<template>
  <div>
    <!--添加面包屑导航栏目，这个功能和tab页有点重复，如果以后不需要这个功能，可以移除-->
    <section class="app-main" style="overflow: auto !important;" :style="{height: height +'px'}">
      <breadcrumb class="breadcrumb-container"></breadcrumb>
      <transition name="fade" mode="out-in">
        <keep-alive :include="cachedViews">
          <router-view></router-view>
        </keep-alive>
      </transition>
    </section>
    <el-footer>Copyright © 2018 智干电商</el-footer>
  </div>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'AppMain',
  components: { Breadcrumb },
  data() {
    return {
      // TODO 设置内容显示容器高度，否则overflow无法生效
      // TODO 后续添加自适应，当浏览器高度调整时，自动调整这个值
      height: document.documentElement.clientHeight - 112
    }
  },
  computed: {
    cachedViews() {
      return this.$store.state.tagsView.cachedViews
    }
    // key() {
    //   return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    // }
  }
}
</script>

<style>
  .breadcrumb-container{
      height: 30px;
      line-height: 30px !important;
      margin-top: 0px;
      padding: 3px;
  }
  .el-footer {
    background-color: #f8f8f8;
    border-top: #cccccc solid 1px;
    font-size: 10px;
    font-weight: 600;
    color: #333333;
    text-align: center;
    height: 18px !important;
    line-height: 18px;
  }
</style>
