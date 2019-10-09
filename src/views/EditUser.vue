<template>
	<div>
		<label>Name</label>
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
		<br>
		
		<button @click="editUserInfo(newInfoData)" class="mr-4">Save Changes</button>
		<button @click="userTab">volver a la tabla</button>
	</div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
	name: 'editUser',

	data(){
		return{
			newInfoData:{
				inpName: "",
				inpLastName: "",
				inpEmail: "",
				inpPhone: "",
				editId: this.$route.params.id
			}
		}
	},
	methods:{
		...mapMutations(['editUserInfo']),

		userTab(){
			this.$router.push('/userTable')
		}
	}
}
</script>