import MenusObj from '@/api/menus'

const menus = {
  state: {
    mainMenuItems: [{ id: 'Dashbord', name: '首页' }],
    subMenuItems: [{
      path: '/components',
      component: 'Layout',
      redirect: 'noredirect',
      name: 'component-demo',
      meta: {
        title: 'components',
        icon: 'component'
      },
      children: [
        { path: 'tinymce', component: "_import('components-demo/tinymce')", name: 'tinymce-demo', meta: { title: 'tinymce' }},
        { path: 'markdown', component: "_import('components-demo/markdown')", name: 'markdown-demo', meta: { title: 'markdown' }},
        { path: 'json-editor', component: "_import('components-demo/jsonEditor')", name: 'jsonEditor-demo', meta: { title: 'jsonEditor' }},
        { path: 'dnd-list', component: "_import('components-demo/dndList')", name: 'dndList-demo', meta: { title: 'dndList' }},
        { path: 'splitpane', component: "_import('components-demo/splitpane')", name: 'splitpane-demo', meta: { title: 'splitPane' }}
      ]
    }],
    activeMainMenuItem: 'Dashbord'
  },
  mutations: {
    SET_MAIN_MENUS: (state, items) => {
      this.mainMenuItems = items
    },
    SET_SUBMENUS: (state, items) => {
      this.subMenuItems = items
    },
    SET_ACTIVE_MAIN_MENU: (state, index) => {
      this.activeMainMenuItem = index
    }
  },
  actions: {
    GetMainMenus({ commit, state }) {
      return new Promise((resolve, reject) => {
        const items = [{ id: '1', name: '人事管理' }, { id: '2', name: '权限管理' }]
        MenusObj.getMainMenus().then(response => {
          console.log('菜单信息是： ', response)
        }).catch(error => {
          console.log('获取菜单信息失败', error.message)
        })
        state.mainMenuItems.push(...items)
      })
    },
    SetActiveMainMenuItem({ commit, state }, index) {
      return new Promise((resolve, reject) => {
        commit('SET_ACTIVE_MAIN_MENU', index)
        // 刷新二级菜单
      })
    }
  }
}

export default menus
