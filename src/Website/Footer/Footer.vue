<template>
  <footer class="footer">
    <router-link to="/" alt="Liga Sportowa Gminy Władysławowo" class="footer-link">
      <h5>Liga Sportowa Gminy Władysławowo</h5>
    </router-link>
    <div class="footer-social">
      <a class="footer-social-item" href="https://www.facebook.com/ligawladyslawowo/" aria-label="Facebook Ligi sportowej gminy Władysławowo">
        <svg aria-hidden="true" data-prefix="fab" data-icon="facebook-f" class="svg-inline--fa fa-facebook-f fa-w-9" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 512"><path fill="currentColor" d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path></svg>
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

<style lang="scss" src="./Footer.scss" scoped />