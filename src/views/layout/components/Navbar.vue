<template>
  <el-menu class="navbar" mode="horizontal">

    <div class="main-menu">
      <div class="main-logo-content">
        <img class="main-logo" src="../../../assets/logo.png" />
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
      <!--<div class="main-user-info">-->
        <!--<navbar></navbar>-->
      <!--</div>-->
    </div>

    <!--<hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>-->

    <!--<breadcrumb class="breadcrumb-container"></breadcrumb>-->

    <div class="right-menu">
      <!--前台日志，暂时不需要考虑-->
      <!--<error-log class="errLog-container right-menu-item"></error-log>-->

      <!--取消全屏显示功能，在erp系统中不会使用-->
      <!--<el-tooltip effect="dark" :content="$t('navbar.screenfull')" placement="bottom">-->
        <!--<screenfull class="screenfull right-menu-item"></screenfull>-->
      <!--</el-tooltip>-->

      <!--暂时不会考虑国际化，以中文为主-->
      <!--<lang-select class="international right-menu-item"></lang-select>-->

      <!--导航颜色去除，暂时不会使用这个功能，以后系统优化，交互体检优化时，可能会用到-->
      <!--<el-tooltip effect="dark" :content="$t('navbar.theme')" placement="bottom">-->
        <!--<theme-picker class="theme-switch right-menu-item"></theme-picker>-->
      <!--</el-tooltip>-->

      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">
          <!--<i class="el-icon-caret-bottom"></i>-->
        </div>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/">
            <el-dropdown-item>
              {{$t('navbar.dashboard')}}
            </el-dropdown-item>
          </router-link>
          <!--<a target='_blank' href="https://github.com/PanJiaChen/vue-element-admin/">-->
            <!--<el-dropdown-item>-->
              <!--{{$t('navbar.github')}}-->
            <!--</el-dropdown-item>-->
          <!--</a>-->
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">{{$t('navbar.logOut')}}</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'

export default {
  components: {
    // Breadcrumb,
    // Hamburger,
    ErrorLog,
    Screenfull,
    LangSelect,
    ThemePicker
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar'
    ])
  },
  methods: {
    // toggleSideBar() {
    //   this.$store.dispatch('toggleSideBar')
    // },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  // TODO 修改布局，设置高度和主菜单栏目高度一致，60px;
  // 之前的高度是 50px;
  height: 60px;
  z-index: 1024;
  line-height: 60px;
  background-color: #272727;
  border-radius: 0px !important;
  /*.hamburger-container {*/
    /*line-height: 60px;*/
    /*height: 60px;*/
    /*float: left;*/
    /*padding: 0 10px;*/
  /*}*/
  /*.breadcrumb-container{*/
    /*float: left;*/
  /*}*/
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 60px;
      margin-right: 15px;
      margin-left: 15px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 10px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}

.main-menu {
  height: 59px;
  line-height: 59px;
  background-color: #272727;
  float: left;
  z-index: 9999;
  border: none;
  outline: none;
  margin-top: 0px;
  padding-top: 0px;
}

.main-logo-content {
  height: 60px;
  line-height: 60px;
  font-size: 26px;
  font-weight: 600;
  color: #FFFFFF;
  padding-left: 15px;
  float: left;
  z-index: 999999;
}

.main-logo{
  height: 42px;
  line-height: 42px;
  margin-top: 9px;
}
.main-menu-content {
  float: left;
  margin-left: 30px;
  background-color: inherit;
  line-height: 59px;
  height: 59px;
  border: none;
}
.main-menu-content ul {
  border: none;
  line-height: 59px;
  height: 59px;
  padding: 0px;
  margin: 0px;
}
.main-menu-content li {
  float: left;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0px 15px;
  padding: 0px;
  height: 58px;
  line-height: 58px;
  list-style: none;
  border: none;
}
</style>
