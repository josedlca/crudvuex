<template>
	<div class="w-full h-10 flex border-t-2 border-b-2">
		<div class=" w-2/12 flex items-center justify-left font-bold" v-for="item of allTitles" :key="item.id">
			{{item}}
		</div>
	</div>
</template>

<script>
	export default {
		name: 'NameFileComponent',	
		data(){
			return{
				allTitles:[
					"ID", "First", "Last", "Email", "Phone","Actions"
				]
			}
		}
	}
</script>