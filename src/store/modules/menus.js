import MenusObj from '@/api/menus'

const menus = {
  state: {
    mainMenuItems: [{ id: 'Dashbord', name: '首页' }],
    subMenuItems: [],
    activeMainMenuItem: 'Dashbord'
  },
  mutations: {
    SET_MAIN_MENUS: (state, items) => {
      state.mainMenuItems = items
    },
    SET_SUBMENUS: (state, items) => {
      state.subMenuItems = items
    },
    SET_ACTIVE_MAIN_MENU: (state, index) => {
      state.activeMainMenuItem = index
    }
  },
  actions: {
    GetMainMenus({ commit, state }) {
      return new Promise((resolve, reject) => {
        const items = []
        MenusObj.getMainMenus().then(response => {
          const result = response.data.data
          for (let i = 0; i < result.length; i++) {
            const elem = {
              id: result[i].menuId,
              name: result[i].menuName
            }
            items.push(elem)
          }
          commit('SET_MAIN_MENUS', items)
        }).catch(error => {
          console.log('获取菜单信息失败', error.message)
        })
      })
    },
    SetActiveMainMenuItem({ commit, state }, index) {
      return new Promise((resolve, reject) => {
        commit('SET_ACTIVE_MAIN_MENU', index)
        MenusObj.getSubMenus(index).then(response => {
          const result = response.data.data
          commit('SET_SUBMENUS', result)
        })
      })
    }
  }
}

export default menus
