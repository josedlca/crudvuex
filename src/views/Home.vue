<template>
  <div class="home w-full">
	<div class=" w-10/12 mx-auto">
		<Formcomponente />
		<button @click="addUserInfo">ADD INFO</button>
	</div>
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

	methods:{
		...mapMutations(['addUserInfo'])
	}
}
</script>
