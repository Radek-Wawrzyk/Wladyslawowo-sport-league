<template>
  <aside class="sidebar">
    <section class="sidebar-section stats">
      <h2 class="sidebar-section-title">Ranking</h2>
      <div class="sidebar-section-content">
        <div class="stats-tabs">
          <button class="stats-tabs-btn" :class="{'is-active': activeTab === 'players'}" @click="toggleTab('players')">Zawodnicy</button>
          <button class="stats-tabs-btn" :class="{'is-active': activeTab === 'settlements'}" @click="toggleTab('settlements')">Dzielnice/wsie</button>
        </div>
        <List :items="settlements" :link="'settlements'" v-if="activeTab === 'settlements'"></List>
        <List :items="players" :link="'players'" v-if="activeTab === 'players'"></List>
      </div>
    </section>
    <section class="sidebar-section contact">
      <h2 class="sidebar-section-title">Kontakt</h2>
      <div class="sidebar-section-content">
        <ul class="contact-list">
          <li class="contact-list-item">
            <svg aria-hidden="true" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
            <p>Janusz Nowicki</p>
          </li>
          <li class="contact-list-item">
            <svg aria-hidden="true" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
            <p><a href="tel:586745445" aria-label="Zadzwoń" title="Zadzwoń">58 674-54-45</a></p>
          </li>
          <li class="contact-list-item">
            <svg aria-hidden="true" data-prefix="far" data-icon="envelope" class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
            <p><a href="mailto:j.nowicki@wladyslawowo.pl" aria-label="Napisz" title="Napisz">j.nowicki@wladyslawowo.pl</a></p>
          </li>
          <li class="contact-list-item">
            <svg aria-hidden="true" data-prefix="fas" data-icon="map-marker-alt" class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
            <p>Towarowa 8, 84-120 Władysławowo, Polska</p>
          </li>
        </ul>
      </div>
    </section>
    <section class="sidebar-section facebook">
      <h2 class="sidebar-section-title">Social Media</h2>
      <div class="sidebar-section-content">
        <div class="fb-page" data-href="https://www.facebook.com/ligawladyslawowo/" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/ligawladyslawowo/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/ligawladyslawowo/">Liga Sportowa Gminy Władysławowo</a></blockquote></div>
      </div>
    </section>

  </aside>
</template>

<script>

  import List from "./List/List"

  export default {
    name: "Sidebar",
    components: {
      List
    },
    props: [
      "players",
      "settlements"
    ],
    data() {
      return {
        activeTab: 'players'
      }
    },
    methods: {
      toggleTab(item) {
        this.activeTab = item;
      }
    },
    created: function() {
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v3.1';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  }
</script>

<style src="./Sidebar.scss" scoped />