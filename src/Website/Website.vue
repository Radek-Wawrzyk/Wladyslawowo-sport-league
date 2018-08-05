<template>
    <div>
        <Navigation/>
        <router-view>
        </router-view>
    </div>
</template>

<script>
import Navigation from "./Navigation/Navigation.vue"

export default {
    name: "Website",
    components: 
    {
        Navigation
    }
}
</script>

<style lang="scss" scoped></style>
