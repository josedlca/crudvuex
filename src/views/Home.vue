<template>
  <div class="home">
	<Formcomponente />
    <button @click="addUserInfo">ADD INFO</button>
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
