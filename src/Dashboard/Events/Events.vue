<template>
  <section>
    <header class="panel-header">
      <h1 class="title is-3">Imprezy</h1>
      <router-link class="button is-medium is-danger" to="/panel/events/add-event">Dodaj imprezę</router-link>
    </header>
    <div class="table-responsive">
      <table class="table is-bordered is-fullwidth">
        <thead class="panel-head">
        <tr>
          <th>Tytuł</th>
          <th>Data</th>
          <th>Opis imprezy</th>
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
    </div>
  </section>
</template>

<script>

export default {
  name: "Events",
  computed: {
    events() {
      return this.$store.getters.events;
    }
  }
}

</script>