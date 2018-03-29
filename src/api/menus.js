import axios from 'axios'

var MenusObj = {
  getMainMenus: function() {
    return axios.get('/system/nav')
  }
}

export default MenusObj
