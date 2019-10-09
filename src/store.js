import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo:[
        // { 
        //   name: "Jose", 
        //   lastname:"De la cruz",
        //   email:"jose@some.com", 
        //   username:"generate",
        //   phone:123456789, 
        // }
    ]
  },
  mutations: {
    addUserInfo(state, newDataFromHome){
      state.userInfo.push({ name:newDataFromHome.inpName,
                            lastname:newDataFromHome.inpLastName,
                            email:newDataFromHome.inpEmail,
                            phone: newDataFromHome.inpPhone})
    }

  },
  actions: {

  }
})
