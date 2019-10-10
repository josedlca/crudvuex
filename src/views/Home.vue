<template>
  <div class="home">
	<Formcomponente />
    <button @click="addUserInfo(addUserInfoData)">ADD INFO</button>
	<p class="hidden">{{getStoreInfoFromComponent}}</p>
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

	data(){
		return{
			addUserInfoData : ""
		}
	},
	computed:{
		getStoreInfoFromComponent(){
			return this.addUserInfoData = this.$store.state.getDataUser
		}
	},
	methods:{
		...mapMutations(['addUserInfo'])
	}
}
</script>
