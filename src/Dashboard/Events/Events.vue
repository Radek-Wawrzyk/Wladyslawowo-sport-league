<template>
  <div>
    <header class="columns">
      <div class="column">
        <h1 class="title is-3">Wydarzenia</h1>
      </div>
      <div class="column has-text-right">
        <router-link class="button is-medium is-danger" to="/panel/events/add-event">Dodaj wydarzenie</router-link>
      </div>
    </header>
    <section class="section">
      <table class="table is-bordered is-fullwidth">
        <thead class="panel-head">
        <tr>
          <th>Tytuł</th>
          <th>Data</th>
          <th>Opis wydarzenia</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="event in events" :key="event.id">
          <th>{{event.name}}</th>
          <th>{{event.date}}</th>
          <th>{{event.description}}</th>
        </tr>
        </tbody>
      </table>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Events",
  computed: {
    events() {
      console.log( this.$store.getters.events);
      return this.$store.getters.events;
    }
  }
}

</script>