<template>
  <div class="website">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
    <PageLoader></PageLoader>
  </div>

</template>

<script>

import Navigation from "./Navigation/Navigation.vue"
import Footer from "./Footer/Footer.vue"
import PageLoader from "../Dashboard/PageLoader";

export default {
  name: "Website",
  components: {
    PageLoader,
    Navigation,
    Footer
  }
}

</script>

<style src="./Website.scss"></style>