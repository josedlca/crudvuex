<template>
  <div class="about">
    <div v-for="(item) of userInfoData" :key="item.id">
      <p>{{item.name}}</p>
      <p>{{item.lastname}}</p>
      <p>{{item.email}}</p>
      <p>{{item.username}}</p>
      <p>{{item.phone}}</p>
    </div>
    <p>{{userInfoData}}</p>
  </div>
</template>

<script>
	export default {
    name: "userTable",
    
    data(){
      return{
        userInfoData: this.$store.state.userInfo
      }
    }
	}
</script>
