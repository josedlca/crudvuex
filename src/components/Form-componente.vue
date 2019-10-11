<template>
	<div>
		<div>
			<label>Name</label>
			<input class="border" v-model="newInfoData.inpName" type="text">
		</div>
		<div>
			<label>Email</label>
			<input class="border" v-model="newInfoData.inpEmail" type="text">
		</div>
		<div>
			<label>LastName</label>
			<input class="border" v-model="newInfoData.inpLastName" type="text">
		</div>
		<div>
			<label>Phone</label>
			<input class="border" v-model="newInfoData.inpPhone" type="text">
		</div>
		<p class="hidden">{{sendDataToStore}}</p>
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
					inpPhone: "",
					editId: this.$route.params.id
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