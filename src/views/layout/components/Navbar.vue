<template>
  <el-menu class="navbar" mode="horizontal">
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
  line-height: 60px;
  background-color: inherit;
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
</style>
