<template>
  <div id="app">
    <Navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from './Components/Navigation/Navigation'
export default {
  name: "App",
  components: {
    Navigation
  }
}	

</script>

<style lang="scss" src="./Styles/bulma.sass"/>