<template>
  <div id="dashboard">
    <Navigation></Navigation>
    <Menu></Menu>
  </div>
</template>

<script>

import Navigation from "./navigation/navigation.vue"
import Menu from "./menu/Menu.vue"

export default {
  name: "home",
  components: {
    Navigation,
    Menu
  }
}

</script>

<style lang="scss" />



