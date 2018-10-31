<template>
	<nav class="navigation">
		<figure class="navigation-logo">
			<router-link to="/" aria-label="Homepage">
				<img src="@/Assets/logo.jpg" alt="Liga sportowa gminy Władysławowo"/>
			</router-link>
		</figure>
		<ul class="navigation-menu" :class="{ 'is-active' : menuStatus}">
			<li class="navigation-menu-link" @click="closeMenu"><router-link to="/" aria-label="Strona główna">Główna</router-link></li>
			<li class="navigation-menu-link" @click="closeMenu"><router-link to="/players" aria-label="Zawodnicy">Zawodnicy</router-link></li>
			<li class="navigation-menu-link" @click="closeMenu"><router-link to="/settlements" aria-label="Osiedla">Osiedla</router-link></li>
			<li class="navigation-menu-link" @click="closeMenu"><router-link to="/news" aria-label="Wydarzenia">Wydarzenia</router-link></li>
			<li class="navigation-menu-link" @click="closeMenu"><router-link to="/events" aria-label="Imprezy">Imprezy</router-link></li>
			<li class="navigation-menu-link" @click="closeMenu"><router-link to="/contact" aria-label="Kontakt">Kontakt</router-link></li>
		</ul>
		<div class="navigation-searchbar">
			<Searchbar/>
		</div>
		<button role="button" class="navbar-burger navigation-icon" :class="{'is-active' : menuStatus}" aria-label="Open menu" :aria-expanded="menuStatus ? 'true' : 'false'" @click="toggleMenu">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</button>
	</nav>
</template>

<script>

import Searchbar from "./Searchbar/Searchbar";

export default {
  name: "Navigation",
  components: {
    Searchbar
  },
  data() {
    return {
      menuStatus: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuStatus = !this.menuStatus;
    },
		closeMenu() {
      if ( window.innerWidth <= 1024 ) {
        this.menuStatus = false;
			}
		}
  }
}

</script>

<style lang="scss" src="./Navigation.scss" scoped />
