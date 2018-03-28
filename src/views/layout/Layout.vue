<template>
	<div class="app-wrapper" :class="{hideSidebar:!sidebar.opened}">
    <navbar></navbar>
    <sidebar class="sidebar-container"></sidebar>
		<div class="main-container">
			<tags-view></tags-view>
			<app-main></app-main>
		</div>
	</div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    // MainMenu
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	@import "src/styles/mixin.scss";
	.app-wrapper {
	  @include clearfix;
	  position: relative;
    // TODO 修改主容器中的滑动按钮，设置为hidden，禁用主容器中的滑动
    overflow: hidden;
	  height: 100%;
	  width: 100%;
	}
</style>
