<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
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
