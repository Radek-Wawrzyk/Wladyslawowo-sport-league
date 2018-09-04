<template>
  <div>
    <header class="columns">
      <div class="column">
        <h1 class="title is-3">Wydarzenia</h1>
      </div>
      <div class="column has-text-right">
        <router-link class="button is-medium is-danger" to="/panel/news/add-news">Dodaj wydarzenie</router-link>
      </div>
    </header>
    <section class="section">
      <table class="table is-bordered is-fullwidth">
        <thead class="panel-head">
        <tr>
          <th>Tytuł</th>
          <th>Opis</th>
          <th>Data</th>
          <th>Zdjęcie</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="news in newsList" :key="news.id">
          <th>{{news.name}}</th>
          <th>{{news.description}}</th>
          <th>{{news.date}}</th>
            <th><img :src="news.imageUrl" :alt="news.name" style="max-width: 100px;height: auto" /></th>
        </tr>
        </tbody>
      </table>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "News",
  computed: {
    newsList() {
      return this.$store.getters.news;
    }
  }
}

</script>