<template>
  <footer class="footer-container">
    <router-link to="/" alt="Liga Sportowa Gminy Władysławowo">
      <img class="footer-logo" src="@/Assets/logo.png"/>
    </router-link>
    <div class="footer-social">
      <p class="facebook-text">Znajdź nas na </p>
      <a href="https://www.facebook.com/ligawladyslawowo/" aria-label="Facebook Ligi sportowej gminy Władysławowo" class="logo-frame">
        <svg class="facebook-logo" aria-hidden="true" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" class=""></path></svg>
      </a>
    </div>
    <p class="footer-copyright">
      &copy; Copyright Gmina Władysławowo 2018 <br/>
      Design: <a href="https://plus.google.com/105337576128668418187"> Nigtellios</a> i  <a href="http://radek-wawrzyk.pl/">Radek</a> Realizacja:
      <a href="http://radek-wawrzyk.pl/">Radek</a> & <a href="https://github.com/JakubK">Jakub</a>
    </p>
  </footer>
</template>

<script>

export default {
  name: "Footer"
}

</script>

<style lang="scss" src="./Footer.scss" scoped></style>