import axios from 'axios'

var MenusObj = {
  getMainMenus() {
    return axios.get('/sys/menus/main')
  },
  getSubMenus(menuId) {
    return axios.get('/sys/menus/routers', {
      params: {
        menuId: menuId
      }
    })
  }
}

export default MenusObj
