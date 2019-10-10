import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	getDataUser: [],
    userInfo:[
        { 
			name: "Jose", 
			lastname:"De la cruz",
			email:"jose@some.com", 
			username:"generate",
			phone:123456789, 
		},
		{ 
			name: "Jose 2", 
			lastname:"De la cruz",
			email:"jose@some.com", 
			username:"generate",
			phone:123456789, 
		},
		{ 
			name: "Jose 3", 
			lastname:"De la cruz",
			email:"jose@some.com", 
			username:"generate",
			phone:123456789, 
		},
		{ 
			name: "Jose 4", 
			lastname:"De la cruz",
			email:"jose@some.com", 
			username:"generate",
			phone:123456789, 
		},
    ]
  },
  mutations: {
    addUserInfo(state){
      state.userInfo.push({ name:state.getDataUser["inpName"],
                            lastname:state.getDataUser["inpLastName"],
                            email:state.getDataUser["inpEmail"],
                            phone: state.getDataUser["inpPhone"]})
	},
	deleteUserInfo(state, index){
		state.userInfo.splice(index, 1)
	},
	editUserInfo(state){
		state.userInfo.splice(state.getDataUser["editId"],1,{ name:state.getDataUser["inpName"],
														lastname:state.getDataUser["inpLastName"],
														email:state.getDataUser["inpEmail"],
														phone: state.getDataUser["inpPhone"]})
	}
  },
  actions: {

  }
})
