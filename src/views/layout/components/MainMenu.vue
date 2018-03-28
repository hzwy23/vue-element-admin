<template>
    <div class="main-menu">
        <div class="main-logo">
            <span>智干电商ERP系统</span>
        </div>

        <!--主菜单展示区域-->
        <div class="main-menu-content">
          <!--TODO 替换成从数据库读取用户被授权的菜单信息-->
          <ul>
            <li>人事管理</li>
            <li>权限管理</li>
            <li>商品管理</li>
            <li>供应商管理</li>
            <li>仓库管理</li>
            <li>财股管理</li>
            <li>报表系统</li>
          </ul>
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
    padding-left: 15px;
    float: left;
  }
  .main-menu-content {
    float: left;
    margin-left: 60px;
    /*width: 600px;*/
  }
  .main-menu-content ul {
    line-height: 60px;
    height: 60px;
    padding: 0px;
    margin: 0px;
  }
  .main-menu-content li {
    float: left;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    margin: 0px 15px;
    padding: 0px;
    height: 60px;
    line-height: 60px;
    list-style: none;
  }
  .main-user-info {

  }
</style>
