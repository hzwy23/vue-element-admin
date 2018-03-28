<template>
    <div class="main-menu">
        <div class="main-logo">
            <span>智干电商ERP系统</span>
        </div>

        <!--主菜单展示区域-->
        <div class="main-menu-content">

        </div>

        <!--用户信息展示区域-->
        <div class="main-user-info">
          <navbar></navbar>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar'
    export default{
      name: 'main-menu',
      components: {
        Navbar
      }
    }
</script>

<style scoped>
  .main-menu {
    height: 60px;
    line-height: 60px;
    background-color: #272727;
    width: 100%;
    display: block;
  }
  .main-logo{
    height: 60px;
    line-height: 60px;
    width: 240px;
    font-size: 26px;
    font-weight: 600;
    color: #FFFFFF;
    padding-left: 30px;
    float: left;
  }
  .main-menu-content {
    float: right;
    /*width: 600px;*/
  }
</style>
