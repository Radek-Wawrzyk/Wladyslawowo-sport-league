<template>
  <nav class="navigation-bar">
    <div class="navigation-actions">
      <figure class="navigation-logo">
				<router-link to="/">
					<img class="navigation-logo" src="@/Assets/logo.jpg" alt="Liga sportowa gminy Władysławowo"/>
				</router-link>
			</figure>
			<ul :class="{ active : burgerToggled}" class="navigation-links">
				<li :class="{ active : activeElement == 0 }" class="navigation-link"><router-link @click.native="toggleActiveElement(0)" to="/">Główna</router-link></li>
				<li :class="{ active : activeElement == 1 }" class="navigation-link"><router-link @click.native="toggleActiveElement(1)" to="/players">Zawodnicy</router-link></li>
				<li :class="{ active : activeElement == 2 }" class="navigation-link"><router-link @click.native="toggleActiveElement(2)" to="/settlements">Osiedla</router-link></li>
				<li :class="{ active : activeElement == 3 }" class="navigation-link"><router-link @click.native="toggleActiveElement(3)" to="/events">Imprezy</router-link></li>
				<li :class="{ active : activeElement == 4 }" class="navigation-link"><router-link @click.native="toggleActiveElement(4)" to="/contact">Kontakt</router-link></li>
				<li :class="{ active : activeElement == 5 }" class="navigation-link"><router-link @click.native="toggleActiveElement(5)" to="/help">Pomoc</router-link></li>
			</ul>
			<div class="navigation-searchbar">
				<Searchbar/>
			</div>
			<button @click="toggleBurger" class="navigation-burger">
				<span class="burger-segment"/>
			</button>
		</div>
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
			activeElement: 0,
			burgerToggled: false
    };
  },
  methods: {
    toggleActiveElement(id) {
      this.activeElement = id;
		},
		toggleBurger()
		{
			this.burgerToggled = !this.burgerToggled;
		}
  }
};
</script>


<style lang="scss" src="./Navigation.scss" scoped>
</style>
