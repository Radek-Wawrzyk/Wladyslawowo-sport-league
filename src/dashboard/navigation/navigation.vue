<template>
  <nav class="navigation">
    <figure class="navigation-logo">
      <img src="@/assets/logo.jpg" alt="Liga sportowa gminy Władysławowo"/>
    </figure>
    <div class="navigation-panel">
      <button class="navigation-panel-btn" @click="toggleDropDown" :class="{'is-active': dropDown}">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/profile/profile-512.jpg" alt="user name"/>
        <p>User name</p>
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
  </nav>
</template>

<script>

export default {
  name: "Navigation",
  data() {
    return {
      dropDown: false
    }
  },
  methods: {
    toggleDropDown: function() {
      this.dropDown =! this.dropDown;
    }
  }

}

</script>

<style lang="scss" src="./navigation.scss" scoped />


