<template>
  <div class="home w-full">
	<div class="w-10/12 mx-auto">
		<Formcomponente />
		<div class="w-6/12 mx-auto flex justify-center py-2">
			<button class="outline-none bg-green-600 px-2 py-1 rounded-lg text-white font-semibold" @click="addUserInfo">ADD INFO</button>
		</div>
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
