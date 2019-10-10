<template>
	<div>
		<Formcomponente />		
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