<template>
	<div class=" w-6/12 mx-auto">
		<div class="flex justify-around mb-4">
			<label class=" w-3/12 text-teal-500 font-normal text-xl">Name</label>
			<input class=" w-8/12 border-b-2 border-teal-600 outline-none" v-model="newInfoData.inpName" type="text">
		</div>
		<div class="flex justify-around mb-4">
			<label class=" w-3/12 text-teal-500 font-normal text-xl">LastName</label>
			<input class=" w-8/12 border-b-2 border-teal-600 outline-none" v-model="newInfoData.inpLastName" type="text">
		</div>
		<div class="flex justify-around mb-4">
			<label class=" w-3/12 text-teal-500 font-normal text-xl">Email</label>
			<input class=" w-8/12 border-b-2 border-teal-600 outline-none" v-model="newInfoData.inpEmail" type="text">
		</div>
		<div class="flex justify-around mb-4">
			<label class=" w-3/12 text-teal-500 font-normal text-xl">Phone</label>
			<input class=" w-8/12 border-b-2 border-teal-600 outline-none" v-model="newInfoData.inpPhone" type="text">
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