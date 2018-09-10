<template>
  <div class="website">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>

import Navigation from "./Navigation/Navigation.vue"
import Footer from "./Footer/Footer.vue"

export default {
  name: "Website",
  components: {
    Navigation,
    Footer
  }
}

</script>