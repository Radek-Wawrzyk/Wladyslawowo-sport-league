<template>
  <div>
    <header class="columns">
      <div class="column">
        <h1 class="title is-3">Osiedla</h1>
      </div>
      <div class="column has-text-right">
        <router-link class="button is-medium is-danger" to="/panel/settlements/add-settlement">Dodaj osiedle</router-link>
      </div>
    </header>
    <section class="section">
      <table class="table is-bordered is-fullwidth">
        <thead class="panel-head">
        <tr>
          <th>Logo</th>
          <th>Nazwa osiedla</th>
          <th>Opis osiedla</th>
          <th>Edycja</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="settlement in settlements" :key="settlement.id">
          <th><img :src="settlement.imageUrl" :alt="settlement.name" style="max-width: 100px;height: auto" /></th>
          <th>{{settlement.name}}</th>
          <th>{{settlement.description}}</th>
          <th>
            <button class="button" type="button" @click="updateSettlement(settlement)">Edytuj</button>
            <button class="button" type="button" @click="removeSettlement(settlement)">Usuń</button>
          </th>
        </tr>
        </tbody>
      </table>
    </section>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "Settlements",
  computed: {
    settlements() {
      return this.$store.getters.settlements;
    }
  },
  methods:
  {
    removeSettlement(settlement)
    {
      this.$store.dispatch('removeSettlement',settlement);
    },
    updateSettlement(settlement)
    {
      this.$router.push({name: "UpdateSettlement", params: {id: settlement.id}});
    }
  }
}

</script>

