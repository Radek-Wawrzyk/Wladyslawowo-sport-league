<template>
    <div>
        <Navigation/>
        <router-view>
        </router-view>
        <Footer/>
    </div>
</template>

<script>
import Navigation from "./Navigation/Navigation.vue"
import Footer from "./Footer/Footer.vue"

export default {
    name: "Website",
    components: 
    {
        Navigation,
        Footer
    }
}
</script>

<style lang="scss" scoped></style>
