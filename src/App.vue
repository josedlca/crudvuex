<template>
  <div id="app">
    <div id="nav" class=" w-full flex justify-center items-center bg-teal-500 text-white text-xl font-bold h-12">
      <router-link to="/">Home</router-link> 
	  <span class=" mx-2">|</span>
      <router-link to="/userTable">Users</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import './assets/css/style.css'
// $route.params.id
export default {}
</script>
