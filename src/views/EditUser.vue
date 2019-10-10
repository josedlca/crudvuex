<template>
	<div>
		<Formcomponente />		
		<button @click="editUserInfo()" class="mr-4">Save Changes</button>
		<button @click="userTab">volver a la tabla</button>
	</div>
</template>

<script>
import {mapMutations} from 'vuex';
import Formcomponente from "@/components/Form-componente.vue";

export default {
	components:{
		Formcomponente
	},
	name: 'editUser',

	methods:{
		...mapMutations(['editUserInfo']),

		userTab(){
			this.$router.push('/userTable')
		}
	}
}
</script>