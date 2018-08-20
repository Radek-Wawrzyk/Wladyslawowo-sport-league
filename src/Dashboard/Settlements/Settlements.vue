<template>
  <div>
    <header class="columns">
      <div class="column">
        <h1 class="title is-3">Dzielnice</h1>
      </div>
      <div class="column has-text-right">
        <router-link class="button is-medium is-danger" to="/panel/players/add-player">Dodaj dzielnicę</router-link>
      </div>
    </header>
    <section class="section">
      <table class="table is-bordered is-fullwidth">
        <thead class="panel-head">
        <tr>
          <th>Nazwa osiedla</th>
          <th>Opis osiedla</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="settlement in settlements" :key="settlement.id">
          <th>{{settlement.name}}</th>
          <th>{{settlement.description}}</th>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>

export default {
  name: "Settlements",
  computed: {
    settlements() {
      return this.$store.getters.settlements;
    }
  }
}

</script>

