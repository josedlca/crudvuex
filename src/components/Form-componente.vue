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
		<p class="hidden">{{sendDataToStore}}</p>
		<br>
	</div>
</template>

<script>
	export default {
		name: 'Formcomponente',

		data(){
			return{
				newInfoData:{
					inpName: "",
					inpLastName: "",
					inpEmail: "",
					inpPhone: ""
				}
			}
		},
		computed:{
			sendDataToStore(){
				return this.$store.state.getDataUser = this.newInfoData
			}
		}
	}
</script>