<template>
    <nav class="navigation-bar">
        <div class="navigation-actions">
            <figure class="navigation-logo">
                <img class="navigation-logo" src="@/Assets/logo.jpg" alt="Liga sportowa gminy Władysławowo"/>
            </figure>
            <ul class="navigation-links">
                <li class="navigation-link"><router-link to="/">Główna</router-link></li>
                <li class="navigation-link"><router-link to="/contestants">Zawodnicy</router-link></li>
                <li class="navigation-link"><router-link to="/districts">Osiedla</router-link></li>
                <li class="navigation-link"><router-link to="/events">Imprezy</router-link></li>
                <li class="navigation-link"><router-link to="/help">Pomoc</router-link></li>
                <li class="navigation-link"><router-link to="/contact">Kontakt</router-link></li>
            </ul>
            <div class="navigation-searchbar">
                Searchbar
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "Navigation",
    data()
    {
        return{

        };
    }
}
</script>


<style lang="scss" src="./Navigation.scss" scoped>

</style>
