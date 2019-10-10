import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	newInfoData:{
		inpName: "",
		inpLastName: "",
		inpEmail: "",
		inpPhone: ""
	},
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
    addUserInfo(state, newDataFromHome){
      state.userInfo.push({ name:newDataFromHome.inpName,
                            lastname:newDataFromHome.inpLastName,
                            email:newDataFromHome.inpEmail,
                            phone: newDataFromHome.inpPhone})
	},
	deleteUserInfo(state, index){
		state.userInfo.splice(index, 1)
	},
	editUserInfo(state, newDataFromEdit){
		// state.userInfo.splice(index, 1)
		state.userInfo.splice(newDataFromEdit.editId,1,{	name:newDataFromEdit.inpName,
															lastname:newDataFromEdit.inpLastName,
															email:newDataFromEdit.inpEmail,
															phone: newDataFromEdit.inpPhone})
	}

  },
  actions: {

  }
})
