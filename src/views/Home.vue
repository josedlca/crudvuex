<template>
  <div class="home">
    <!-- <label>Name</label>
    <input class="border" v-model="newInfoData.inpName" type="text">
    <br>
    <label>Email</label>
    <input class="border" v-model="newInfoData.inpEmail" type="text">
    <br>
    <label>LastName</label>
    <input class="border" v-model="newInfoData.inpLastName" type="text">
    <br>
    <label>Phone</label>
    <input class="border" v-model="newInfoData.inpPhone" type="text">
    <br> -->
	<Formcomponente />
    <button @click="addUserInfo(newInfoData)">ADD INFO</button>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';
import Formcomponente from "@/components/Form-componente.vue";

export default {
	components:{
		Formcomponente
	},
	name: 'home',

	// data(){
	// 	return{
	// 	newInfoData:{
	// 		inpName: "",
	// 		inpLastName: "",
	// 		inpEmail: "",
	// 		inpPhone: ""
	// 	}
	// 	}
	// },
	methods:{
		...mapMutations(['addUserInfo'])
	}
}
</script>
