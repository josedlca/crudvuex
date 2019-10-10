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
	}
</script>