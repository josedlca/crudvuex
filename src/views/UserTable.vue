<template>
	<div class="w-full">
		<div class="w-10/12 mx-auto">
			<NameFileComponent />
			<div class="w-full flex h-10 border-b pl-1" v-for="(item, index) of userInfoData" :key="item.id">
				<div class="w-12 flex items-center justify-left font-bold">
					{{index}}
				</div>
				<div class="w-24 flex items-center justify-left">
					{{item.name}}
				</div>
				<div class="w-2/12 flex items-center justify-left">
					{{item.lastname}}
				</div>
				<div class="w-3/12 flex items-center justify-left break-all">
					{{item.email}}
				</div>
				<div class="w-2/12 flex items-center justify-left">
					{{item.phone}}
				</div>
				<div class="w-2/12 flex items-center justify-left">
					{{item.username}}
				</div>
				<div class="w-2/12 flex items-center justify-left">
					<router-link class="bg-yellow-600 rounded-lg h-8 px-4 flex items-center mr-3" :to="{name: 'editUser', params: {id:index}}">
						<svg class="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
						</svg>
					</router-link>
					<button class="bg-red-600 rounded-lg h-8 px-4 flex items-center" @click="deleteUserInfo(index)">
						<svg class="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
							<path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapMutations} from 'vuex';
  import NameFileComponent from '@/components/NameFileComponent'

	export default {
	components:{
		NameFileComponent
	},
    name: "userTable",
    
    data(){
      return{
        userInfoData: this.$store.state.userInfo
      }
    },

    methods:{
      ...mapMutations(['deleteUserInfo'])
    }
	}
</script>
