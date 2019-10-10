<template>
	<div class="w-full">
		<div class="w-10/12 mx-auto">
			<NameFileComponent />
			<div v-for="(item, index) of userInfoData" :key="item.id">
				<p>{{item.name}}</p>
				<p>{{item.lastname}}</p>
				<p>{{item.email}}</p>
				<p>{{item.username}}</p>
				<p>{{item.phone}}</p>
				<router-link :to="{name: 'editUser', params: {id:index}}">
					<svg class="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"/>
					</svg>
				</router-link>
				<button @click="deleteUserInfo(index)">
					<svg class="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"/>
					</svg>
				</button>
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
