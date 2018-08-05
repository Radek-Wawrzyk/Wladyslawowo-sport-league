<template>
  <nav class="navigation">
    <section class="navigation-left">
      <a role="button" @click="toggleMenu" class="navbar-burger" :class="{'is-active': menu}" aria-control="menu" aria-label="Menu" :aria-expanded="menu ? 'true' : ''">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
      <figure class="navigation-logo">
        <router-link to="/panel/home" aria-label="Open panel homepage">
          <img src="@/assets/logo.jpg" alt="Liga sportowa gminy Władysławowo"/>
        </router-link>
      </figure>
      <div class="navigation-search control has-icons-right">
        <input class="input" type="text" v-model="searchValue" placeholder="Wyszukaj w panelu...">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512">
          <g>
            <path d="M495,466.2L377.2,348.4c29.2-35.6,46.8-81.2,46.8-130.9C424,103.5,331.5,11,217.5,11C103.4,11,11,103.5,11,217.5   S103.4,424,217.5,424c49.7,0,95.2-17.5,130.8-46.7L466.1,495c8,8,20.9,8,28.9,0C503,487.1,503,474.1,495,466.2z M217.5,382.9   C126.2,382.9,52,308.7,52,217.5S126.2,52,217.5,52C308.7,52,383,126.3,383,217.5S308.7,382.9,217.5,382.9z"/>
          </g>
        </svg>
      </div>
    </section>
    <section class="navigation-right">
      <div class="navigation-panel">
        <button class="navigation-panel-btn" @click="toggleDropDown" :class="{'is-active': dropDown}">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/profile/profile-512.jpg" alt="user name"/>
          <p>przykładowy@email.com</p>
          <svg width="292.36px" height="292.36px" enable-background="new 0 0 292.362 292.362" version="1.1" viewBox="0 0 292.362 292.362" xml:space="preserve" xmlns="http://www.w3.org/2000/svg">
            <path d="m286.94 69.377c-3.614-3.617-7.898-5.424-12.848-5.424h-255.81c-4.952 0-9.233 1.807-12.85 5.424-3.617 3.621-5.424 7.902-5.424 12.851 0 4.948 1.807 9.229 5.424 12.847l127.91 127.91c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.91-127.91c3.613-3.617 5.427-7.898 5.427-12.847 0-4.948-1.814-9.229-5.427-12.85z"/>
          </svg>
        </button>
        <transition name="fade" tag="div">
          <div class="navigation-dropdown" :class="{'is-active': dropDown}" v-if="dropDown">
            <ul class="navigation-dropdown-content">
              <li>Profil użytkownika</li>
              <li>Wyloguj</li>
            </ul>
          </div>
        </transition>
      </div>
    </section>
  </nav>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      dropDown: false,
      searchValue: ""
    }
  },
  methods: {
    toggleDropDown: function() {
      this.dropDown =! this.dropDown;
    },
    toggleMenu: function() {
      this.$store.dispatch("toggleMenu");
    }
  },
  computed: {
    menu() {
      return this.$store.getters.menu;
    }
  }
}

</script>

<style lang="scss" src="./navigation.scss" scoped />


